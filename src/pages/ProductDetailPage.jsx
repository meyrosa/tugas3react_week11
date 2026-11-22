import { Link, useParams } from "react-router";

const backLink =
  "mt-5 inline-block rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

export default function ProductDetailPage({ products }) {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <section>
        <h1 className="text-2xl font-bold">Produk tidak ditemukan</h1>
        <p className="text-sm text-slate-500">Produk dengan ID "{id}" tidak tersedia.</p>
        <Link to="/products" className={backLink}>Kembali ke daftar produk</Link>
      </section>
    );
  }

  return (
    <section>
      <div className="max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs text-slate-500">ID: {product.id}</p>
        <h1 className="text-3xl font-bold">{product.nama}</h1>
        <p className="mt-2 text-2xl font-bold text-blue-600">
          Rp{product.harga.toLocaleString("id-ID")}
        </p>
      </div>
      <Link to="/products" className={backLink}>Kembali ke daftar produk</Link>
    </section>
  );
}