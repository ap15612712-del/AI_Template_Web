<script setup lang="ts">
const router = useRouter();

const form = ref({
  name: '',
  description: '',
  price: '',
  stock: '0',
});

const saving = ref(false);
const error = ref('');

const handleSubmit = async () => {
  if (!form.value.name || !form.value.price) {
    error.value = 'กรุณากรอกชื่อสินค้าและราคา';
    return;
  }
  saving.value = true;
  error.value = '';

  const { error: fetchError } = await useFetch('/api/products', {
    method: 'POST',
    body: {
      name: form.value.name,
      description: form.value.description || null,
      price: Number(form.value.price),
      stock: Number(form.value.stock),
    },
  });

  saving.value = false;

  if (!fetchError.value) {
    await router.push('/products');
  } else {
    error.value = 'เกิดข้อผิดพลาด กรุณาลองใหม่';
  }
};
</script>

<template>
  <div>
    <div class="app-header">
      <NuxtLink to="/products" class="page-crumb">Products</NuxtLink>
      <span class="crumb-sep">/</span>
      <span class="page-title-h">Add Product</span>
    </div>

    <div class="app-main page-enter" style="max-width:680px;">
      <div v-if="error" class="alert alert-error">{{ error }}</div>

      <form @submit.prevent="handleSubmit">
        <!-- Basic info -->
        <div class="form-sec">
          <div class="form-sec-head">
            <div class="form-sec-title">Basic Information</div>
          </div>
          <div class="form-sec-body">
            <div class="form-group">
              <label class="form-label">Product Name <span class="req">*</span></label>
              <input
                v-model="form.name"
                class="form-input"
                placeholder="e.g. MacBook Pro M4"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label">Description</label>
              <textarea
                v-model="form.description"
                class="form-input"
                placeholder="Brief description of the product (optional)"
              ></textarea>
              <div class="form-hint">Optional — shown in the products list</div>
            </div>
          </div>
        </div>

        <!-- Pricing & inventory -->
        <div class="form-sec">
          <div class="form-sec-head">
            <div class="form-sec-title">Pricing & Inventory</div>
          </div>
          <div class="form-sec-body">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Price (THB) <span class="req">*</span></label>
                <input
                  v-model="form.price"
                  class="form-input"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label">Stock Quantity</label>
                <input
                  v-model="form.stock"
                  class="form-input"
                  type="number"
                  min="0"
                  placeholder="0"
                />
                <div class="form-hint">Current units available</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div style="display:flex; gap:10px; align-items:center;">
          <button type="submit" class="btn btn-accent" :disabled="saving">
            <svg v-if="!saving" width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <polyline points="2,8 6,12 14,4"/>
            </svg>
            {{ saving ? 'Saving...' : 'Save Product' }}
          </button>
          <NuxtLink to="/products" class="btn btn-ghost">Cancel</NuxtLink>
          <span style="font-size:11px; color:var(--text-3); margin-left:auto;">
            Fields marked <span style="color:var(--red);">*</span> are required
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
