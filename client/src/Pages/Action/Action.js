import { Grid } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api";
import { useQuery } from "react-query";
import StockEntry from "../../components/stockEntry";
import StockOutput from "../../components/stockOutput";

export default function Action() {
  const { stockCode } = useParams();

  const { isLoading, error, data } = useQuery(["get-product", stockCode], () =>
    getProduct(stockCode)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        <StockEntry item={data} />
        <StockOutput item={data} />
      </Grid>
    </div>
  );
}
