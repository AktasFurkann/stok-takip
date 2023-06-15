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
import { addProduct } from "../../api";

const theme = createTheme();

export default function Product({ item }) {
  const [confirm, setConfirm] = React.useState(false);

  const numbers = item.map(veri => veri.stockCode);

  const formik = useFormik({
    initialValues: {
      stockCode:
        item.length > 0 ? Number(numbers[numbers.length - 1]) + 1 : "1",
      type: "",
      unit: "",
      group: "",
      price: "",
      stockStatus: "yok",
    },
    onSubmit: async (values, bag) => {
      try {
        await addProduct(values);
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
            Ürün Ekle
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Box my={5}></Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="stockCode"
                  required
                  fullWidth
                  id="stockCode"
                  label="Stok kodu"
                  autoFocus
                  onChange={formik.handleChange}
                  disabled
                  value={formik.values.stockCode}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Örn:Şeker"
                  required
                  fullWidth
                  id="type"
                  label="Cinsi"
                  name="type"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Örn:Kg"
                  required
                  fullWidth
                  id="unit"
                  label="Birimi"
                  name="unit"
                  onChange={formik.handleChange}
                  value={formik.values.unit}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Örn:Toz şeker"
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
                  placeholder="Örn:1000"
                  required
                  fullWidth
                  name="price"
                  label="fiyatı"
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
              Ürün Ekle
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
