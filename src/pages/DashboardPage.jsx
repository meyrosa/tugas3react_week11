import { Link } from "react-router";

const rupiah = (n) => `Rp${Math.round(n).toLocaleString("id-ID")}`;

export default function DashboardPage({ products }) {
  const count = products.length;
  const prices = products.map((p) => p.harga);
  const total = prices.reduce((a, b) => a + b, 0);
  const stats = [
    { label: "Jumlah Produk", value: count },
    { label: "Rata-rata Harga", value: count ? rupiah(total / count) : "-" },
    { label: "Harga Tertinggi", value: count ? rupiah(Math.max(...prices)) : "-" },
    { label: "Harga Terendah", value: count ? rupiah(Math.min(...prices)) : "-" },
  ];

  return (
    <section>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mb-6 text-sm text-slate-500">Ringkasan dari data produk saat ini.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">{s.label}</p>
            <p className="mt-1 text-2xl font-bold text-blue-600">{s.value}</p>
          </div>
        ))}
      </div>
      <Link
        to="/products"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Kelola Produk
      </Link>
    </section>
  );
}