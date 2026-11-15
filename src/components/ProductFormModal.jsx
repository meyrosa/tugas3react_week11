import { useState } from "react";
import Modal from "./Modal";

export default function ProductFormModal({ onClose }) {
  const isEdit = Boolean(product);
  const [nama, setNama] = useState(product ? product.nama : "");
  const [harga, setHarga] = useState(product ? String(product.harga) : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ nama: nama.trim(), harga: Number(harga) });
  };

  return (
    <Modal onClose={onClose}>
      <h2>{isEdit ? "Edit Produk" : "Tambah Produk"}</h2>
      <p className="muted">
        {isEdit ? "Perbarui informasi produk yang dipilih." : "Masukkan informasi produk baru."}
      </p>
      {isEdit && <small>ID: {product.id}</small>}

      <form onSubmit={handleSubmit}>
        <label>Nama Produk</label>
        <input
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Pulpen"
        />
        <label>Harga (Rp)</label>
        <input
          type="number"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          placeholder="Contoh: 5000"
        />

        <div className="modal-actions">
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Batal
          </button>
          <button type="submit" className="btn btn-primary">
            {isEdit ? "Simpan Perubahan" : "Simpan Produk"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
