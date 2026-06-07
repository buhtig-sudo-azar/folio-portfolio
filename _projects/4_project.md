---
layout: page
title: E-Commerce Генератор
description: Генератор готовых карточек товаров для маркетплейсов — Wildberries, Ozon, Яндекс Маркет
img: assets/img/projects/ecommerce-generator.png
icon: favicons/ecommerce.png
importance: 1
category: разное
demo: https://zhopka.vercel.app/
related_publications: false
---

Инструмент для операций на маркетплейсах: загружаешь фото товара, указываешь название и параметры — получаешь готовую карточку 900×1200 для Wildberries, Ozon или Яндекс Маркет.

### Что умеет

- Генерация продающего текста (заголовок, подзаголовок, ключевые преимущества) на основе данных о товаре
- 6 стилей карточки: минимализм, премиум, весёлый, элегантный, спортивный, строгий
- Бейджи: «Хит продаж», «Новинка», «Лучшая цена», «Топ выбор», «Эксклюзив»
- Редактирование текста прямо на карточке в реальном времени
- Скачивание готовой карточки в PNG (900×1200)
- Тёмная и светлая тема
- Адаптивный интерфейс для мобильных устройств

### Стек

- **Frontend**: Next.js, React, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, OpenRouter (LLM для генерации текста)
- **Деплой**: Vercel

### Попробовать

👉 [Открыть генератор]({{ page.demo }}){: .demo-button}

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
</style>
