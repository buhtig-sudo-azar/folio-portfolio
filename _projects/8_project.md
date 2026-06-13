---
layout: page
title: "WCD Education Platform"
description: "Обучающая платформа для освоения Web Cache Deception: теория, пошаговая визуализация атаки и встроенный ассистент"
img: assets/img/projects/wcd-education-platform.png
icon: favicons/wcd.png
importance: 2
category: веб-безопасность
demo: https://wcd-education-platform.vercel.app/
related_publications: false
---

Платформа для практического освоения уязвимости Web Cache Deception (WCD) на русском языке. Теоретическая база, наглядная демонстрация механизма атаки и чат-ассистент — всё в одном интерфейсе.

### Что такое Web Cache Deception

Web Cache Deception — уязвимость, при которой злоумышленник обманывает кэш-сервер, заставляя его сохранить конфиденциальные данные пользователя и выдать их другим. Суть атаки строится на расхождении в интерпретации URL между кэшем и сервером-источником.

### Что внутри

Платформа состоит из 5 разделов:

- **Главная** — обзор, ключевые концепции, быстрый доступ ко всем разделам
- **Теория** — 7 образовательных модулей: Web Cache, кэширование, Backend, WCD, delimiter discrepancies, интерпретация URL, утечка данных
- **Лаборатория** — наглядная демонстрация WCD-атаки: ввод URL, пошаговая визуализация обработки Cache и Backend, отображение расхождений и утечки данных
- **Ассистент** — чат-бот «Кэш-страж», эксперт по WCD, HTTP, CDN, Burp Suite и PortSwigger Academy
- **О проекте** — описание, технологический стек, ссылки на ресурсы PortSwigger

### Лаборатория

Ключевой раздел — наглядная демонстрация механизма атаки:

1. Пользователь вводит URL (например, `/account/home%0f.css`)
2. Отображается, как Cache интерпретирует запрос как статический ресурс
3. Отмечается, как Backend считывает тот же запрос как защищённую страницу
4. Иллюстрируется процесс кэширования ответа с конфиденциальными данными
5. Фиксируется итоговая утечка данных

Поддерживаются delimiter discrepancies: `%0f`, `%0a`, `%00`, `;`

### Стек

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui
- **State**: Zustand
- **Деплой**: Vercel

### Попробовать

👉 [Открыть WCD Education Platform]({{ page.demo }}){: .project-link}

---

**AZAR**

<style>
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: transparent;
  color: #34d399 !important;
  border: 1.5px solid #10b981;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
}
.project-link:hover {
  background: #10b981;
  color: #fff !important;
  border-color: #10b981;
}
</style>
