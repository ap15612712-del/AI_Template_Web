<script setup lang="ts">
const { data: stats, pending } = await useFetch('/api/stats');

const bars = [45, 62, 38, 80, 55, 70, 90, 48, 65, 73, 58, 85];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const maxBar = Math.max(...bars);
</script>

<template>
  <div>
    <div class="app-header">
      <span class="page-crumb">Home</span>
      <span class="crumb-sep">/</span>
      <span class="page-title-h">Dashboard</span>
    </div>

    <div class="app-main page-enter">
      <!-- Stat cards -->
      <div class="stat-grid">
        <div class="stat-card c-amber">
          <div class="stat-ico">📦</div>
          <div class="stat-label">Total Products</div>
          <div class="stat-val">{{ stats?.total ?? '—' }}</div>
          <div class="stat-sub">items in catalog</div>
        </div>
        <div class="stat-card c-green">
          <div class="stat-ico">✅</div>
          <div class="stat-label">In Stock</div>
          <div class="stat-val">{{ stats?.inStock ?? '—' }}</div>
          <div class="stat-sub">{{ stats?.totalStock ?? 0 }} units total</div>
        </div>
        <div class="stat-card c-red">
          <div class="stat-ico">⚠️</div>
          <div class="stat-label">Out of Stock</div>
          <div class="stat-val">{{ stats?.outOfStock ?? '—' }}</div>
          <div class="stat-sub">need restocking</div>
        </div>
        <div class="stat-card c-blue">
          <div class="stat-ico">💰</div>
          <div class="stat-label">Avg. Price</div>
          <div class="stat-val">
            {{ stats?.avgPrice ? stats.avgPrice.toLocaleString('th-TH', { maximumFractionDigits: 0 }) : '—' }}
          </div>
          <div class="stat-sub">baht per item</div>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
        <!-- Activity chart -->
        <div class="card">
          <div class="card-head">
            <span class="card-title">Monthly Activity</span>
            <span class="badge badge-muted">2026</span>
          </div>
          <div class="card-body">
            <div class="chart-wrap">
              <div
                v-for="(val, i) in bars" :key="i"
                class="bar"
                :class="{ hi: i === 11 }"
                :style="{ height: (val / maxBar * 100) + '%' }"
                :title="months[i] + ': ' + val"
              ></div>
            </div>
            <div class="chart-labels">
              <span v-for="(m, i) in months" :key="i" class="chart-label">{{ m }}</span>
            </div>
          </div>
        </div>

        <!-- Recent products -->
        <div class="card">
          <div class="card-head">
            <span class="card-title">Recent Products</span>
            <NuxtLink to="/products" style="font-size:11px; color:var(--accent); text-decoration:none;">View all →</NuxtLink>
          </div>
          <div v-if="pending" class="card-body" style="text-align:center; color:var(--text-3); padding:32px;">
            Loading...
          </div>
          <div v-else-if="!stats?.recent?.length" class="empty-state">
            <div class="empty-state-icon">📭</div>
            <div class="empty-state-title">No products yet</div>
          </div>
          <table v-else class="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in stats.recent" :key="p.id">
                <td class="td-bold">{{ p.name }}</td>
                <td class="td-num">{{ p.price.toLocaleString('th-TH', { minimumFractionDigits: 2 }) }}</td>
                <td>
                  <span :class="p.stock > 0 ? 'badge badge-green' : 'badge badge-red'">
                    {{ p.stock }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
