<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  createdAt: string;
}

interface FormData {
  name: string;
  description: string;
  price: string;
  stock: string;
}

const emptyForm = (): FormData => ({ name: "", description: "", price: "", stock: "0" });

const { data: products, refresh } = await useFetch<Product[]>("/api/products");

const form = ref<FormData>(emptyForm());
const editId = ref<number | null>(null);
const saving = ref(false);
const alertMsg = ref("");
const alertType = ref<"success" | "danger">("success");

const showAlert = (msg: string, type: "success" | "danger") => {
  alertMsg.value = msg;
  alertType.value = type;
  setTimeout(() => { alertMsg.value = ""; }, 3000);
};

const handleSubmit = async () => {
  saving.value = true;
  const payload = {
    name: form.value.name,
    description: form.value.description || null,
    price: Number(form.value.price),
    stock: Number(form.value.stock),
  };
  const url = editId.value ? `/api/products/${editId.value}` : "/api/products";
  const method = editId.value ? "PUT" : "POST";

  const { error } = await useFetch(url, { method, body: payload });
  if (!error.value) {
    showAlert(editId.value ? "แก้ไขข้อมูลสำเร็จ" : "เพิ่มข้อมูลสำเร็จ", "success");
    form.value = emptyForm();
    editId.value = null;
    await refresh();
  } else {
    showAlert("เกิดข้อผิดพลาด กรุณาลองใหม่", "danger");
  }
  saving.value = false;
};

const handleEdit = (p: Product) => {
  editId.value = p.id;
  form.value = { name: p.name, description: p.description ?? "", price: String(p.price), stock: String(p.stock) };
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleDelete = async (id: number) => {
  if (!confirm("ต้องการลบรายการนี้?")) return;
  const { error } = await useFetch(`/api/products/${id}`, { method: "DELETE" });
  if (!error.value) {
    showAlert("ลบข้อมูลสำเร็จ", "success");
    await refresh();
  } else {
    showAlert("ลบไม่สำเร็จ", "danger");
  }
};

const handleCancel = () => { form.value = emptyForm(); editId.value = null; };
</script>

<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">จัดการสินค้า (Products)</h2>
      <span class="badge bg-secondary fs-6">{{ products?.length ?? 0 }} รายการ</span>
    </div>

    <div v-if="alertMsg" :class="`alert alert-${alertType}`">{{ alertMsg }}</div>

    <div class="card border-0 shadow-sm mb-4">
      <div class="card-header bg-primary text-white">
        <h5 class="mb-0">{{ editId ? "แก้ไขสินค้า" : "เพิ่มสินค้าใหม่" }}</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">ชื่อสินค้า <span class="text-danger">*</span></label>
              <input
                v-model="form.name"
                class="form-control"
                placeholder="กรอกชื่อสินค้า"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">คำอธิบาย</label>
              <input
                v-model="form.description"
                class="form-control"
                placeholder="คำอธิบายสินค้า (ไม่บังคับ)"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">ราคา (บาท) <span class="text-danger">*</span></label>
              <input
                v-model="form.price"
                class="form-control"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">จำนวนในสต็อก</label>
              <input
                v-model="form.stock"
                class="form-control"
                type="number"
                min="0"
              />
            </div>
            <div class="col-12">
              <button class="btn btn-primary me-2" type="submit" :disabled="saving">
                {{ saving ? "กำลังบันทึก..." : editId ? "บันทึกการแก้ไข" : "เพิ่มสินค้า" }}
              </button>
              <button v-if="editId" class="btn btn-outline-secondary" type="button" @click="handleCancel">
                ยกเลิก
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="card border-0 shadow-sm">
      <div class="card-header bg-white">
        <h5 class="mb-0">รายการสินค้า</h5>
      </div>
      <div class="card-body p-0">
        <div v-if="!products || products.length === 0" class="text-center py-5 text-muted">
          <p class="fs-5">ยังไม่มีสินค้า</p>
          <p>กรอกฟอร์มด้านบนเพื่อเพิ่มสินค้าแรก</p>
        </div>
        <div v-else class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="table-light">
              <tr>
                <th>#</th>
                <th>ชื่อสินค้า</th>
                <th>คำอธิบาย</th>
                <th class="text-end">ราคา</th>
                <th class="text-center">สต็อก</th>
                <th class="text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in products" :key="p.id">
                <td class="text-muted">{{ p.id }}</td>
                <td class="fw-semibold">{{ p.name }}</td>
                <td class="text-muted">{{ p.description ?? "-" }}</td>
                <td class="text-end">{{ p.price.toLocaleString("th-TH", { minimumFractionDigits: 2 }) }}</td>
                <td class="text-center">
                  <span :class="`badge ${p.stock > 0 ? 'bg-success' : 'bg-danger'}`">
                    {{ p.stock }}
                  </span>
                </td>
                <td class="text-center">
                  <button class="btn btn-sm btn-outline-primary me-1" @click="handleEdit(p)">แก้ไข</button>
                  <button class="btn btn-sm btn-outline-danger" @click="handleDelete(p.id)">ลบ</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
