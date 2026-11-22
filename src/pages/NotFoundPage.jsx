import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="py-10 text-center">
      <p className="text-6xl font-bold text-blue-600">404</p>
      <h1 className="mt-2 text-2xl font-bold">Halaman tidak ditemukan</h1>
      <p className="text-sm text-slate-500">Alamat yang kamu buka tidak tersedia.</p>
      <Link
        to="/products"
        className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Kembali ke produk
      </Link>
    </section>
  );
}