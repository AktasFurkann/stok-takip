import { useState, createContext, useEffect, useContext } from 'react'
import { urunleriGetir } from '../api';

const AuthContext = createContext();

const UrunProvider = ({ children }) => {

    const [urun, setUrun] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const istek = await urunleriGetir();
                setUrun(istek)

            } catch (error) {
                console.log(error);

            }
        })()
    }, [])

    const values = {
        urun
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
};

const UseUrunAuth = () => useContext(AuthContext);

export { UrunProvider, UseUrunAuth };