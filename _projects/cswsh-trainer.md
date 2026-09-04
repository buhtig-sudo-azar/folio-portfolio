---
layout: page
title: "CSWH Trainer — Межсайтовый перехват веб-сокета"
description: "Интерактивный тренажёр по CSWH: теория, демо, Python-песочница, тесты."
img: assets/img/projects/cswsh-trainer.png
icon: favicons/cswsh-trainer.png
importance: 2
category: веб-безопасность
demo: https://cswsh-trainer.vercel.app/
related_publications: false
---

Полностью автономная HTML-страница, объясняющая уязвимость Cross-Site WebSocket Hijacking и позволяющая поэкспериментировать с ней прямо в браузере. Весь CSS и JavaScript встроены в один файл — внешних зависимостей нет, кроме Pyodide (CPython в WebAssembly), который подтягивается с CDN для Python-песочницы. Материал основан на техническом разборе от CQR Company и охватывает все аспекты: от первичной теории до методологии пентеста.

### На чём основан материал

Источник — [CQR Company](https://cqr.company/ru/web-vulnerabilities/cross-site-websocket-hijacking-cswh/): описание уязвимости, примеры уязвимого кода на трёх языках (JavaScript/Node.js, Python/Tornado, Java/Spring Boot), четыре сценария эксплуатации (кража cookie, изменение данных, DoS, CSRF), четыре метода повышения привилегий (перехват сеанса, обход аутентификации, использование уязвимого кода, комбинирование с другими атаками), методология тестирования из шести этапов и контрольный список из двенадцати пунктов. Дополнительно — пять редких гайдов из сети, включая оригинальное исследование Christian Schneider (2013) и свежий разбор Include Security (2025).

### Что внутри

- **Теория** — пара карточек с кодом и построчными комментариями: сервер без проверки Origin (пример CQR на Node.js) и с whitelist
- **Примеры на трёх языках** — JavaScript/Node.js, Python/Tornado, Java/Spring Boot (уязвимый и безопасный вариант каждого)
- **Сценарии эксплуатации** — четыре карточки: кража cookie, изменение данных, DoS, CSRF через WebSocket
- **Повышение привилегий** — четыре техники: перехват сеанса, обход auth, эксплуатация уязвимого кода, комбинирование с XSS/SSRF
- **Методология тестирования** — шесть этапов от определения конечных точек до повторного тестирования
- **Контрольный список** — двенадцать пунктов защиты
- **Интерактивное демо** — форма с полями Origin и WebSocket URL, пять кнопок: «Без проверки», «С whitelist», «Разобрать», «Тестовые данные», «Сброс»
- **Python-песочница** — пара карточек с редактируемым кодом: уязвимый Tornado-обработчик и безопасный с whitelist
- **Тесты** — три подтемы по три вопроса: механика CSWH, защита и методология, кванторы
- **HTML-конспект** — генерируется при 100%-ном прохождении
- **Тёмная/светлая тема** с инверсией всех блоков

### Стек

- **Фронтенд**: автономный HTML + встроенный CSS + JavaScript
- **Стили**: CSS-переменные с инверсией через `.dark`
- **Python-песочница**: Pyodide (CPython в WebAssembly, CDN)
- **Прогресс**: `localStorage`
- **Деплой**: Vercel

### Попробовать

👉 [Открыть CSWH Trainer]({{ page.demo }}){: .project-link}

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
