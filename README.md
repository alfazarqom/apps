# ASRI Collection — ChatGPT UI Preview

## 1. Project Overview

ASRI Collection adalah prototype storefront e-commerce berbasis React. Repository ini menggunakan pendekatan Single File React App: komponen UI, state, dan styling utama berada dalam satu file `App.jsx`.

README ini menetapkan standar untuk merepresentasikan tampilan aplikasi sebagai **Preview UI interaktif di ChatGPT**.

## 2. Source File

```text
apps/
├── App.jsx
└── README.md
```

`App.jsx` adalah sumber referensi utama untuk struktur, desain, dan perilaku UI.

## 3. Technology

- React
- JavaScript JSX
- React Hooks (`useState`)
- CSS
- Responsive mobile-first UI

## 4. Application Structure

```text
App
├── Header
└── Main
    ├── Home
    └── Products
        └── ProductCard
```

Seluruh komponen tersebut didefinisikan dalam satu file `App.jsx`.

## 5. UI Features

### Home
- Header dan navigasi
- Hero section
- Featured Products
- Tombol Explore Collection
- Tombol View All

### Products
- Daftar produk
- Pencarian produk
- Filter kategori
- Product Card
- Tombol Add to Cart

### Cart
- Jumlah item pada ikon Bag
- Penambahan jumlah item melalui tombol Add to Cart

## 6. Preview UI in ChatGPT

Preview UI di ChatGPT adalah representasi interaktif dari tampilan dan perilaku `App.jsx`.

Ketentuan preview:

1. Gunakan `App.jsx` pada branch `main` sebagai sumber referensi.
2. Pertahankan struktur komponen dan perilaku UI.
3. Pertahankan desain, warna, spacing, typography, dan responsive layout.
4. Navigasi Home dan Products harus berfungsi.
5. Pencarian dan filter kategori harus berfungsi.
6. Tombol Add to Cart harus memperbarui jumlah item.
7. Preview harus dapat digunakan langsung dalam percakapan ChatGPT.

### Implementasi Preview

Preview dapat direpresentasikan menggunakan komponen interaktif ChatGPT dengan:

- HTML untuk struktur tampilan.
- CSS untuk styling.
- JavaScript untuk interaksi.
- State lokal untuk navigasi, pencarian, filter, dan cart.

**Batasan:** Preview UI ChatGPT bukan React Runtime dan tidak mengeksekusi file `App.jsx` secara langsung. Preview merupakan implementasi representasi UI yang mengikuti desain dan perilaku sumber React.

## 7. Design Standard

| Property | Value |
|---|---|
| Primary | `#16803D` |
| Background | `#FFFFFF` |
| Text | `#171717` |
| Layout | Mobile-first |
| Maximum width | `500px` |
| Product grid | 2 columns |
| Font | Inter, Arial, sans-serif |

## 8. Scope Limitations

Preview saat ini menggunakan data produk statis.

Belum termasuk:

- Supabase integration
- Backend API
- Authentication
- Checkout
- Payment gateway
- Order management

## 9. Source of Truth

`App.jsx` adalah sumber referensi utama untuk struktur, desain, dan perilaku UI.

Jika `App.jsx` berubah, Preview UI perlu disesuaikan dengan versi terbaru.

## 10. Change Control

- Audit sebelum perubahan.
- Jangan mengubah `App.jsx` tanpa persetujuan.
- Jangan mengubah struktur aplikasi tanpa persetujuan.
- Jangan mengklaim Preview UI sebagai eksekusi React asli.
- Verifikasi interaksi UI sebelum menyatakan preview selesai.

---

**Project:** ASRI Collection  
**Repository:** `alfazarqom/apps`  
**Main Source:** `App.jsx`  
**Preview Target:** ChatGPT Interactive UI Preview
