---
layout: page
title: проекты
permalink: /projects/
description: Мои проекты по веб-безопасности, ИИ/МЛ и разработке.
nav: true
nav_order: 3
display_categories: [веб-безопасность, ии-мл, инфраструктура, разное]
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
  <p style="margin: 0 0 0.75rem 0; color: var(--global-text-color-light); font-size: 0.95rem;">
    Блоги и ресурсы, которые стоит изучить — реальные writeup'ы уязвимостей, разборы атак и практические кейсы из bug bounty.
  </p>
  <a href="https://siunam321.github.io/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 20px; background: transparent; color: #818cf8 !important; border: 1.5px solid #6366f1; border-radius: 8px; text-decoration: none !important; font-weight: 500; font-size: 0.875rem; transition: all 0.2s ease;" onmouseover="this.style.background='#6366f1';this.style.color='#fff!important'" onmouseout="this.style.background='transparent';this.style.color='#818cf8!important'">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    siunam321.github.io
  </a>
  <a href="https://www.sebsrt.xyz/blog/waybird-machine/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 20px; background: transparent; color: #818cf8 !important; border: 1.5px solid #6366f1; border-radius: 8px; text-decoration: none !important; font-weight: 500; font-size: 0.875rem; margin-top: 0.5rem; transition: all 0.2s ease;" onmouseover="this.style.background='#6366f1';this.style.color='#fff!important'" onmouseout="this.style.background='transparent';this.style.color='#818cf8!important'">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    sebsrt.xyz — Waybird Machine
  </a>
</div>
