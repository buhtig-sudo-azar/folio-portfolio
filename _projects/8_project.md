---
layout: page
title: "WCD Education Platform"
description: "Интерактивная образовательная платформа для изучения уязвимости Web Cache Deception: теория, лаборатория и ИИ-ассистент"
img: assets/img/projects/wcd-education-platform.png
icon: favicons/wcd.png
importance: 2
category: веб-безопасность
demo: https://wcd-education-platform-1nuuiz9am-azars-projects-e8b4719a.vercel.app/
related_publications: false
---

Интерактивная образовательная платформа для изучения уязвимости Web Cache Deception (WCD). Все материалы на русском языке: теория, пошаговая визуализация атаки и ИИ-ассистент.

### Что такое Web Cache Deception

Web Cache Deception — уязвимость, при которой атакующий обманывает кэш-сервер, заставляя его сохранить конфиденциальные данные пользователя и выдать их другим. Суть атаки строится на расхождении в интерпретации URL между кэшем и сервером-источником.

### Что внутри

Платформа состоит из 5 разделов:

- **Главная** — обзор платформы, ключевые концепции, быстрый доступ к разделам
- **Теория** — 7 образовательных разделов: Web Cache, кэширование, Backend, WCD, delimiter discrepancies, интерпретация URL, утечка данных
- **Лаборатория** — интерактивная демонстрация атаки WCD: ввод URL, пошаговая визуализация обработки Cache и Backend, отображение расхождений и утечки данных
- **ИИ-ассистент** — чат-бот «Кэш-страж», эксперт по WCD, HTTP, CDN, Burp Suite и PortSwigger Academy
- **О проекте** — описание, технологический стек, ссылки на ресурсы PortSwigger

### Лаборатория

Ключевой раздел платформы — интерактивная демонстрация механизма атаки:

1. Пользователь вводит URL (например, `/account/home%0f.css`)
2. Визуально показывается, как Cache интерпретирует запрос как статический ресурс
3. Показывается, как Backend интерпретирует тот же запрос как защищённую страницу
4. Демонстрируется процесс кэширования ответа с конфиденциальными данными
5. Показывается итоговая утечка данных

Поддерживаются delimiter discrepancies: `%0f`, `%0a`, `%00`, `;`

### Стек

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui
- **State**: Zustand
- **AI**: OpenRouter (Google Gemma 4 31B) — потоковый вывод ответов
- **Деплой**: Vercel

### Попробовать

👉 [Открыть WCD Education Platform]({{ page.demo }}){: .demo-button}

---

<style>
.demo-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 24px;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  color: white !important;
  border-radius: 10px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(16,185,129,0.3);
}
.demo-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(16,185,129,0.4);
}
</style>
