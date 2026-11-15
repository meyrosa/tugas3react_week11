export default function ProductCard({ id, nama, harga, onEdit, onDelete }) {
  return (
    <div className="card">
      <small>ID: {id}</small>
      <h3>{nama}</h3>
      <p className="harga">Rp{harga.toLocaleString("id-ID")}</p>
      <div className="card-actions">
        <button className="btn btn-outline" onClick={onEdit}>Edit</button>
        <button className="btn btn-outline-danger" onClick={onDelete}>Hapus</button>
      </div>
    </div>
  );
}