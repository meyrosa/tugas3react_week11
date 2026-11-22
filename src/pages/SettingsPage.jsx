const options = [
  { value: "grid", label: "Grid", desc: "Kartu tersusun dalam beberapa kolom." },
  { value: "list", label: "List", desc: "Kartu tersusun memanjang satu per baris." },
];

export default function SettingsPage({ displayMode, onChange }) {
  return (
    <section>
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="mb-6 text-sm text-slate-500">Atur tampilan daftar produk.</p>

      <fieldset className="max-w-md space-y-3">
        <legend className="mb-2 font-semibold">Mode tampilan produk</legend>
        {options.map((o) => (
          <label
            key={o.value}
            className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 focus-within:ring-2 focus-within:ring-blue-500 ${
              displayMode === o.value ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-white"
            }`}
          >
            <input
              type="radio"
              name="displayMode"
              value={o.value}
              checked={displayMode === o.value}
              onChange={() => onChange(o.value)}
              className="mt-1"
            />
            <span>
              <span className="block font-semibold">{o.label}</span>
              <span className="text-sm text-slate-500">{o.desc}</span>
            </span>
          </label>
        ))}
      </fieldset>
    </section>
  );
}