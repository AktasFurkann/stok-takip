import { useState, createContext, useEffect, useContext } from "react";
import { listProducts } from "../api";

const AuthContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await listProducts();
        setProduct(request);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const values = {
    product,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const UseProductAuth = () => useContext(AuthContext);

export { ProductProvider, UseProductAuth };
