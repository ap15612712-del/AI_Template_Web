<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <NuxtLink class="navbar-brand fw-bold" to="/">Web Template</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/products">Products</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container py-4">
      <slot />
    </main>

    <footer class="bg-light border-top mt-5 py-3">
      <div class="container text-center text-muted small">
        Web Template &copy; {{ new Date().getFullYear() }} — Nuxt 3 + TypeScript + Bootstrap + Prisma
      </div>
    </footer>
  </div>
</template>
