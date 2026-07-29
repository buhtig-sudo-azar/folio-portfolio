---
layout: page
title: "Большие языковые модели — pretraining, scaling, sampling, fine-tuning"
description: "Шестой курс серии: 10 модулей о том, как устроены LLM — pretraining и next-token prediction, scaling laws (Kaplan vs Chinchilla), KV-cache и inference-ускорения, sampling (temperature, top-k, top-p), in-context learning и few-shot, hallucinations и grounding (RAG, citations), prompt engineering и chain-of-thought, SFT/RLHF/DPO для адаптации base model в ассистента"
img: assets/img/projects/llms-app.png
icon: favicons/llms-app.png
importance: 1
category: ии-мл
demo: https://llms-app.vercel.app/
related_publications: false
---

Шестой интерактивный курс в серии — про то, как устроены большие языковые модели (LLM) после того, как понятна архитектура трансформера и принципы обучения нейросетей. Если в предыдущем курсе мы разобрали backprop, оптимизаторы и регуляризацию, то здесь мы переходим на уровень целых моделей: pretraining на триллионах токенов, scaling laws, KV-cache, sampling-стратегии, галлюцинации и RAG, prompt engineering и chain-of-thought, и наконец — pipeline post-training, превращающий base model в ассистента (SFT → RLHF/DPO). Десять модулей с живыми песочницами прямо в браузере: scaling law viewer с переключателем Kaplan/Chinchilla, KV-cache visualizer с замером ускорения, sampling playground с temperature/top-k/top-p, hallucination analyzer с типами галлюцинаций, chain-of-thought step-by-step.

### О чём этот курс

После понимания архитектуры и алгоритма обучения разработчик NLP-систем сталкивается со следующим пластом: как именно работают LLM, чем они отличаются от «обычных» трансформеров, и почему ChatGPT ведёт себя как ассистент, а base model — нет. Этот курс закрывает все эти вопросы. Pretraining и next-token prediction (почему одна задача даёт столько способностей), scaling laws (Kaplan vs Chinchilla — почему данных нужно больше, чем думали), KV-cache (почему автогрессивная генерация быстрая), sampling (почему ответы разные), in-context learning (почему few-shot работает без weight updates), hallucinations и grounding (почему модель врёт и как с этим борются через RAG), prompt engineering и chain-of-thought (как форма промпта меняет качество ответа), SFT/RLHF/DPO (как из base model делают ассистента). Каждый модуль снабжён живой песочницей, чтобы потрогать концепцию руками.

### Модули курса

1. **Что такое LLM** — 5-шаговый pipeline: корпус → токенизация → transformer → next-token prediction → генерация
2. **Pretraining** — цикл из 5 шагов: батч → forward → cross-entropy → backprop → repeat; next-token prediction playground
3. **Scaling laws** — Kaplan vs Chinchilla визуализатор: loss vs tokens при разных параметрах, оптимальное D/N ≈ 20×
4. **KV-cache** — генерация с/без кэша: замер ускорения, объяснение почему K и V не нужно пересчитывать
5. **Sampling** — temperature/top-k/top-p playground: logits → softmax → выбор токена, маскирование кандидатов
6. **In-context learning** — zero/one/few-shot: как примеры в промпте меняют точность, зависимость от размера модели
7. **Hallucinations** — 4 типа (factual/citation/logical/temporal): примеры, RAG, citations, system prompt
8. **Prompting** — direct vs chain-of-thought: пошаговое рассуждение, влияние на точность многошаговых задач
9. **Fine-tuning** — pipeline post-training: base model → SFT → RLHF/DPO, эволюция адаптации
10. **Что дальше** — roadmap: Курс 7 (alignment, gold), RAG-приложения, локальные LLM, исследовательские работы

### Серия курсов

Это шестой курс в серии из семи. Курс 5 «Как нейросети учатся» ([nn-learning-app](https://nn-learning-app.vercel.app/)) ведёт к этому курсу. Этот курс ведёт к Курсу 7 «Адаптация и alignment» (gold, в разработке). Полная серия: ml-s-nula → tokenizatsiya-app → embeddings-app → transformers-architecture → nn-learning-app → llms-app → alignment-app.

### Попробовать

👉 [Открыть Большие языковые модели]({{ page.demo }}){: .project-link}

---

**AZAR**

<style>
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: transparent;
  color: #2563eb !important;
  border: 1.5px solid #1d4ed8;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
}
.project-link:hover {
  background: #1d4ed8;
  color: #fff !important;
  border-color: #1d4ed8;
}
</style>
