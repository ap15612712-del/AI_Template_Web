<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const isActive = (path: string) => path === '/' ? route.path === '/' : route.path.startsWith(path);
</script>

<template>
  <div style="display:flex;">
    <aside class="sidebar">
      <div class="sb-brand">
        <NuxtLink to="/" class="sb-logo">
          <span class="sb-dot"></span>
          HR System
        </NuxtLink>
        <div class="sb-sub">v1.0 · nuxt 3</div>
      </div>

      <nav class="sb-nav">
        <div class="sb-section">Main</div>
        <NuxtLink to="/" class="sb-link" :class="{ active: route.path === '/' }">
          <svg class="sb-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
          </svg>
          Overview
        </NuxtLink>
        <NuxtLink to="/dashboard" class="sb-link" :class="{ active: isActive('/dashboard') }">
          <svg class="sb-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
          </svg>
          Dashboard
        </NuxtLink>

        <div class="sb-section">Employees</div>
        <NuxtLink to="/employees" class="sb-link" :class="{ active: route.path === '/employees' }">
          <svg class="sb-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
          </svg>
          All Employees
        </NuxtLink>
        <NuxtLink to="/employees/add" class="sb-link" :class="{ active: isActive('/employees/add') }">
          <svg class="sb-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/>
          </svg>
          Add Employee
        </NuxtLink>

        <div class="sb-section">Organization</div>
        <NuxtLink to="/departments" class="sb-link" :class="{ active: route.path === '/departments' }">
          <svg class="sb-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
          </svg>
          Departments
        </NuxtLink>
        <NuxtLink to="/departments/add" class="sb-link" :class="{ active: isActive('/departments/add') }">
          <svg class="sb-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/>
          </svg>
          Add Department
        </NuxtLink>

        <div class="sb-section">API</div>
        <a href="/api/employees" target="_blank" class="sb-link">
          <svg class="sb-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="2,10 5,6 8,9 11,4 14,7"/>
          </svg>
          /api/employees
        </a>
        <a href="/api/departments" target="_blank" class="sb-link">
          <svg class="sb-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="2,10 5,6 8,9 11,4 14,7"/>
          </svg>
          /api/departments
        </a>
      </nav>

      <div class="sb-footer">
        <span class="status-dot"></span>
        SQLite · local
      </div>
    </aside>

    <div class="app-wrap">
      <slot />
    </div>
  </div>
</template>
