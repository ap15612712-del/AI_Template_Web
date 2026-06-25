<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const isActive = (path: string) => {
  if (path === '/') return route.path === '/';
  return route.path.startsWith(path);
};
</script>

<template>
  <div style="display:flex;">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sb-brand">
        <NuxtLink to="/" class="sb-logo">
          <span class="sb-dot"></span>
          WebTemplate
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

        <div class="sb-section">Products</div>

        <NuxtLink to="/products" class="sb-link" :class="{ active: route.path === '/products' }">
          <svg class="sb-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 3H1v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
          </svg>
          All Products
        </NuxtLink>

        <NuxtLink to="/products/add" class="sb-link" :class="{ active: isActive('/products/add') }">
          <svg class="sb-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <line x1="8" y1="2" x2="8" y2="14"/>
            <line x1="2" y1="8" x2="14" y2="8"/>
          </svg>
          Add Product
        </NuxtLink>

        <div class="sb-section">API</div>

        <a href="/api/products" target="_blank" class="sb-link">
          <svg class="sb-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="2,10 5,6 8,9 11,4 14,7"/>
          </svg>
          /api/products
        </a>
      </nav>

      <div class="sb-footer">
        <span class="status-dot"></span>
        SQLite · local
      </div>
    </aside>

    <!-- Content area -->
    <div class="app-wrap">
      <slot />
    </div>
  </div>
</template>
