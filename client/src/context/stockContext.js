import { useState, createContext, useEffect, useContext } from "react";
import { listStocks } from "../api";

const AuthContext = createContext();

const StockProvider = ({ children }) => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await listStocks();
        setStock(request);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const values = {
    stock,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const UseStockAuth = () => useContext(AuthContext);

export { StockProvider, UseStockAuth };
