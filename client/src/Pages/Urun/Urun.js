import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik'
import { urunEkle } from '../../api';

const theme = createTheme();

export default function Urun({ item }) {
  const [onay, setOnay] = React.useState(false)

  const numaralar = item.map((veri) => veri.stokKodu)

  const formik = useFormik({
    initialValues: {
      stokKodu: item.length > 0 ? Number(numaralar[numaralar.length - 1]) + 1 : "1",
      cinsi: "",
      birimi: "",
      grubu: "",
      fiyat: "",
      stokDurum: "yok"
    },
    onSubmit: async (values, bag) => {
      try {
        await urunEkle(values);
        setOnay(true)
      } catch (e) {
        console.log(e);
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Ürün Ekle
          </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Box my={5}>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="stokKodu"
                  required
                  fullWidth
                  id="stokKodu"
                  label="Stok kodu"
                  autoFocus
                  onChange={formik.handleChange}
                  disabled
                  value={formik.values.stokKodu}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  placeholder="Örn:Şeker"
                  required
                  fullWidth
                  id="cinsi"
                  label="Cinsi"
                  name="cinsi"
                  onChange={formik.handleChange}
                  value={formik.values.cinsi}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  placeholder="Örn:Kg"
                  required
                  fullWidth
                  id="birimi"
                  label="Birimi"
                  name="birimi"
                  onChange={formik.handleChange}
                  value={formik.values.birimi}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  placeholder="Örn:Toz şeker"
                  required
                  fullWidth
                  name="grubu"
                  label="Grubu"
                  id="grubu"
                  onChange={formik.handleChange}
                  value={formik.values.grubu}
                />
              </Grid>
              <Grid item xs={12}   >
                <TextField
                  placeholder="Örn:1000"
                  required
                  fullWidth
                  name="fiyat"
                  label="fiyatı"
                  id="fiyat"
                  onChange={formik.handleChange}
                  value={formik.values.fiyat}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={onay === true ? true : false}
            >
              Ürün Ekle
            </Button>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            href="/malzeme"
            disabled={onay === false ? true : false}
          >
            Onayla
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}