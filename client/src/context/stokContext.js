import { useState, createContext, useEffect, useContext } from 'react'
import { stoklarGetir } from '../api';

const AuthContext = createContext();

const StokProvider = ({ children }) => {

    const [stok, setStok] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const istek = await stoklarGetir();
                setStok(istek)

            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    const values = {
        stok
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
};

const UseStokAuth = () => useContext(AuthContext);

export { StokProvider, UseStokAuth };