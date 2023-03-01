import * as React from 'react';
import { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid, Input } from '@mui/material';
import { UseUrunAuth } from '../context/urunContext';
import { useQuery } from 'react-query';
import { urunGetir, urunuSil } from '../api';
import ButtonDialog from '../components/ButtonDialog'


export default function BasicTable() {
  const { urun } = UseUrunAuth();

  const [filterData, setFilterData] = useState('');

  const filtered = urun.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterData.toLocaleLowerCase())
    )
  })
  console.log(filtered);
  // const { isLoading, error, data } = useQuery('urun-getir',() => urunGetir(urun_id))

  // if (isLoading) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <Grid marginLeft="100px">
        <Input placeholder='Arama Çubuğu' value={filterData} onChange={(e) => setFilterData(e.target.value)} width='auto' />

      </Grid>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Stok kodu</TableCell>
              <TableCell align="right">Cinsi</TableCell>
              <TableCell align="right">Birimi</TableCell>
              <TableCell align="right">Grubu</TableCell>
              <TableCell align="right">Fiyatı</TableCell>
              <TableCell align="right">#</TableCell>
              <TableCell align="right">#</TableCell>
              <TableCell align="right">Stok Giriş/Çıkış</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((row) => (
              <TableRow
                key={row.stokKodu}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.stokKodu}
                </TableCell>
                <TableCell align="right">{row.cinsi.toUpperCase()}</TableCell>
                <TableCell align="right">{row.birimi.toUpperCase()}</TableCell>
                <TableCell align="right">{row.grubu.toUpperCase()}</TableCell>
                <TableCell align="right">{`${row.fiyat} ₺`}</TableCell>
                <TableCell align="right"><Button href={`/Duzenle/${row._id}`}>Düzenle</Button></TableCell>
                <TableCell width="150px" align="right"><ButtonDialog item={row}></ButtonDialog></TableCell>
                <TableCell width="150px" align="right"><Button href={`/Islem/${row._id}`}>İşlem</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
}