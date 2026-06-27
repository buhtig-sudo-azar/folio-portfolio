---
layout: page
title: "Трансформеры — архитектура целиком"
description: "Четвёртый курс серии: 10 модулей о том, как из attention-механизма собирается полная архитектура трансформера — Q/K/V проекции, causal и padding маски, feed-forward слои, residual connections, LayerNorm, encoder/decoder семейства, positional encoding (sin/cos, RoPE, ALiBi), сквозной forward pass, BERT/GPT/T5"
img: assets/img/projects/transformers-app.png
icon: favicons/transformers-app.png
importance: 1
category: ии-мл
demo: https://transformers-app.vercel.app/
related_publications: false
---

Четвёртый интерактивный курс в серии — про то, как из attention-механизма собирается полная архитектура трансформера. Если в предыдущем курсе мы разобрали, что такое эмбеддинги и attention на концептуальном уровне, то здесь мы проходим по каждому компоненту архитектуры: Q/K/V проекции, causal и padding маски, feed-forward слои с разными активациями (ReLU, GELU, SiLU, SwiGLU), residual connections и LayerNorm, три семейства архитектур (encoder, decoder, encoder-decoder), три способа позиционного кодирования (sin/cos, RoPE, ALiBi), сквозной forward pass по одному слою и чем именно отличаются BERT, GPT и T5. Десять модулей с живыми песочницами прямо в браузере: QKV playground, mask painter, FFN playground, gradient flow simulator, RoPE rotation viewer, layer-by-layer forward pass.

### О чём этот курс

После того как понятны эмбеддинги и self-attention, перед разработчиком NLP-системы открывается следующий логический шаг: как именно эти компоненты собираются в полноценную архитектуру трансформера. Этот курс проходит по всем слоям и компонентам — от Q/K/V проекций до сравнения BERT/GPT/T5 — и закрывает архитектурный фундамент, необходимый для чтения кода любой современной LLM на HuggingFace. Без этих знаний невозможно понять, чем именно отличается decoder-only модель от encoder-decoder, почему RoPE выигрывает у absolute positional encoding, и зачем нужен SwiGLU вместо классического ReLU в современных LLM (Llama, Mistral, Qwen). Каждый модуль снабжён живой песочницей, чтобы потрогать концепцию руками.

### Модули курса

1. **От attention к трансформеру** — карта пайплайна: кликабельная схема от токенов до выхода через N слоёв
2. **Q, K, V проекции** — три матрицы весов и почему именно три; живой playground с выбором Query-токена
3. **Causal и padding mask** — две маски трансформера: mask painter с переключателем
4. **Feed-forward слой** — expansion ratio и активации: ReLU, GELU, SiLU, SwiGLU playground
5. **Residual connections и LayerNorm** — gradient flow simulator: вкл/выкл residual и LN, глубина до 48 слоёв
6. **Encoder, Decoder, Encoder-Decoder** — три семейства архитектур: сравнительная диаграмма потоков
7. **Positional encoding** — sin/cos, RoPE, ALiBi: heatmap и rotation viewer для RoPE
8. **Сквозной forward pass** — 11 шагов по одному transformer block: layer-by-layer visualizer
9. **BERT/GPT/T5** — что варьируется между семействами: сравнительная таблица по 10+ характеристикам
10. **Что дальше** — roadmap: backprop/Adam (следующий курс), LLM, efficient inference, multimodal, agents, interpretability

### Чем отличается от предыдущих курсов

Если «Эмбеддинги и attention» — это концептуальный фундамент (что такое векторы и внимание), то этот курс — про инженерную кухню: как именно эти концепции собираются в рабочий transformer block, какие маски и зачем, какие активации и почему SwiGLU вытесняет ReLU, какие нормализации и зачем нужен pre-LN вместо post-LN. Янтарный акцент визуально отличает четвёртый курс от материнских: бирюзового (ml-s-nula), фиолетового (tokenizatsiya-app) и изумрудного (embeddings-app). Каждый модуль имеет свой уникальный цвет в навигации, но все они лежат в тёплой янтарно-розовой части спектра с переходом в холодные тона к концу.

### Ключевые песочницы

- **Карта пайплайна** — кликай на этап, видишь форму тензора и формулу
- **QKV playground** — выбор токена-Query, температура softmax, живые веса внимания
- **Mask painter** — переключение causal / padding / обе маски, видишь матрицу 8×8
- **FFN playground** — ReLU / GELU / SiLU / SwiGLU, expansion ratio 2×/4×/8×
- **Gradient flow simulator** — вкл/выкл residual и LayerNorm, глубина до 48 слоёв
- **Сравнение архитектур** — Encoder (BERT) / Decoder (GPT) / Encoder-Decoder (T5)
- **PE визуализация** — heatmap для sin/cos, RoPE rotation viewer, ALiBi bias
- **11-шаговый forward pass** — пошаговый проход по transformer block
- **Сравнительная таблица BERT/GPT/T5** — по 10+ характеристикам

### Особенности

- **10 модулей с живыми песочницами** — всё работает на чистом React + TypeScript, без бэкенда
- **Янтарный акцент** — визуально отличается от ml-s-nula (бирюза), tokenizatsiya-app (фиолетовый) и embeddings-app (изумруд)
- **Прогресс сохраняется** локально в `localStorage` — твои отметки не теряются между сессиями
- **Светлая/тёмная тема** с переключателем
- **Адаптивный дизайн** — работает на мобильных и десктопах
- **Hero pill → Курс 5** «Как нейросети учатся» (nn-learning-app.vercel.app, rose accent) — следующий курс серии

### Стек технологий

- **Frontend**: Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **Стили**: Tailwind CSS 4 + shadcn/ui, токены тем через CSS-переменные
- **Иконки**: lucide-react
- **Хранилище прогресса**: `localStorage` (без серверной части)
- **Деплой**: Vercel

### Попробовать

👉 [Открыть Трансформеры — архитектура целиком]({{ page.demo }}){: .project-link}

---

**AZAR**

<style>
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: transparent;
  color: #d97706 !important;
  border: 1.5px solid #b45309;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
}
.project-link:hover {
  background: #b45309;
  color: #fff !important;
  border-color: #b45309;
}
</style>
