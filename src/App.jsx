import { useState } from "react";
import { Routes, Route } from "react-router";
import { initialProducts } from "./data/products";
import AppLayout from "./layouts/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";

const MODE_KEY = "displayMode";

function loadMode() {
  try {
    return localStorage.getItem(MODE_KEY) === "list" ? "list" : "grid";
  } catch {
    return "grid";
  }
}

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [displayMode, setDisplayMode] = useState(loadMode);

  const changeMode = (mode) => {
    setDisplayMode(mode);
    try {
      localStorage.setItem(MODE_KEY, mode);
    } catch {
      /* abaikan jika localStorage tidak tersedia */
    }
  };

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<DashboardPage products={products} />} />
        <Route
          path="products"
          element={
            <ProductsPage
              products={products}
              setProducts={setProducts}
              displayMode={displayMode}
            />
          }
        />
        <Route path="products/:id" element={<ProductDetailPage products={products} />} />
        <Route
          path="settings"
          element={<SettingsPage displayMode={displayMode} onChange={changeMode} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}