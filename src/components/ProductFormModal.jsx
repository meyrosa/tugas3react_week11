import Modal from "./Modal";

export default function ProductFormModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2>Tambah Produk</h2>
      <p className="muted">Masukkan informasi produk baru.</p>

      <form>
        <label>Nama Produk</label>
        <input placeholder="Contoh: Pulpen" />

        <label>Harga (Rp)</label>
        <input type="number" placeholder="Contoh: 5000" />

        <div className="modal-actions">
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Batal
          </button>
          <button type="submit" className="btn btn-primary">
            Simpan Produk
          </button>
        </div>
      </form>
    </Modal>
  );
}
