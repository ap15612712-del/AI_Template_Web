<script setup lang="ts">
import { useRoute } from 'vue-router';

interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  createdAt: string;
}

const { data: products, refresh } = await useFetch<Product[]>('/api/products');

const alertMsg = ref('');
const alertType = ref<'success' | 'error'>('success');

const showAlert = (msg: string, type: 'success' | 'error') => {
  alertMsg.value = msg;
  alertType.value = type;
  setTimeout(() => { alertMsg.value = ''; }, 3000);
};

const handleDelete = async (id: number) => {
  if (!confirm('ต้องการลบรายการนี้?')) return;
  const { error } = await useFetch(`/api/products/${id}`, { method: 'DELETE' });
  if (!error.value) {
    showAlert('ลบข้อมูลสำเร็จ', 'success');
    await refresh();
  } else {
    showAlert('ลบไม่สำเร็จ', 'error');
  }
};
</script>

<template>
  <div>
    <div class="app-header">
      <span class="page-crumb">Home</span>
      <span class="crumb-sep">/</span>
      <span class="page-title-h">Products</span>
      <div class="header-actions">
        <NuxtLink to="/products/add" class="btn btn-accent">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/>
          </svg>
          Add Product
        </NuxtLink>
      </div>
    </div>

    <div class="app-main page-enter">
      <div v-if="alertMsg" :class="`alert alert-${alertType}`">
        {{ alertMsg }}
      </div>

      <div class="card">
        <div class="card-head">
          <span class="card-title">All Products</span>
          <span class="badge badge-muted">{{ products?.length ?? 0 }} items</span>
        </div>

        <div v-if="!products?.length" class="empty-state">
          <div class="empty-state-icon">📦</div>
          <div class="empty-state-title">No products yet</div>
          <p style="font-size:12px; margin-top:8px;">
            <NuxtLink to="/products/add" style="color:var(--accent); text-decoration:none;">Add your first product →</NuxtLink>
          </p>
        </div>

        <div v-else style="overflow-x:auto;">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width:48px;">#</th>
                <th>Name</th>
                <th>Description</th>
                <th style="text-align:right;">Price</th>
                <th style="text-align:center;">Stock</th>
                <th style="text-align:center; width:120px;">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in products" :key="p.id">
                <td style="color:var(--text-3);">{{ p.id }}</td>
                <td class="td-bold">{{ p.name }}</td>
                <td style="max-width:220px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                  {{ p.description ?? '—' }}
                </td>
                <td class="td-num" style="text-align:right;">
                  {{ p.price.toLocaleString('th-TH', { minimumFractionDigits: 2 }) }}
                </td>
                <td style="text-align:center;">
                  <span :class="p.stock > 0 ? 'badge badge-green' : 'badge badge-red'">{{ p.stock }}</span>
                </td>
                <td style="text-align:center;">
                  <div style="display:flex; gap:6px; justify-content:center;">
                    <NuxtLink :to="`/products/edit/${p.id}`" class="btn btn-edit">Edit</NuxtLink>
                    <button class="btn btn-danger" @click="handleDelete(p.id)">Del</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
