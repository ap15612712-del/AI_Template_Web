<template>
  <div>
    <div class="py-5 text-center">
      <h1 class="display-5 fw-bold text-primary">Web Template</h1>
      <p class="lead text-muted">
        Nuxt 3 + TypeScript + Bootstrap 5 + Prisma + PostgreSQL
      </p>
    </div>

    <div class="row g-4 mb-5">
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body text-center p-4">
            <div class="fs-1 mb-3">&#9889;</div>
            <h5 class="card-title">Nuxt 3</h5>
            <p class="card-text text-muted">
              Vue 3 + SSR/SSG + Auto-imports + File-based routing
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body text-center p-4">
            <div class="fs-1 mb-3">&#128451;</div>
            <h5 class="card-title">Prisma + PostgreSQL</h5>
            <p class="card-text text-muted">
              ORM Type-safe เชื่อมต่อฐานข้อมูล migration ง่าย
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body text-center p-4">
            <div class="fs-1 mb-3">&#127912;</div>
            <h5 class="card-title">Bootstrap 5</h5>
            <p class="card-text text-muted">
              UI Components ครบครัน Responsive ทุกขนาดหน้าจอ
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card border-0 bg-light">
      <div class="card-body p-4">
        <h5 class="card-title mb-3">API Endpoints ที่พร้อมใช้งาน</h5>
        <div class="table-responsive">
          <table class="table table-bordered table-hover mb-0">
            <thead class="table-primary">
              <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="badge bg-success">GET</span></td>
                <td class="font-monospace">/api/products</td>
                <td>ดึงข้อมูล products ทั้งหมด</td>
              </tr>
              <tr>
                <td><span class="badge bg-primary">POST</span></td>
                <td class="font-monospace">/api/products</td>
                <td>เพิ่ม product ใหม่</td>
              </tr>
              <tr>
                <td><span class="badge bg-success">GET</span></td>
                <td class="font-monospace">/api/products/:id</td>
                <td>ดึงข้อมูล product ตาม id</td>
              </tr>
              <tr>
                <td><span class="badge bg-warning text-dark">PUT</span></td>
                <td class="font-monospace">/api/products/:id</td>
                <td>แก้ไขข้อมูล product</td>
              </tr>
              <tr>
                <td><span class="badge bg-danger">DELETE</span></td>
                <td class="font-monospace">/api/products/:id</td>
                <td>ลบ product</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-3">
          <NuxtLink to="/products" class="btn btn-primary">
            ดูหน้าตัวอย่าง Products
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
