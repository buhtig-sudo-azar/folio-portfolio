---
layout: page
title: "Dive into LLMs — Образовательная платформа"
description: Интерактивная платформа для изучения LLM с ИИ-ассистентами по каждой теме — от тонкой настройки до безопасности агентов
img: assets/img/projects/dive-into-llms-edu.png
importance: 1
category: infrastructure
related_publications: false
github: https://github.com/buhtig-sudo-azar/dive-into-llms-edu
redirect: https://darknet-infrastructure.vercel.app/
---

Образовательная платформа для интерактивного изучения больших языковых моделей, созданная на основе курса **«动手学大模型 Dive into LLMs»** от Шанхайского университета Цзяотун (SJTU) — 36K+ звёзд на GitHub.

### Что представляет собой платформа

Платформа превращает 11 глав академического курса в интерактивный веб-опыт. Каждая тема — отдельная страница с описанием, ключевыми моментами, ссылками на оригинальные ресурсы (презентации, туториалы, Jupyter-ноутбуки) и — главное — персональным ИИ-ассистентом, готовым ответить на любые вопросы по теме.

### Темы курса

1. **Дообучение и развёртывание** — Fine-tuning, HuggingFace Transformers, Gradio
2. **Промпт-инжиниринг и цепочка рассуждений** — Zero-shot, Few-shot, Chain-of-Thought
3. **Редактирование знаний** — EasyEdit, ROME, MEND
4. **Математическое рассуждение** — Дистилляция, DeepSeek-R1, SFT
5. **Водяные знаки моделей** — KGW, SIR, X-SIR алгоритмы
6. **Атаки Jailbreak** — EasyJailbreak, PAIR, защита от атак
7. **Стеганография в LLM** — Кодирование Хаффмана, FLC, скрытые сообщения
8. **Мультимодальные модели** — NExT-GPT, архитектуры MLLM
9. **GUI-агенты** — Qwen2-VL, LLaMA-Factory, автономное взаимодействие
10. **Безопасность агентов** — R-Judge, Auto-UI, AIOS
11. **RLHF-выравнивание безопасности** — PPO, функция награды, alignment

### ИИ-ассистенты

Каждая глава оснащена специализированным чат-ботом, который:
- Обладает экспертными знаниями по конкретной теме
- Отвечает на русском языке
- Даёт примеры кода и практические рекомендации
- Помогает разобраться в сложных концепциях

### Стек технологий

- **Frontend**: Next.js 16, React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, OpenRouter API (Gemma 4)
- **Деплой**: Vercel
- **Адаптивный дизайн**: полная поддержка мобильных устройств, планшетов и десктопов

### Попробовать

Платформа доступна по адресу:  
[https://darknet-infrastructure.vercel.app/](https://darknet-infrastructure.vercel.app/)

Исходный код:  
[https://github.com/buhtig-sudo-azar/dive-into-llms-edu](https://github.com/buhtig-sudo-azar/dive-into-llms-edu)
