---
layout: page
title: "Cache Deception Lab — Интерактивная лаборатория"
description: "Интерактивная лаборатория для изучения Web Cache Deception: 9 модулей, ИИ-наставники, песочницы, геймификация"
img: assets/img/projects/cache-deception-lab.png
icon: favicons/cache-deception-lab.png
importance: 1
category: веб-безопасность
demo: https://cache-deception-lab.vercel.app/
related_publications: false
---

Интерактивная лаборатория для углублённого изучения уязвимости Web Cache Deception (WCD) по материалам PortSwigger Web Security Academy. 9 специализированных модулей с ИИ-наставниками, интерактивными песочницами и системой геймификации — всё на русском языке.

### Что представляет собой платформа

Платформа превращает все лаборатории PortSwigger по Web Cache Deception в интерактивный обучающий опыт. Каждая тема — отдельная страница с теорией, практическими примерами и персональным ИИ-наставником, который отвечает на вопросы по нажатию на иконку чата. Встроенная система геймификации мотивирует прохождение: XP, уровни, ачивки, серии дней и ежедневные задания.

### Модули курса

1. **Web Caches** — что такое веб-кэш, типы кэшей (браузерный, CDN, reverse proxy), Cache HIT/MISS/STALE, Cache-Control заголовки, Vary
2. **Cache Keys** — из чего состоит Cache Key, ключевые компоненты запроса, Vary-заголовок, cache key variance
3. **Cache Rules** — как кэш принимает решение о кэшировании, Static Extension Rules, Static Directory Rules, приоритет правил
4. **WCD Attacks** — что такое Web Cache Deception, отличие от Cache Poisoning, базовый сценарий атаки, классификация техник
5. **Delimiter Discrepancies** — разделители в URL, точка с запятой, Delimiter Decoding, обход разделителей
6. **Path Mapping Discrepancies** — маппинг URL на файловую систему, несоответствия между кэшем и сервером
7. **Normalization Discrepancies** — нормализация путей, URL encoding, обработка ../ и //, декодирование vs. кодирование
8. **File Name Rules** — определение статического файла по расширению, двойные расширения, null byte, обход правил
9. **Cache Defenses** — защита от WCD, правильная настройка Cache-Control, Vary как защита, мониторинг и тестирование

### ИИ-наставники

Каждый модуль оснащён специализированным чат-ботом с уникальной личностью и экспертными знаниями. ИИ-наставник не открывается автоматически — пользователь нажимает иконку чата, когда хочет задать вопрос:

- **Кэш-страж** — специалист по веб-кэшированию
- **Ключ-мастер** — эксперт по Cache Keys
- **Правило-хранитель** — специалист по Cache Rules
- **Атак-аналитик** — специалист по WCD-атакам
- **Разделитель-детектив** — эксперт по Delimiter Discrepancies
- **Путь-разведчик** — эксперт по Path Mapping
- **Норма-инженер** — специалист по Normalization
- **Файл-инспектор** — эксперт по File Name Rules
- **Щит-защитник** — специалист по Cache Defenses

Все наставники отвечают на русском языке, дают примеры HTTP-запросов и заголовков, пошагово объясняют сложные концепции и предлагают типовые вопросы для быстрого старта.

### Песочницы

Каждый модуль включает интерактивную песочницу для практики:

- **URL Analyzer** — анализ URL на предмет WCD-уязвимостей
- **Cache Key Builder** — конструктор Cache Keys
- **Cache Rule Tester** — тестирование правил кэширования
- **WCD Attack Simulator** — симулятор атаки Web Cache Deception
- **Delimiter Explorer** — исследование разделителей
- **Path Mapping Lab** — лаборатория маппинга путей
- **Normalization Tester** — тестирование нормализации
- **Extension Bypass Lab** — лаборатория обхода расширений
- **Defense Configurator** — конфигуратор защиты

### Геймификация

- **XP и уровни** — за каждый пройденный раздел начисляется опыт
- **Ачивки** — уникальные достижения за milestones (первый вопрос ИИ, все разделы категории, серия дней)
- **Серии дней** — отслеживание регулярности обучения
- **Ежедневные задания** — новые квесты каждый день

### Проверка доступности моделей

Встроенная панель тестирования доступности ИИ-моделей через OpenRouter API: проверка rate limits, задержки и статуса каждой модели в реальном времени. Пользователь может добавить свой OpenRouter API-ключ для использования свободных моделей.

### Стек технологий

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui
- **State**: Zustand (4 stores: model, chat, navigation, progress)
- **AI**: OpenRouter API — потоковый вывод ответов, выбор моделей, проверка доступности
- **Визуализация**: React Flow, Mermaid, D3.js, Recharts
- **Деплой**: Vercel (Европа)
- **Адаптивный дизайн**: полная поддержка мобильных устройств, планшетов и десктопов

### Попробовать

👉 [Открыть Cache Deception Lab]({{ page.demo }}){: .project-link}

---

**AZAR**

<style>
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: transparent;
  color: #f472b6 !important;
  border: 1.5px solid #ec4899;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
}
.project-link:hover {
  background: #ec4899;
  color: #fff !important;
  border-color: #ec4899;
}
</style>
