---
layout: page
title: "Oracle AI Hub Dashboard"
description: Интерактивный дашборд для навигации по 15+ AI-проектам Oracle AI Developer Hub — приложения, воркшопы, ноутбуки и визуализация когнитивных архитектур
img: assets/img/projects/oracle-ai-hub.png
icon: favicons/oracle-ai-hub.png
importance: 1
category: разное
demo: https://github.com/buhtig-sudo-azar/oracle-ai-hub-dashboard
related_publications: false
---

Интерактивный дашборд, который превращает монорепозиторий [Oracle AI Developer Hub](https://github.com/oracle-devrel/oracle-ai-developer-hub) в наглядный каталог с фильтрацией, поиском и визуализацией. Платформа позволяет быстро ориентироваться среди 15 приложений, 5 воркшопов и 40+ ноутбуков — от RAG-систем и мульти-агентных архитектур до векторного поиска и памяти агентов.

### Что внутри

Дашборд состоит из нескольких ключевых разделов, каждый из которых покрывает отдельный аспект навигации по репозиторию:

- **Приложения (15)** — карточки AI-приложений с описанием, стеком технологий, требованиями к запуску и прямой ссылкой на GitHub. Каждое приложение помечено индикатором runnability: полностью локальное (Ollama + Docker), частично локальное или требующее облачных сервисов (OCI, OpenAI)
- **Воркшопы (5)** — пошаговые учебные материалы: от Information Retrieval до Enterprise Data Agent. Каждый воркшоп размечен по уровню сложности: начальный, средний, продвинутый
- **Ноутбуки (40+)** — Jupyter-ноутбуки, сгруппированные по категориям: RAG, агенты, база данных, мультимодальность, аналитика. Прямые ссылки на открытие в Google Colab
- **Explorer** — интерактивная визуализация 15 когнитивных архитектур рассуждений: Chain-of-Thought, Tree of Thoughts, ReAct, Self-Reflection, Self-Consistency, Decomposition, Least-to-Most, Refinement, Debate, MCTS, Analogical, Socratic, Meta-Reasoning, Strategy Comparison и Architecture Overview

### Визуализация стратегий рассуждений

Ключевая особенность дашборда — интерактивные виджеты, которые показывают, как работают когнитивные архитектуры LLM-агентов:

- **Chain-of-Thought** — пошаговое рассуждение от условия к ответу через логические промежуточные шаги
- **Tree of Thoughts** — поиск по дереву возможных рассуждений с ветвлением и возвратом
- **ReAct** — чередование рассуждения (Reasoning) и действий (Acting) с инструментами
- **Self-Reflection** — черновик, критика, улучшение — агент правит собственный ответ
- **Self-Consistency** — мажоритарное голосование среди нескольких цепочек рассуждений
- **MCTS** — Monte Carlo Tree Search для пространства рассуждений

Каждая стратегия визуализирована как пошаговый анимированный виджет, позволяющий увидеть внутреннюю механику работы агента.

### Фильтрация и навигация

Система фильтрации позволяет быстро находить нужные проекты по нескольким критериям:

- **Требования к запуску**: полностью локально / частично локально / облачные сервисы
- **Наличие веб-интерфейса**: с UI или только CLI/API
- **Зависимости**: Oracle DB, OCI, Ollama, OpenAI, Docker
- **Категория**: приложения, воркшопы, ноутбуки

Для каждого проекта отображается полная информация: стек технологий, архитектурная схема, список возможностей, требуемые ресурсы и прямые ссылки на документацию и исходный код.

### Стек

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion
- **Визуализация**: кастомные React-виджеты для когнитивных архитектур
- **Деплой**: GitHub, Vercel

### Попробовать

👉 [Открыть на GitHub]({{ page.demo }}){: .project-link}

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
