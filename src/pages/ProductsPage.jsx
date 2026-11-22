import { useState } from "react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import ProductFormModal from "../components/ProductFormModal";
import DeleteModal from "../components/DeleteModal";

export default function ProductsPage({ products, setProducts, displayMode }) {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null); 

  const filtered = products.filter((p) =>
    p.nama.toLowerCase().includes(search.toLowerCase())
  );
  const closeModal = () => setModal(null);

  const handleAdd = (data) => {
    const nextId = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    setProducts([...products, { id: nextId, ...data }]);
    closeModal();
  };
  const handleEdit = (data) => {
    setProducts(products.map((p) => (p.id === modal.product.id ? { ...p, ...data } : p)));
    closeModal();
  };
  const handleDelete = () => {
    setProducts(products.filter((p) => p.id !== modal.product.id));
    closeModal();
  };

  const containerClass =
    displayMode === "list"
      ? "flex flex-col gap-3"
      : "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold">Manajemen Produk</h1>
          <p className="text-sm text-slate-500">Kelola daftar produk dan harga dalam satu tempat.</p>
        </div>
        <Button onClick={() => setModal({ type: "add" })}>+ Tambah Produk</Button>
      </div>

      <div className="my-5 flex flex-wrap items-center justify-between gap-3">
        <input
          aria-label="Cari nama produk"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:w-64"
          placeholder="Cari nama produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="text-sm text-slate-500">{products.length} produk</span>
      </div>

      <div className={containerClass}>
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            nama={p.nama}
            harga={p.harga}
            mode={displayMode}
            onEdit={() => setModal({ type: "edit", product: p })}
            onDelete={() => setModal({ type: "delete", product: p })}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-sm text-slate-500">Produk tidak ditemukan.</p>
      )}

      <p className="mt-4 text-xs text-slate-500">
        Menampilkan {filtered.length} dari {products.length} produk
      </p>

      {modal?.type === "add" && <ProductFormModal onSave={handleAdd} onClose={closeModal} />}
      {modal?.type === "edit" && (
        <ProductFormModal product={modal.product} onSave={handleEdit} onClose={closeModal} />
      )}
      {modal?.type === "delete" && (
        <DeleteModal product={modal.product} onConfirm={handleDelete} onClose={closeModal} />
      )}
    </section>
  );
}