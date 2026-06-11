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

👉 [Открыть генератор]({{ page.demo }}){: .project-link}

---


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
