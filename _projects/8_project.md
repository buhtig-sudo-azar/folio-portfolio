---
layout: page
title: "WCD Education Platform"
description: "Интерактивная образовательная платформа для изучения уязвимости Web Cache Deception: теория, лаборатория и ассистент"
img: assets/img/projects/wcd-education-platform.png
icon: favicons/wcd.png
importance: 2
category: веб-безопасность
demo: https://wcd-education-platform.vercel.app/
related_publications: false
---

Интерактивная образовательная платформа для изучения уязвимости Web Cache Deception (WCD). Все материалы на русском языке: теория, пошаговая визуализация атаки и встроенный ассистент.

### Что такое Web Cache Deception

Web Cache Deception — уязвимость, при которой атакующий обманывает кэш-сервер, заставляя его сохранить конфиденциальные данные пользователя и выдать их другим. Суть атаки строится на расхождении в интерпретации URL между кэшем и сервером-источником.

### Что внутри

Платформа состоит из 5 разделов:

- **Главная** — обзор платформы, ключевые концепции, быстрый доступ к разделам
- **Теория** — 7 образовательных разделов: Web Cache, кэширование, Backend, WCD, delimiter discrepancies, интерпретация URL, утечка данных
- **Лаборатория** — интерактивная демонстрация атаки WCD: ввод URL, пошаговая визуализация обработки Cache и Backend, отображение расхождений и утечки данных
- **Ассистент** — чат-бот «Кэш-страж», эксперт по WCD, HTTP, CDN, Burp Suite и PortSwigger Academy
- **О проекте** — описание, технологический стек, ссылки на ресурсы PortSwigger

### Лаборатория

Ключевой раздел платформы — интерактивная демонстрация механизма атаки:

1. Пользователь вводит URL (например, `/account/home%0f.css`)
2. Визуально показывается, как Cache интерпретирует запрос как статический ресурс
3. Показывается, как Backend интерпретирует тот же запрос как защищённую страницу
4. Демонстрируется процесс кэширования ответа с конфиденциальными данными
5. Показывается итоговая утечка данных

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
