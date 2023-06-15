import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid, TextField } from "@mui/material";
import { UseProductAuth } from "../context/productContext";
import ButtonDialog from "../components/ButtonDialog";

export default function BasicTable() {
  const { product } = UseProductAuth();
  const [filterData, setFilterData] = useState("");

  const filtered = product.filter(item => {
    return Object.keys(item).some(key =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterData.toLocaleLowerCase())
    );
  });

  return (
    <>
      <Grid marginLeft="100px">
        <TextField
          value={filterData}
          onChange={e => setFilterData(e.target.value)}
          id="outlined-search"
          label="Arama Çubuğu"
          type="search"
          size="small"
        />
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Stok kodu</TableCell>
              <TableCell align="right">Cinsi</TableCell>
              <TableCell align="right">Birimi</TableCell>
              <TableCell align="right">Grubu</TableCell>
              <TableCell align="right">Fiyatı</TableCell>
              <TableCell align="right">Stok Giriş/Çıkış</TableCell>
              <TableCell align="right">#</TableCell>
              <TableCell align="right">#</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map(row => (
              <TableRow
                key={row.stockCode}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.stockCode}
                </TableCell>
                <TableCell align="right">{row.type.toUpperCase()}</TableCell>
                <TableCell align="right">{row.unit.toUpperCase()}</TableCell>
                <TableCell align="right">{row.group.toUpperCase()}</TableCell>
                <TableCell align="right">{`${row.price} ₺`}</TableCell>
                <TableCell align="right">
                  <Button href={`/Action/${row._id}`}>İşlem</Button>
                </TableCell>
                <TableCell width="150px" align="right">
                  <ButtonDialog item={row}></ButtonDialog>
                </TableCell>
                <TableCell width="150px" align="right">
                  <Button href={`/Update/${row._id}`}>Düzenle</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
