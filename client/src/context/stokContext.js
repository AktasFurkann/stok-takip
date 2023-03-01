import { useState, createContext, useEffect, useContext } from 'react'
import { useQuery } from 'react-query';
import { stoklarGetir } from '../api';



const AuthContext = createContext();

const StokProvider = ({ children }) => {



    const [stok, setStok] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                console.log("selam");
                const istek = await stoklarGetir();
                console.log(istek);
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