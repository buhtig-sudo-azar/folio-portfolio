/**
 * AI Chat Agent — Floating chatbot for portfolio site
 * Calls dive-into-llms-new Vercel API for AI responses
 */
(function () {
  'use strict';

  const API_URL = 'https://dive-into-llms-new.vercel.app/api/generate';

  const AGENT = {
    name: 'АЗАР-Ассистент',
    role: 'Гид по портфолио',
    greeting: 'Привет! Я ассистент портфолио. Расскажу о проектах, технологиях и помогу разобраться в любом из них.',
    suggestions: [
      'Расскажи про LLM Explorer',
      'Что такое эмбеддинги?',
      'Какие проекты по безопасности есть?',
    ],
    systemPrompt:
      'Ты — AI-ассистент портфолио разработчика AZAR (Виталий Азаров). ' +
      'Твоя задача — помогать посетителям разобраться в проектах портфолио. ' +
      'Вот проекты:\n' +
      '1. HTTP Host Header Injection — демо уязвимости (веб-безопасность)\n' +
      '2. Embedding — интерактивный стенд по эмбеддингам (ии-мл)\n' +
      '3. Embedding Chunks — визуализация чанкинга (ии-мл)\n' +
      '4. E-Commerce Генератор — генератор карточек товаров (разное)\n' +
      '5. AI-Searcher — AI-поисковик (разное)\n' +
      '6. DARK — Сетевая инфраструктура Dark Web (инфраструктура)\n' +
      '7. Dive into LLMs — Образовательная платформа (инфраструктура)\n' +
      '8. WCD Education Platform — Web Cache Deception (веб-безопасность)\n' +
      '9. LLM Explorer — Интерактивный симулятор LLM (ии-мл)\n' +
      'Отвечай на русском. Будь кратким и дружелюбным. Если спрашивают не про портфолио — вежливо направь к проектам.',
  };

  // ─── State ─────────────────────────────────────────────────
  let isOpen = false;
  let isMinimized = false;
  let isLoading = false;
  let messages = [];

  // ─── Helpers ───────────────────────────────────────────────
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  function esc(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  // ─── Build DOM ─────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = getCSS();
  document.head.appendChild(style);

  // Floating button
  var fab = document.createElement('button');
  fab.id = 'ai-chat-fab';
  fab.innerHTML =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  fab.setAttribute('aria-label', 'Открыть AI-ассистента');
  fab.onclick = toggleChat;
  document.body.appendChild(fab);

  // Chat container
  var chat = document.createElement('div');
  chat.id = 'ai-chat-popup';
  chat.className = 'ai-chat-hidden';
  chat.innerHTML = buildPopupHTML();
  document.body.appendChild(chat);

  // Bind events
  chat.querySelector('.ai-chat-close').onclick = closeChat;
  chat.querySelector('.ai-chat-minimize').onclick = minimizeChat;
  chat.querySelector('.ai-chat-send').onclick = function () {
    sendFromInput();
  };
  var textarea = chat.querySelector('.ai-chat-input');
  textarea.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendFromInput();
    }
  });

  // ─── Functions ─────────────────────────────────────────────
  function buildPopupHTML() {
    return (
      '<div class="ai-chat-header">' +
      '  <div class="ai-chat-header-info">' +
      '    <div class="ai-chat-avatar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>' +
      '    <div><div class="ai-chat-name">' + esc(AGENT.name) + '</div><div class="ai-chat-role">' + esc(AGENT.role) + '</div></div>' +
      '  </div>' +
      '  <div class="ai-chat-header-actions">' +
      '    <button class="ai-chat-minimize" aria-label="Свернуть"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg></button>' +
      '    <button class="ai-chat-close" aria-label="Закрыть"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
      '  </div>' +
      '</div>' +
      '<div class="ai-chat-messages"></div>' +
      '<div class="ai-chat-input-area">' +
      '  <textarea class="ai-chat-input" placeholder="Задайте вопрос…" rows="1"></textarea>' +
      '  <button class="ai-chat-send" aria-label="Отправить"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>' +
      '</div>'
    );
  }

  function renderMessages() {
    var container = chat.querySelector('.ai-chat-messages');
    if (messages.length === 0) {
      container.innerHTML =
        '<div class="ai-chat-welcome">' +
        '  <div class="ai-chat-welcome-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>' +
        '  <div class="ai-chat-welcome-name">' + esc(AGENT.name) + '</div>' +
        '  <div class="ai-chat-welcome-greeting">' + esc(AGENT.greeting) + '</div>' +
        '  <div class="ai-chat-suggestions">' +
        AGENT.suggestions
          .map(function (s) {
            return '<button class="ai-chat-suggestion" data-q="' + esc(s) + '">' + esc(s) + '</button>';
          })
          .join('') +
        '  </div>' +
        '</div>';
      container.querySelectorAll('.ai-chat-suggestion').forEach(function (btn) {
        btn.onclick = function () {
          sendMessage(btn.getAttribute('data-q'));
        };
      });
      return;
    }

    var html = '';
    messages.forEach(function (m) {
      if (m.role === 'user') {
        html +=
          '<div class="ai-chat-msg ai-chat-msg-user">' +
          '  <div class="ai-chat-bubble ai-chat-bubble-user">' + esc(m.content) + '</div>' +
          '</div>';
      } else {
        html +=
          '<div class="ai-chat-msg ai-chat-msg-assistant">' +
          '  <div class="ai-chat-avatar-sm"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>' +
          '  <div class="ai-chat-bubble ai-chat-bubble-assistant">' + esc(m.content) + '</div>' +
          '</div>';
      }
    });

    if (isLoading) {
      html +=
        '<div class="ai-chat-msg ai-chat-msg-assistant">' +
        '  <div class="ai-chat-avatar-sm"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>' +
        '  <div class="ai-chat-bubble ai-chat-bubble-assistant ai-chat-typing">Думаю<span class="ai-chat-dots"><span>.</span><span>.</span><span>.</span></span></div>' +
        '</div>';
    }

    container.innerHTML = html;
    container.scrollTop = container.scrollHeight;
  }

  function toggleChat() {
    if (isOpen && !isMinimized) {
      closeChat();
    } else {
      openChat();
    }
  }

  function openChat() {
    isOpen = true;
    isMinimized = false;
    chat.className = 'ai-chat-visible';
    fab.classList.add('ai-chat-fab-active');
    renderMessages();
    chat.querySelector('.ai-chat-input').focus();
  }

  function closeChat() {
    isOpen = false;
    isMinimized = false;
    chat.className = 'ai-chat-hidden';
    fab.classList.remove('ai-chat-fab-active');
  }

  function minimizeChat() {
    isMinimized = true;
    chat.className = 'ai-chat-hidden';
  }

  function sendFromInput() {
    var textarea = chat.querySelector('.ai-chat-input');
    var text = textarea.value.trim();
    if (!text || isLoading) return;
    textarea.value = '';
    sendMessage(text);
  }

  async function sendMessage(text) {
    if (isLoading) return;

    messages.push({ id: uid(), role: 'user', content: text });
    isLoading = true;
    renderMessages();

    try {
      var res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: text,
          systemInstruction: AGENT.systemPrompt,
          temperature: 0.7,
        }),
      });

      var data = await res.json();
      var reply = data.text || 'Не удалось получить ответ. Попробуйте ещё раз.';
      messages.push({ id: uid(), role: 'assistant', content: reply });
    } catch (err) {
      messages.push({
        id: uid(),
        role: 'assistant',
        content: 'Ошибка сети. Проверьте подключение и попробуйте снова.',
      });
    } finally {
      isLoading = false;
      renderMessages();
    }
  }

  // ─── CSS ───────────────────────────────────────────────────
  function getCSS() {
    return '' +
      '#ai-chat-fab{' +
      '  position:fixed;bottom:24px;right:24px;z-index:9998;' +
      '  width:56px;height:56px;border-radius:50%;border:none;cursor:pointer;' +
      '  background:linear-gradient(135deg,#6366f1,#8b5cf6);' +
      '  color:#fff;display:flex;align-items:center;justify-content:center;' +
      '  box-shadow:0 4px 20px rgba(99,102,241,.35);' +
      '  transition:transform .2s,box-shadow .2s,opacity .2s;' +
      '  animation:ai-fab-pulse 3s ease-in-out infinite;' +
      '}' +
      '#ai-chat-fab:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(99,102,241,.45)}' +
      '#ai-chat-fab.ai-chat-fab-active{transform:scale(0);opacity:0;pointer-events:none}' +
      '@keyframes ai-fab-pulse{' +
      '  0%,100%{box-shadow:0 4px 20px rgba(99,102,241,.35)}' +
      '  50%{box-shadow:0 4px 20px rgba(99,102,241,.35),0 0 0 10px rgba(99,102,241,.12)}' +
      '}' +
      '' +
      '#ai-chat-popup{' +
      '  position:fixed;z-index:9999;border-radius:16px;overflow:hidden;' +
      '  display:flex;flex-direction:column;' +
      '  background:var(--global-card-bg-color,#fff);' +
      '  border:1px solid var(--global-divider-color,rgba(0,0,0,.08));' +
      '  box-shadow:0 16px 48px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.04);' +
      '  transition:opacity .25s,transform .25s;' +
      '  font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;' +
      '}' +
      '#ai-chat-popup.ai-chat-visible{' +
      '  bottom:24px;right:24px;width:380px;max-width:calc(100vw - 32px);height:540px;max-height:calc(100vh - 48px);' +
      '  opacity:1;transform:translateY(0) scale(1);pointer-events:auto;' +
      '}' +
      '#ai-chat-popup.ai-chat-hidden{' +
      '  bottom:24px;right:24px;width:380px;max-width:calc(100vw - 32px);height:540px;max-height:calc(100vh - 48px);' +
      '  opacity:0;transform:translateY(12px) scale(.96);pointer-events:none;' +
      '}' +
      '' +
      '.ai-chat-header{' +
      '  display:flex;align-items:center;justify-content:space-between;' +
      '  padding:12px 14px;border-bottom:1px solid var(--global-divider-color,rgba(0,0,0,.08));' +
      '  background:linear-gradient(135deg,rgba(99,102,241,.08),rgba(139,92,246,.06));' +
      '  flex-shrink:0;' +
      '}' +
      '.ai-chat-header-info{display:flex;align-items:center;gap:10px}' +
      '.ai-chat-avatar{' +
      '  width:34px;height:34px;border-radius:50%;' +
      '  background:linear-gradient(135deg,#6366f1,#8b5cf6);' +
      '  display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;' +
      '}' +
      '.ai-chat-name{font-size:.875rem;font-weight:700;color:var(--global-text-color,#1a1a2e)}' +
      '.ai-chat-role{font-size:.7rem;color:var(--global-text-color-light,#888);margin-top:1px}' +
      '.ai-chat-header-actions{display:flex;gap:2px}' +
      '.ai-chat-header-actions button{' +
      '  width:28px;height:28px;border:none;border-radius:6px;background:transparent;' +
      '  color:var(--global-text-color-light,#888);cursor:pointer;display:flex;align-items:center;justify-content:center;' +
      '  transition:background .15s,color .15s;' +
      '}' +
      '.ai-chat-header-actions button:hover{background:var(--global-divider-color,rgba(0,0,0,.06));color:var(--global-text-color,#1a1a2e)}' +
      '' +
      '.ai-chat-messages{' +
      '  flex:1;overflow-y:auto;padding:12px;min-height:0;' +
      '  scrollbar-width:thin;scrollbar-color:var(--global-divider-color,rgba(0,0,0,.1)) transparent;' +
      '}' +
      '' +
      '.ai-chat-welcome{text-align:center;padding:24px 12px}' +
      '.ai-chat-welcome-icon{' +
      '  width:52px;height:52px;border-radius:50%;margin:0 auto 12px;' +
      '  background:linear-gradient(135deg,#6366f1,#8b5cf6);' +
      '  display:flex;align-items:center;justify-content:center;color:#fff;' +
      '  box-shadow:0 4px 16px rgba(99,102,241,.3);' +
      '}' +
      '.ai-chat-welcome-name{font-size:.9rem;font-weight:700;color:var(--global-text-color,#1a1a2e);margin-bottom:6px}' +
      '.ai-chat-welcome-greeting{font-size:.78rem;color:var(--global-text-color-light,#888);line-height:1.5;margin-bottom:16px}' +
      '.ai-chat-suggestions{display:flex;flex-direction:column;gap:6px}' +
      '.ai-chat-suggestion{' +
      '  font-size:.78rem;padding:8px 12px;border-radius:8px;border:1px solid var(--global-divider-color,rgba(0,0,0,.1));' +
      '  background:transparent;color:var(--global-text-color,#1a1a2e);cursor:pointer;text-align:left;' +
      '  transition:border-color .15s,background .15s;' +
      '  font-family:inherit;' +
      '}' +
      '.ai-chat-suggestion:hover{border-color:#6366f1;background:rgba(99,102,241,.05)}' +
      '' +
      '.ai-chat-msg{display:flex;gap:8px;margin-bottom:10px}' +
      '.ai-chat-msg-user{justify-content:flex-end}' +
      '.ai-chat-bubble{max-width:82%;padding:8px 12px;border-radius:12px;font-size:.82rem;line-height:1.55;white-space:pre-wrap;word-break:break-word}' +
      '.ai-chat-bubble-user{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border-bottom-right-radius:4px}' +
      '.ai-chat-bubble-assistant{background:var(--global-bg-color,#f4f4f8);color:var(--global-text-color,#1a1a2e);border-bottom-left-radius:4px}' +
      '.ai-chat-avatar-sm{' +
      '  width:24px;height:24px;border-radius:50%;flex-shrink:0;margin-top:2px;' +
      '  background:linear-gradient(135deg,#6366f1,#8b5cf6);' +
      '  display:flex;align-items:center;justify-content:center;color:#fff;' +
      '}' +
      '.ai-chat-typing{color:var(--global-text-color-light,#888)}' +
      '.ai-chat-dots span{animation:ai-dot 1.2s infinite;opacity:0}' +
      '.ai-chat-dots span:nth-child(1){animation-delay:0s}' +
      '.ai-chat-dots span:nth-child(2){animation-delay:.2s}' +
      '.ai-chat-dots span:nth-child(3){animation-delay:.4s}' +
      '@keyframes ai-dot{0%,100%{opacity:0}50%{opacity:1}}' +
      '' +
      '.ai-chat-input-area{' +
      '  display:flex;gap:8px;padding:10px 12px;border-top:1px solid var(--global-divider-color,rgba(0,0,0,.08));' +
      '  background:var(--global-card-bg-color,#fff);flex-shrink:0;' +
      '}' +
      '.ai-chat-input{' +
      '  flex:1;resize:none;border:1px solid var(--global-divider-color,rgba(0,0,0,.1));' +
      '  border-radius:10px;padding:8px 12px;font-size:.82rem;font-family:inherit;' +
      '  background:var(--global-bg-color,#f4f4f8);color:var(--global-text-color,#1a1a2e);' +
      '  outline:none;min-height:38px;max-height:80px;transition:border-color .15s;' +
      '}' +
      '.ai-chat-input:focus{border-color:#6366f1}' +
      '.ai-chat-input::placeholder{color:var(--global-text-color-light,#aaa)}' +
      '.ai-chat-send{' +
      '  width:38px;height:38px;border-radius:10px;border:none;cursor:pointer;' +
      '  background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;' +
      '  display:flex;align-items:center;justify-content:center;flex-shrink:0;' +
      '  transition:opacity .15s,transform .1s;' +
      '}' +
      '.ai-chat-send:hover{opacity:.9}' +
      '.ai-chat-send:active{transform:scale(.94)}' +
      '.ai-chat-send:disabled{opacity:.4;cursor:default}' +
      '' +
      '/* Dark mode overrides */' +
      'html[data-theme=dark] #ai-chat-popup,' +
      'html.dark #ai-chat-popup{box-shadow:0 16px 48px rgba(0,0,0,.4),0 0 0 1px rgba(255,255,255,.06)}' +
      'html[data-theme=dark] .ai-chat-bubble-assistant,' +
      'html.dark .ai-chat-bubble-assistant{background:rgba(255,255,255,.06)}' +
      '' +
      '/* Mobile */' +
      '@media(max-width:480px){' +
      '  #ai-chat-popup.ai-chat-visible,' +
      '  #ai-chat-popup.ai-chat-hidden{' +
      '    bottom:0;right:0;left:0;width:100%;max-width:100%;height:75vh;max-height:75vh;border-radius:16px 16px 0 0;' +
      '  }' +
      '  #ai-chat-fab{bottom:16px;right:16px;width:50px;height:50px}' +
      '}';
  }
})();
