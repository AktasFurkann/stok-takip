import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawerAppBar from './components/Navbar';
import Stok from './Pages/Malzeme/Malzeme';
import Malzeme from './Pages/Stok/Stok';
import Urun from './Pages/Urun/Urun';
import Islem from './Pages/Islem/Islem';
import { useQuery } from 'react-query';
import { urunleriGetir } from './api';
import Duzenle from './Pages/Duzenle/Duzenle';

export default function App() {
  const { isLoading, error, data } = useQuery('urunleri-getir', urunleriGetir)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <DrawerAppBar></DrawerAppBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Malzeme />} />
          <Route path='Malzeme' element={<Stok></Stok>} />
          <Route path='Duzenle/:urun_id' element={<Duzenle></Duzenle>} />
          <Route path='Urun' element={<Urun item={data}></Urun>} />
          <Route path='Islem/:stokKod' element={<Islem></Islem>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}