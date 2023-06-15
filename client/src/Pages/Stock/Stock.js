import * as React from "react";
import BasicCard from "../../components/Card";
import { Button, Grid } from "@mui/material";
import { UseStockAuth } from "../../context/stockContext";

export default function Stock() {
  const { stock } = UseStockAuth();
  return (
    <>
      <Grid marginLeft="60px">
        <Button href="/Materials" variant="outlined">
          Stok ekle
        </Button>
      </Grid>
      <br></br>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        {stock.map((items, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <BasicCard item={items} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
