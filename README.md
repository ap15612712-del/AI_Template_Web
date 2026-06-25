# Web Template

Nuxt 3 + TypeScript + Bootstrap 5 + Prisma + PostgreSQL

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Nuxt 3 (Vue 3, SSR) |
| Language | TypeScript |
| Styling | Bootstrap 5 |
| ORM | Prisma |
| Database | PostgreSQL |
| Deploy | Vercel |

## เริ่มต้นใช้งาน

### 1. ติดตั้ง dependencies
```bash
npm install
```

### 2. ตั้งค่า environment variables
```bash
cp .env.example .env
```
แก้ไข `.env` ใส่ค่า `DATABASE_URL` ของ PostgreSQL

### 3. สร้าง database tables
```bash
npx prisma migrate dev --name init
```

### 4. รัน development server
```bash
npm run dev
```
เปิด http://localhost:3000

---

## โครงสร้างโปรเจกต์

```
nuxt3-template/
├── server/
│   ├── api/
│   │   └── products/           # Server API Routes
│   │       ├── index.get.ts    # GET  /api/products
│   │       ├── index.post.ts   # POST /api/products
│   │       ├── [id].get.ts     # GET  /api/products/:id
│   │       ├── [id].put.ts     # PUT  /api/products/:id
│   │       └── [id].delete.ts  # DELETE /api/products/:id
│   └── utils/
│       └── prisma.ts           # Prisma Client (auto-imported in server/)
├── layouts/
│   └── default.vue             # Layout หลัก + Navbar + Footer
├── pages/
│   ├── index.vue               # หน้า Home
│   └── products.vue            # หน้าตัวอย่าง Products CRUD
├── plugins/
│   └── bootstrap.client.ts     # Bootstrap JS (client-side)
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Migration history
├── app.vue                     # Root component
├── nuxt.config.ts              # Nuxt configuration
├── .env.example                # ตัวอย่าง environment variables
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | /api/products | ดึงสินค้าทั้งหมด |
| POST | /api/products | เพิ่มสินค้าใหม่ |
| GET | /api/products/:id | ดึงสินค้าตาม id |
| PUT | /api/products/:id | แก้ไขสินค้า |
| DELETE | /api/products/:id | ลบสินค้า |

### ตัวอย่าง POST /api/products
```json
{
  "name": "สินค้าตัวอย่าง",
  "description": "คำอธิบาย",
  "price": 199.00,
  "stock": 50
}
```

## Deploy บน Vercel

1. Push code ขึ้น GitHub
2. เชื่อมต่อ Vercel กับ GitHub repository
3. เพิ่ม environment variable `DATABASE_URL` ใน Vercel dashboard
4. Deploy อัตโนมัติเมื่อ push ไป `main`

## เพิ่ม Model ใหม่

1. แก้ไข `prisma/schema.prisma` เพิ่ม model
2. รัน `npx prisma migrate dev --name <migration-name>`
3. สร้าง API route ใน `server/api/<model>/`
4. สร้าง page ใน `pages/<model>.vue`
