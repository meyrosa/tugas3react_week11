import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

export default function ProductFormModal({ product, onSave, onClose }) {
  const isEdit = Boolean(product);
  const [nama, setNama] = useState(product ? product.nama : "");
  const [harga, setHarga] = useState(product ? String(product.harga) : "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama.trim()) return setError("Nama produk wajib diisi.");
    if (Number(harga) <= 0) return setError("Harga harus lebih dari 0.");
    onSave({ nama: nama.trim(), harga: Number(harga) });
  };

  return (
    <Modal onClose={onClose}>
      <h2 id="modal-title" className="text-xl font-bold">
        {isEdit ? "Edit Produk" : "Tambah Produk"}
      </h2>
      <p className="text-sm text-slate-500">
        {isEdit ? "Perbarui informasi produk yang dipilih." : "Masukkan informasi produk baru."}
      </p>
      {isEdit && <p className="mt-2 text-xs text-slate-500">ID: {product.id}</p>}

      <form onSubmit={handleSubmit} className="mt-3">
        <label htmlFor="nama" className="mb-1 block text-sm font-semibold">Nama Produk</label>
        <input
          id="nama"
          className={inputClass}
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Pulpen"
        />

        <label htmlFor="harga" className="mb-1 mt-3 block text-sm font-semibold">Harga (Rp)</label>
        <input
          id="harga"
          type="number"
          className={inputClass}
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          placeholder="Contoh: 5000"
          aria-describedby="harga-info"
        />
        <p
          id="harga-info"
          role={error ? "alert" : undefined}
          className={`mt-1 text-xs ${error ? "text-red-600" : "text-slate-500"}`}
        >
          {error || "Harga harus lebih dari 0."}
        </p>

        <div className="mt-5 flex gap-2">
          <Button variant="secondary" className="flex-1" onClick={onClose}>Batal</Button>
          <Button type="submit" className="flex-1">
            {isEdit ? "Simpan Perubahan" : "Simpan Produk"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}