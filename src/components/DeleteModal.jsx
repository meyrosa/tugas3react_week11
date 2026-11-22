import Modal from "./Modal";
import Button from "./Button";

export default function DeleteModal({ product, onConfirm, onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-xl">
        🗑️
      </div>
      <h2 id="modal-title" className="text-center text-xl font-bold">Hapus Produk?</h2>
      <p className="mb-3 text-center text-sm text-slate-500">
        Produk yang dihapus tidak dapat dikembalikan.
      </p>
      <div className="rounded-lg border border-slate-200 p-3">
        <p className="text-xs text-slate-500">ID: {product.id}</p>
        <p className="font-bold">{product.nama}</p>
        <p className="font-bold text-blue-600">Rp{product.harga.toLocaleString("id-ID")}</p>
      </div>
      <div className="mt-5 flex gap-2">
        <Button variant="secondary" className="flex-1" onClick={onClose}>Batal</Button>
        <Button variant="danger" className="flex-1" onClick={onConfirm}>Hapus Produk</Button>
      </div>
    </Modal>
  );
}