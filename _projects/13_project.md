---
layout: page
title: "LLM Attacks Lab — Интерактивная лаборатория"
description: "Расширенный практикум по уязвимостям LLM: prompt injection, эксплуатация API, небезопасная обработка вывода, отравление данных и AI-ассистенты"
img: assets/img/projects/llm-attacks-lab.png
icon: favicons/llm-attacks-lab.png
importance: 1
category: ии-безопасность
demo: https://llm-attacks-lab.vercel.app/
related_publications: false
---

Детальный практикум для исследования уязвимостей больших языковых моделей (LLM) по материалам PortSwigger Web Security Academy. 9 специализированных модулей с AI-менторами, интерактивными песочницами и системой геймификации — всё на русском языке.

### Что представляет собой платформа

Ресурс превращает все лаборатории PortSwigger по LLM Attacks в структурированный обучающий опыт. Отдельная страница с теорией, практическими примерами и персональным AI-компаньоном — ассистент отвечает на вопросы по нажатию на иконку чата. Встроенная система геймификации мотивирует прохождение: XP, уровни, ачивки, серии дней и ежедневные задания.

### Модули курса

1. **Основы LLM** — что такое LLM, архитектура Transformer, токены, промпты, принципы генерации, интеграция в веб-приложения
2. **Архитектура и обучение LLM** — процесс обучения, fine-tuning, embedding, RAG, поверхности атаки через обучающие данные
3. **Prompt Injection** — прямой и косвенный prompt injection, техники обхода фильтров, exfiltration через markdown-инъекции, визуализация атаки
4. **Эксплуатация LLM API** — как работают LLM API, mapping поверхности атаки, цепочки уязвимостей, несанкционированные вызовы функций
5. **Небезопасная обработка вывода** — XSS через LLM, CSRF-атаки, SSRF, SQL-инъекции, заражение клиентских приложений
6. **Атаки через обучающие данные** — отравление обучающих данных, утечка чувствительных данных из тренировочного корпуса, бэкдоры в моделях
7. **Обнаружение уязвимостей LLM** — методология тестирования, автоматизированное сканирование, фаззинг промптов, мониторинг аномалий
8. **Уязвимости AI-сканеров** — косвенный prompt injection в AI-сканерах, эксфильтрация данных через сканеры, обход ограничений
9. **Защита от атак на LLM** — архитектурные меры защиты, sandboxing, валидация вывода, сегментация доступа, мониторинг

### Стек

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion
- **AI**: OpenRouter — стриминг ответов в реальном времени, контекстные менторы по каждой теме
- **Деплой**: Vercel

### Попробовать

👉 [Открыть LLM Attacks Lab]({{ page.demo }}){: .project-link}

---

**AZAR**

<style>
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: transparent;
  color: #818cf8 !important;
  border: 1.5px solid #6366f1;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
}
.project-link:hover {
  background: #6366f1;
  color: #fff !important;
  border-color: #6366f1;
}
</style>
