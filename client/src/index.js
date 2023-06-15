import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { StockProvider } from "./context/stockContext";
import { ProductProvider } from "./context/productContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <ProductProvider>
      <StockProvider>
        <App />
      </StockProvider>
    </ProductProvider>
  </QueryClientProvider>
);

reportWebVitals();
