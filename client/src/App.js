import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawerAppBar from "./components/Navbar";
import Materials from "./Pages/Materials/Materials";
import Stock from "./Pages/Stock/Stock";
import Product from "./Pages/Product/Product";
import Action from "./Pages/Action/Action";
import { useQuery } from "react-query";
import { listProducts } from "./api";
import Update from "./Pages/Update/Update";

export default function App() {
  const { isLoading, error, data } = useQuery("get-products", listProducts);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <DrawerAppBar></DrawerAppBar>
      <BrowserRouter>
        <Routes>
          <Route path="AddProduct" element={<Product item={data}></Product>} />
          <Route path="Stock" element={<Stock></Stock>} />
          <Route path="Update/:product_id" element={<Update></Update>} />
          <Route
            path="Materials"
            element={<Materials item={data}></Materials>}
          />
          <Route path="Action/:stockCode" element={<Action></Action>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
