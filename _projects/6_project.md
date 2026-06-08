---
layout: page
title: "DARK — Сетевая инфраструктура"
description: "Образовательная платформа для изучения сетевой инфраструктуры Dark Web: Tor, SOCKS5, I2P, Onion-сервисы"
img: assets/img/projects/dark-infrastructure.png
icon: favicons/dark-infra.png
importance: 1
category: инфраструктура
demo: https://dark-git-main-azars-projects-e8b4719a.vercel.app/
related_publications: false
---

Интерактивная образовательная платформа для изучения сетевой инфраструктуры анонимных сетей. Все материалы на русском языке: теория, конфигураторы, визуализации и ИИ-ассистент.

### Что внутри

Платформа состоит из 7 разделов, каждый из которых покрывает отдельный аспект сетевой инфраструктуры анонимных сетей:

- **Главная** — обзор платформы, быстрый доступ ко всем разделам, интерактивная сетевая карта
- **Tor** — луковичная маршрутизация, типы нод (Guard/Middle/Exit/Bridge), конфигуратор torrc, визуализация 3 хопов, чеклист безопасности Exit Node
- **SOCKS5** — протокол SOCKS5, сервер Dante, Tor как прокси, сравнение SOCKS5/HTTP/VPN, настройка браузера, предотвращение утечек DNS
- **I2P** — Garlic Routing, туннели i2pd, каталог eepsites, пошаговая визуализация Garlic Routing, сравнение I2P/Tor/Freenet
- **Onion-сервисы** — .onion v3, 6 шагов подключения (Intro Point, Rendezvous), Client Authorization, Nginx-конфигуратор, каталог легальных Onion-сервисов
- **ИИ-ассистент** — чат-бот с потоковым выводом, эксперт по Dark/Deep Web инфраструктуре, предлагает типовые вопросы
- **Сетевая карта** — интерактивная SVG-визуализация с кликабельными узлами, анимированные связи, описание каждого узла

### Конфигураторы

Для каждого протокола реализован интерактивный генератор конфигурационных файлов с предпросмотром и копированием:

- **torrc** — настройка Tor Relay (тип ноды, порты, bandwidth, exit policy, IPv6, аппаратное ускорение)
- **sockd.conf** — настройка Dante SOCKS5 (адреса, аутентификация, UDP, логирование)
- **i2pd.conf** — настройка I2P-маршрутизатора (порты, share ratio, туннели)
- **nginx.conf** — настройка Nginx для Onion Service (security headers, upstream)

### Визуализации

- **Маршрутизация Tor** — анимация прохождения пакета через 3 хопа с пошаговым снятием слоёв шифрования
- **Garlic Routing I2P** — 6-шаговая интерактивная демонстрация объединения сообщений в garlic-пакет
- **Подключение к Onion Service** — 6 шагов от получения .onion-адреса до установки защищённого канала через Rendezvous Point
- **Сетевая карта** — полная топология: клиент, Guard/Middle/Exit, SOCKS5, I2P Inbound/Outbound, Intro Point, Rendezvous, Clearnet, Eepsite, Onion Service

### Стек

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui
- **AI**: OpenRouter (Google Gemma 4 31B) — потоковый вывод ответов
- **Деплой**: Vercel, GitHub

### Попробовать

👉 [Открыть платформу DARK]({{ page.demo }}){: .demo-button}

---

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
