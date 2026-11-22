import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/products", label: "Produk" },
  { to: "/settings", label: "Settings" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3"
      >
        <span className="mr-4 font-bold text-blue-600">Manajemen Produk</span>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              `rounded px-2 py-1 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isActive ? "font-bold text-blue-600" : "text-slate-600 hover:text-slate-900"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}