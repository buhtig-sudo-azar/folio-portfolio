---
layout: page
title: AI-Searcher
description: AI-поисковик с академическим поиском, анализом источников и интеллектуальным чатом
img: assets/img/projects/ai-searcher.png
icon: favicons/ai-searcher.png
importance: 1
category: разное
demo: https://ai-searcher-ebon.vercel.app/
related_publications: false
---

AI-поисковик нового поколения — объединяет веб-поиск, поиск научных статей, анализ достоверности источников и AI-ассистента в одном интерфейсе.

### Что умеет

- **Веб-поиск** — AI-поиск по всему интернету с агрегацией результатов из нескольких поисковых систем
- **Академический поиск** — поиск научных статей на arXiv: авторы, аннотации, категории, прямые ссылки на PDF и DOI
- **Анализ источников** — оценка достоверности любого URL по трём метрикам: авторитетность, репутация, уровень риска
- **AI-чат** — интеллектуальный ассистент, который ищет информацию в сети и даёт обоснованные ответы с цитированием источников
- **Новости** — поиск актуальных новостей по любой теме
- **Тренды** — обнаружение популярных тем прямо сейчас
- **Сравнение источников** — параллельное сравнение результатов по двум разным запросам

### Стек

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui
- **AI**: OpenRouter (NVIDIA Nemotron 3 Ultra) — стриминг ответов в реальном времени
- **Поиск**: arXiv API
- **Деплой**: Vercel

### Попробовать

👉 [Открыть AI-Searcher]({{ page.demo }}){: .demo-button}

---

<style>
.demo-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 24px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white !important;
  border-radius: 10px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(99,102,241,0.3);
}
.demo-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(99,102,241,0.4);
}
</style>
