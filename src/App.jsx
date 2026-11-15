import { useState } from "react";
import { initialProducts } from "./data/products";
import ProductCard from "./components/ProductCard";
import ProductFormModal from "./components/ProductFormModal";
import DeleteModal from "./components/DeleteModal";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
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

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>Manajemen Produk</h1>
          <p className="muted">Kelola daftar produk dan harga dalam satu tempat.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setModal({ type: "add" })}>
          + Tambah Produk
        </button>
      </header>

      <div className="toolbar">
        <input
          className="search"
          placeholder="Cari nama produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="muted">{products.length} produk</span>
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            nama={p.nama}
            harga={p.harga}
            onEdit={() => setModal({ type: "edit", product: p })}
            onDelete={() => setModal({ type: "delete", product: p })}
          />
        ))}
      </div>
      {filtered.length === 0 && <p className="muted">Produk tidak ditemukan.</p>}

      <small className="muted">
        Menampilkan {filtered.length} dari {products.length} produk
      </small>

      {modal?.type === "add" && <ProductFormModal onSave={handleAdd} onClose={closeModal} />}
      {modal?.type === "edit" && (
        <ProductFormModal product={modal.product} onSave={handleEdit} onClose={closeModal} />
      )}
      {modal?.type === "delete" && (
        <DeleteModal product={modal.product} onConfirm={handleDelete} onClose={closeModal} />
      )}
    </div>
  );
}