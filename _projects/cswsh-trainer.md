---
layout: page
title: "CSWH Trainer — Межсайтовый перехват веб-сокета"
description: "Интерактивный тренажёр по Cross-Site WebSocket Hijacking на основе материала CQR Company: теория, демо, Python-песочница (Pyodide), тесты с прогрессом и серверная генерация HTML-конспектов"
img: assets/img/projects/cswsh-trainer.png
icon: favicons/cswsh-trainer.png
importance: 2
category: безопасность
demo: https://cswsh-trainer.vercel.app/
related_publications: false
---

Автономный интерактивный тренажёр по уязвимости Cross-Site WebSocket Hijacking (CSWH), созданный на основе технического материала CQR Company. Страница представляет собой полностью автономный HTML-файл со встроенными CSS и JavaScript — никаких внешних зависимостей кроме Pyodide (Python в браузере) с CDN. Подходит для изучения как начинающими пентестерами, так и разработчиками, желающими понять, почему WebSocket уязвим к межсайтовому перехвату и как правильно настроить проверку Origin на сервере.

### На чём основан материал

Источник — [CQR Company](https://cqr.company/ru/web-vulnerabilities/cross-site-websocket-hijacking-cswh/): описание уязвимости, примеры уязвимого кода на трёх языках (JavaScript/Node.js, Python/Tornado, Java/Spring Boot), методология тестирования из шести этапов, контрольный список из восьми пунктов, сценарии эксплуатации (кража cookie, изменение данных, DoS, CSRF через WebSocket). Дополнительно — пять редких супергайдов из сети, включая оригинальное исследование Christian Schneider (2013) и свежий разбор Include Security (2025).

### Архитектура тренажёра

Одна HTML-страница со встроенными стилями и скриптами. Sticky-хедер со светофором и прогресс-баром, тёмная/светлая тема через CSS-переменные, адаптивная вёрстка от 320px до 1920px. Python-песочница работает через Pyodide — CPython, скомпилированный в WebAssembly, загружается с CDN при первом нажатии «Запустить». Прогресс сохраняется в localStorage.

### Ключевые возможности

- **Теория** — две карточки с кодом и построчными комментариями: WebSocket-сервер без проверки Origin (пример CQR на Node.js) vs сервер с Origin whitelist
- **Сравнительная таблица** — шесть аспектов: проверка Origin, cookie, SOP, перехват данных, CSRF, DoS
- **Интерактивное демо** — форма с полями Origin и WebSocket URL, пять кнопок: «Без проверки Origin», «С Origin whitelist», «Разобрать», «Тестовые данные», «Сброс»
- **Python-песочница** — пара карточек с редактируемым кодом: уязвимый Tornado-обработчик (из CQR) и безопасный с whitelist
- **Тесты** — три подтемы по три вопроса: механика CSWH, защита и методология, кванторы
- **HTML-конспект** — генерируется при 100%-ном прохождении, включает резюме, формулу кванторов, источники и супергайды
- **Тёмная/светлая тема** с инверсией всех блоков кода и вывода

### Стек технологий

- **Фронтенд**: автономный HTML + встроенный CSS + встроенный JavaScript
- **Стили**: CSS-переменные с инверсией через `.dark` селектор
- **Python-песочница**: Pyodide (CPython в WebAssembly, CDN)
- **Хранилище прогресса**: `localStorage`
- **Деплой**: Vercel (статический хостинг)

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
