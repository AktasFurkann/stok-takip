import { Grid } from "@mui/material";
import * as React from "react";
import UpdateProduct from "../../components/UpdateProduct";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api";
import { useQuery } from "react-query";

export default function Update() {
  const { product_id } = useParams();

  console.log(product_id);

  const { isLoading, error, data } = useQuery(["get-product", product_id], () =>
    getProduct(product_id)
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
        <UpdateProduct data={data}></UpdateProduct>
      </Grid>
    </div>
  );
}
