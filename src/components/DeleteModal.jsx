import Modal from "./Modal";

export default function DeleteModal({ product, onConfirm, onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="trash">🗑️</div>
      <h2 style={{ textAlign: "center" }}>Hapus Produk?</h2>
      <p className="muted" style={{ textAlign: "center" }}>
        Produk yang dihapus tidak dapat dikembalikan.
      </p>
      <div className="card">
        <small>ID: {product.id}</small>
        <h3>{product.nama}</h3>
        <p className="harga">Rp{product.harga.toLocaleString("id-ID")}</p>
      </div>
      <div className="modal-actions">
        <button className="btn btn-outline" onClick={onClose}>Batal</button>
        <button className="btn btn-danger" onClick={onConfirm}>Hapus Produk</button>
      </div>
    </Modal>
  );
}