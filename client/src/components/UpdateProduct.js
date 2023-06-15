import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { updateStock, updateProduct } from "../api";

const theme = createTheme();

export default function Update({ data }) {
  const [confirm, setConfirm] = useState(false);

  const formik = useFormik({
    initialValues: {
      stockCode: data.stockCode,
      type: data.type,
      unit: data.unit,
      group: data.group,
      price: data.price,
    },
    onSubmit: async (values, bag) => {
      try {
        await updateProduct(values, data._id);
        await updateStock(
          { unitPrice: Number(values.price) },
          values.stockCode
        );
        setConfirm(true);
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Ürün Düzenle
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="product"
                  required
                  fullWidth
                  id="product"
                  label="Stok kodu"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.stockCode}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="type"
                  label="Cinsi"
                  name="type"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="unit"
                  label="Birimi"
                  name="unit"
                  onChange={formik.handleChange}
                  value={formik.values.unit}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="group"
                  label="Grubu"
                  id="group"
                  onChange={formik.handleChange}
                  value={formik.values.group}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Fiyatı"
                  id="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={confirm === true ? true : false}
            >
              Düzenle
            </Button>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            href="/Materials"
            disabled={confirm === false ? true : false}
          >
            Onayla
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
