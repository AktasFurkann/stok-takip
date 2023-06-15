import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { updateStock, getStock } from "../api";
import { useQuery } from "react-query";

const theme = createTheme();

export default function StockOutput({ item }) {
  const [confirm, setConfirm] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      product: item.stockCode,
      type: item.type,
      unit: item.unit,
      group: item.group,
      actionType: "cikis",
      total: "",
      stockStatus: "var",
      unitPrice: item.price,
    },
    onSubmit: async (values, bag) => {
      try {
        if (data.total >= Number(values.total)) {
          await updateStock(
            { total: data.total - Number(values.total) },
            item.stockCode
          );
          setConfirm(true);
        } else {
          alert("Stokta yeteri kadar malzeme yok");
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  const { isLoading, error, data } = useQuery("get-stock", () =>
    getStock(item.stockCode)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

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
            Stok Çıkış
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
                  value={formik.values.product}
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
                  value={item.type}
                  disabled
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
                  value={item.unit}
                  disabled
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
                  value={item.group}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="unitPrice"
                  label="Fiyatı"
                  id="unitPrice"
                  onChange={formik.handleChange}
                  value={item.price}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="total"
                  label="Adet"
                  id="total"
                  onChange={formik.handleChange}
                  value={formik.values.total}
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
              Çıkış işlemi yap
            </Button>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            href="/Stock"
            disabled={confirm === false ? true : false}
          >
            Onayla
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
