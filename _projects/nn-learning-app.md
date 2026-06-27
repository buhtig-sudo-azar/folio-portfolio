---
layout: page
title: "Как нейросети учатся — backprop, Adam, регуляризация"
description: "Пятый курс серии: 10 модулей о том, как именно нейросеть обучается после того, как понятна архитектура — loss functions, backprop и chain rule, оптимизаторы (SGD → Momentum → Adam → AdamW), LR schedules (warmup, cosine decay), dropout и регуляризация, batch/layer/RMSNorm, vanishing/exploding gradients, gradient clipping, mixed precision (FP16/BF16/FP8)"
img: assets/img/projects/nn-learning-app.png
icon: favicons/nn-learning-app.png
importance: 1
category: ии-мл
demo: https://nn-learning-app.vercel.app/
related_publications: false
---

Пятый интерактивный курс в серии — про то, как именно нейросеть обучается после того, как понятна архитектура. Если в предыдущем курсе мы разобрали, как устроен transformer block (Q/K/V, маски, FFN, residual), то здесь мы проходим по всему циклу обучения: forward → loss → backprop → optimizer step, и разбираем каждую компоненту в деталях. Loss functions (MSE, cross-entropy, contrastive), backpropagation и chain rule, оптимизаторы (SGD → Momentum → RMSprop → Adam → AdamW), LR schedules (warmup + cosine decay), нормализация (BatchNorm, LayerNorm, RMSNorm, GroupNorm), регуляризация (dropout, weight decay, label smoothing), vanishing/exploding gradients и gradient clipping, mixed precision (FP32/FP16/BF16/FP8). Десять модулей с живыми песочницами прямо в браузере: backprop visualizer с пошаговым reverse pass, optimizer playground с траекториями на 2D loss surface, LR schedule viewer, gradient flow analyzer с глубиной до 120 слоёв.

### О чём этот курс

После того как понятна архитектура трансформера, перед разработчиком NLP-системы открывается следующий логический шаг: как именно эту архитектуру обучать. Этот курс проходит по всему циклу обучения — от функции потери до mixed precision — и закрывает динамический фундамент, необходимый для понимания pretraining LLM. Без этих знаний невозможно понять, почему AdamW вытеснил SGD, зачем нужен warmup+cosine decay, почему residual connections спасают от vanishing gradients, и почему BF16 стал современным стандартом для pretraining LLM. Каждый модуль снабжён живой песочницей, чтобы потрогать концепцию руками.

### Модули курса

1. **От архитектуры к обучению** — карта цикла: forward → loss → backprop → step, кликабельная схема
2. **Loss functions** — MSE, cross-entropy, hinge, contrastive: playground с переключателем и слайдером
3. **Backprop и chain rule** — пошаговый reverse pass по маленькому вычислительному графу
4. **Оптимизаторы** — SGD, Momentum, RMSprop, Adam: траектории на 2D loss surface
5. **LR schedules** — constant, step, cosine, warmup+cosine, cyclic: viewer с настраиваемым warmup
6. **Нормализация** — BatchNorm, LayerNorm, RMSNorm, GroupNorm: какие оси усредняются
7. **Регуляризация** — dropout, weight decay, label smoothing, early stopping: mask painter
8. **Градиенты** — vanishing/exploding + clipping: gradient flow analyzer с глубиной до 120 слоёв
9. **Mixed precision** — FP32, FP16, BF16, FP8: bit layout, range vs precision
10. **Что дальше** — roadmap: LLM (следующий курс), efficient inference, multimodal, agents, interp, alignment

### Чем отличается от предыдущих курсов

Если «Трансформеры» — это статика (как устроен блок), то этот курс — про динамику (как блок обучается). Здесь нет ни одного нового архитектурного элемента — только то, что делает с уже известной архитектурой градиентный спуск. Rose акцент визуально отличает пятый курс от материнских: бирюзового (ml-s-nula), фиолетового (tokenizatsiya-app), изумрудного (embeddings-app) и янтарного (transformers-architecture). Каждый модуль имеет свой уникальный цвет в навигации, но все они лежат в тёплой розово-красной части спектра с переходом в холодные тона к концу.

### Ключевые песочницы

- **Карта цикла обучения** — кликай на этап, видишь формулу и описание
- **Loss playground** — переключай MSE/CE/hinge/contrastive, двигай предсказание, смотри значение loss
- **Backprop visualizer** — 6-шаговый reverse pass по графу x→z→ŷ→L, все производные посчитаны
- **Optimizer playground** — 4 оптимизатора стартуют с одной точки на 2D loss surface, видно траектории
- **LR schedule viewer** — 5 расписаний, настраиваемый η_max/η_min/warmup/total steps
- **Нормализация — оси** — матрица [B,D], подсветка какие оси усредняются для каждого метода
- **Dropout mask painter** — 64 нейрона, слайдер p, смена seed — маска меняется
- **Gradient flow analyzer** — глубина до 120 слоёв, активация/residual/clipping — видно vanishing
- **FP bit layout** — визуализация 32/16/8/8 бит: sign, exponent, mantissa

### Особенности

- **10 модулей с живыми песочницами** — всё работает на чистом React + TypeScript, без бэкенда
- **Rose акцент** — визуально отличается от ml-s-nula (бирюза), tokenizatsiya-app (фиолетовый), embeddings-app (изумруд) и transformers-architecture (янтарь)
- **Прогресс сохраняется** локально в `localStorage` — твои отметки не теряются между сессиями
- **Светлая/тёмная тема** с переключателем
- **Адаптивный дизайн** — работает на мобильных и десктопах
- **Hero pill → Курс 6** «Большие языковые модели» (llms-app.vercel.app, blue accent) — следующий курс серии

### Стек технологий

- **Frontend**: Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **Стили**: Tailwind CSS 4 + shadcn/ui, токены тем через CSS-переменные
- **Иконки**: lucide-react
- **Хранилище прогресса**: `localStorage` (без серверной части)
- **Деплой**: Vercel

### Попробовать

👉 [Открыть Как нейросети учатся]({{ page.demo }}){: .project-link}

---

**AZAR**

<style>
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: transparent;
  color: #e11d48 !important;
  border: 1.5px solid #be123c;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
}
.project-link:hover {
  background: #be123c;
  color: #fff !important;
  border-color: #be123c;
}
</style>
