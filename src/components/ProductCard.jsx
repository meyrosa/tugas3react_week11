import { Link } from "react-router";
import Button from "./Button";

export default function ProductCard({ id, nama, harga, mode = "grid", onEdit, onDelete }) {
  const isList = mode === "list";
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${
        isList ? "flex flex-wrap items-center justify-between gap-3" : ""
      }`}
    >
      <div>
        <p className="text-xs text-slate-500">ID: {id}</p>
        <h3 className="text-lg font-bold">{nama}</h3>
        <p className="font-bold text-blue-600">Rp{harga.toLocaleString("id-ID")}</p>
      </div>
      <div className={`flex flex-wrap gap-2 ${isList ? "" : "mt-3"}`}>
        <Link
          to={`/products/${id}`}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Detail
        </Link>
        <Button variant="secondary" onClick={onEdit}>Edit</Button>
        <Button variant="dangerOutline" onClick={onDelete}>Hapus</Button>
      </div>
    </div>
  );
}