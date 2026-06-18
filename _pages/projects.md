---
layout: page
title: проекты
permalink: /projects/
description: Мои проекты по веб-безопасности, ИИ/МЛ и разработке.
nav: true
nav_order: 3
display_categories: [веб-безопасность, системное-администрирование, ии-мл, инфраструктура, разное]
horizontal: false
---



<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>

  {% assign categorized_projects = site.projects | where: "category", category %}



  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}




</div>

<div class="interesting-source" style="margin-top: 2.5rem; padding: 1.5rem; border: 1.5px solid #6366f1; border-radius: 12px; background: transparent;">
  <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    Интересный источник
  </h2>
  <p style="margin: 0 0 1rem 0; color: var(--global-text-color-light); font-size: 0.95rem;">
    Полезные блоги и ресурсы, сгруппированные по тематикам — чтобы сразу понятно, куда идти и чего ожидать.
  </p>

  <!-- Веб-безопасность -->
  <div style="margin-bottom: 1.25rem;">
    <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.5rem 0; display: flex; align-items: center; gap: 0.4rem; color: var(--global-text-color);">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      Веб-безопасность
    </h3>
    <p style="margin: 0 0 0.5rem 0; color: var(--global-text-color-light); font-size: 0.85rem;">
      Writeup'ы уязвимостей, разборы атак и практические кейсы из bug bounty.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <a href="https://siunam321.github.io/" target="_blank" rel="noopener noreferrer" class="source-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        siunam321.github.io
      </a>
      <a href="https://www.sebsrt.xyz/blog/waybird-machine/" target="_blank" rel="noopener noreferrer" class="source-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        sebsrt.xyz — Waybird Machine
      </a>
    </div>
  </div>

  <!-- Системное администрирование -->
  <div style="margin-bottom: 1.25rem;">
    <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.5rem 0; display: flex; align-items: center; gap: 0.4rem; color: var(--global-text-color);">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      Системное администрирование
    </h3>
    <p style="margin: 0 0 0.5rem 0; color: var(--global-text-color-light); font-size: 0.85rem;">
      Администрирование Linux-серверов, управление сервисами, мониторинг, автоматизация и DevOps-практики.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <a href="https://ai-sysadmin-academy-v2.vercel.app/" target="_blank" rel="noopener noreferrer" class="source-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        ИИ Сисадмин Академия
      </a>
    </div>
  </div>

  <!-- ИИ / МЛ -->
  <div style="margin-bottom: 1.25rem;">
    <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.5rem 0; display: flex; align-items: center; gap: 0.4rem; color: var(--global-text-color);">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      ИИ / МЛ
    </h3>
    <p style="margin: 0 0 0.5rem 0; color: var(--global-text-color-light); font-size: 0.85rem;">
      Статьи по машинному обучению, нейросетям и практическим применениям ИИ.
    </p>
    <p style="margin: 0; color: var(--global-text-color-light); font-size: 0.8rem; font-style: italic;">
      Скоро появятся…
    </p>
  </div>

  <!-- Инфраструктура -->
  <div style="margin-bottom: 1.25rem;">
    <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.5rem 0; display: flex; align-items: center; gap: 0.4rem; color: var(--global-text-color);">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
      Инфраструктура
    </h3>
    <p style="margin: 0 0 0.5rem 0; color: var(--global-text-color-light); font-size: 0.85rem;">
      DevOps, CI/CD, контейнеризация, облачные архитектуры и SRE-практики.
    </p>
    <p style="margin: 0; color: var(--global-text-color-light); font-size: 0.8rem; font-style: italic;">
      Скоро появятся…
    </p>
  </div>

  <!-- Разное -->
  <div>
    <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.5rem 0; display: flex; align-items: center; gap: 0.4rem; color: var(--global-text-color);">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      Разное
    </h3>
    <p style="margin: 0 0 0.5rem 0; color: var(--global-text-color-light); font-size: 0.85rem;">
      Что-то полезное, что не вписывается в одну категорию — инструменты, подборки, обзоры.
    </p>
    <p style="margin: 0; color: var(--global-text-color-light); font-size: 0.8rem; font-style: italic;">
      Скоро появятся…
    </p>
  </div>
</div>

<style>
.source-link {
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
  transition: all 0.2s ease;
}
.source-link:hover {
  background: #6366f1;
  color: #fff !important;
  border-color: #6366f1;
}
</style>
