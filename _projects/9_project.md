---
layout: page
title: "Dive into LLMs — Интерактивный симулятор"
description: Интерактивный симулятор внутренних механизмов LLM: токенизация, эмбеддинги, самовнимание, сэмплирование, RAG, агенты и MCP
img: assets/img/projects/dive-into-llms-new.png
icon: favicons/dive-into-llms-new.png
importance: 1
category: инфраструктура
demo: https://dive-into-llms-new.vercel.app/
github: https://github.com/buhtig-sudo-azar/dive-into-llms-new
related_publications: false
---

Интерактивный симулятор для визуального изучения внутренних механизмов больших языковых моделей. Платформа позволяет «заглянуть под капот» LLM и в реальном времени увидеть, как работают токенизация, эмбеддинги, механизм самовнимания, стратегии сэмплирования, поиск RAG и агентские протоколы MCP.

### Что представляет собой платформа

В отличие от текстовых объяснений и статичных схем, этот проект предлагает полностью интерактивный подход: каждый механизм LLM реализован как отдельный визуальный модуль с возможностью экспериментировать с параметрами и наблюдать результаты в реальном времени. Платформа работает как с реальным Gemini API, так и в автономном режиме — с качественной локальной симуляцией, что делает её доступной без API-ключа.

### Разделы симулятора

Платформа включает 6 интерактивных глав, каждая из которых покрывает ключевой механизм работы LLM:

1. **Токенизация** — визуализация процесса разбиения текста на токены, показ различий между алгоритмами токенизации (BPE, WordPiece, Unigram), интерактивный ввод текста и подсветка полученных токенов
2. **Эмбеддинги** — 2D-проекция векторного пространства слов, интерактивный граф семантических связей, визуализация кластеров похожих слов, поддержка как реальных эмбеддингов через Gemini API, так и детерминированных fallback-координат
3. **Самовнимание** — пошаговая визуализация механизма Self-Attention: матрицы Q, K, V, вычисление attention weights, много-headed attention, цветовая heatmap значений внимания между словами
4. **Сэмплирование** — интерактивная настройка параметров генерации: temperature, top-p, top-k, сравнение жадного и стохастического декодирования, визуализация распределения вероятностей по токенам
5. **Поиск RAG** — демонстрация конвейера Retrieval-Augmented Generation: индексация документов, векторный поиск, подстановка контекста в промпт, генерация ответа с опорой на найденные документы
6. **Агенты и MCP** — визуализация работы AI-агентов с инструментами, протокол Model Context Protocol, цепочки вызовов инструментов, поток данных между агентом и внешними сервисами

### Режимы работы

Платформа поддерживает два режима работы, переключающихся автоматически в зависимости от наличия API-ключа:

- **Реальный режим** — при подключённом Gemini API используются настоящие эмбеддинги (text-embedding-004) и генерация текста (gemini-3.5-flash) для максимально точной демонстрации
- **Автономный режим** — при отсутствии API-ключа платформа полностью функциональна благодаря встроенным fallback-механизмам: предопределённые координаты эмбеддингов для популярных слов, детерминированная хеш-генерация для неизвестных слов, контекстно-зависимые симулированные ответы для RAG и агентских демо

### Стек технологий

- **Frontend**: React 19, Vite 6, TypeScript, Tailwind CSS 4, Motion (анимации), Lucide React (иконки)
- **Backend**: Express.js, Vercel Serverless Functions
- **AI**: Google Gemini API (text-embedding-004, gemini-3.5-flash)
- **Деплой**: Vercel

### Ссылки

- 👉 [Открыть симулятор]({{ page.demo }}){: .demo-button}
- 🔗 [Исходный код на GitHub]({{ page.github }}){: .github-button}

---

**AZAR**

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
.github-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 24px;
  background: linear-gradient(135deg, #1e293b, #334155);
  color: white !important;
  border-radius: 10px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(30,41,59,0.5);
}
.github-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(30,41,59,0.7);
}
</style>
