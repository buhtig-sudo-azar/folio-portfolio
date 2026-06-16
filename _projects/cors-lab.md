---
layout: page
title: "CORS Origin Reflection Lab — Интерактивная лаборатория"
description: "Практический стенд для изучения уязвимости рефлексии Origin в CORS: переключение режимов, визуализация заголовков, имитация атаки, квизы и разбор CVE"
img: assets/img/projects/cors-lab.png
icon: favicons/cors-lab.png
importance: 1
category: веб-безопасность
demo: https://cors-lab.vercel.app/
related_publications: false
---

Интерактивная лаборатория для глубокого погружения в одну из самых распространённых веб-уязвимостей — **CORS Origin Reflection**. Сервер доверяет любому источнику запроса, копируя заголовок `Origin` в `Access-Control-Allow-Origin`, и разрешает учётные данные. Результат — хакер читает приватные данные пользователя с любого домена.

### О чём этот проект

Когда API настраивают CORS по принципу «отразить Origin обратно», любой сайт в интернете получает доступ к защищённым эндпоинтам с cookies жертвы. Это не теоретическая угроза — подобные ошибки находят в продакшене крупнейших сервисов. Лаборатория позволяет своими руками увидеть, как возникает дыра, как она эксплуатируется и как правильно её закрыть.

### Что внутри

- **Переключатель режимов** — тумблер между «Уязвимым» и «Безопасным» режимом сервера
- **API-панель** — кнопки для запросов к `/api/profile` и `/api/account`
- **Визуализация заголовков** — наглядная таблица: что отправляет браузер и что возвращает сервер
- **Страница злоумышленника** — имитация атаки с пошаговым логом
- **Обучающий аккордеон** — шесть разделов по теме CORS
- **Сравнительная таблица** — уязвимый vs. безопасный режим
- **Квиз** — проверка знаний с мгновенной обратной связью
- **Примеры кода** — фрагменты JavaScript с комментариями
- **Ссылки на источники** — MDN, OWASP, PortSwigger

### Как работает уязвимость

1. Браузер отправляет запрос с заголовком `Origin: https://evil-phishing.com`
2. Сервер копирует это значение: `Access-Control-Allow-Origin: https://evil-phishing.com`
3. Сервер добавляет: `Access-Control-Allow-Credentials: true`
4. Браузер разрешает JavaScript на злоумышленническом сайте прочитать ответ
5. Хакер получает email, баланс, номер счёта

В безопасном режиме сервер сверяет `Origin` с белым списком разрешённых доменов.

### Стек технологий

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui
- **API Routes**: серверные эндпоинты с динамической обработкой CORS
- **Деплой**: Vercel (serverless-функции для API)

### Попробовать

👉 [Открыть CORS Lab]({{ page.demo }}){: .project-link}

---

**AZAR**

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
