# Manajemen Produk

Aplikasi CRUD produk dengan React, React Router, dan Tailwind CSS.

## Cara Menjalankan
```bash
npm install
npm run dev
```
Buka alamat `localhost` yang muncul di terminal.

## Route
| URL | Halaman | Keterangan |
|---|---|---|
| `/` | DashboardPage | Ringkasan produk (jumlah, rata-rata, tertinggi, terendah) |
| `/products` | ProductsPage | Daftar produk, cari, tambah, edit, hapus (modal) |
| `/products/:id` | ProductDetailPage | Detail produk sesuai ID, ada pesan jika ID tidak ada |
| `/settings` | SettingsPage | Pilih tampilan produk: grid atau list |
| `*` | NotFoundPage | Halaman 404 untuk URL tidak dikenal |

## Lokasi State Bersama
`products` dan `displayMode` disimpan dengan `useState` di `src/App.jsx`, di atas `Routes`, lalu dikirim ke halaman lewat props. Dengan begitu data tidak hilang saat berpindah halaman. `displayMode` juga disimpan di `localStorage` (opsional) agar tetap ada setelah reload. Data produk mengikuti mekanisme sebelumnya (memori aplikasi), jadi kembali ke data awal saat reload.

## Pembagian Komponen
- `layouts/AppLayout.jsx`: kerangka halaman (Navbar + `Outlet`)
- `components/Navbar.jsx`: menu dengan `NavLink` (menu aktif)
- `components/Button.jsx`: tombol reusable dengan varian
- `components/Modal.jsx`: pembungkus pop-up (Escape, fokus keyboard)
- `components/ProductCard.jsx`: kartu produk (mode grid/list)
- `components/ProductFormModal.jsx`: form tambah dan edit (validasi harga > 0)
- `components/DeleteModal.jsx`: konfirmasi hapus
- `pages/*`: satu komponen per route
- `data/products.js`: data awal produk