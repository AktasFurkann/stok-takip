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
import { stokDuzenle, stokGetir } from '../api';
import { useQuery } from 'react-query';

const theme = createTheme();

export default function StokCikis({ veri }) {
  const [onay, setOnay] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      urun: veri.stokKodu,
      cinsi: veri.cinsi,
      birimi: veri.birimi,
      grubu: veri.grubu,
      islemTuru: "cikis",
      adet: "",
      stokDurum: "var",
      birimFiyat: veri.fiyat
    },
    onSubmit: async (values, bag) => {
      try {
        if (data.adet >= Number(values.adet)) {
          await stokDuzenle({ adet: data.adet - Number(values.adet) }, veri.stokKodu);
          setOnay(true)
        } else {
          alert("Stokta yeteri kadar malzeme yok");
        }
      } catch (e) {
        console.log(e);
      }
    }
  })

  const { isLoading, error, data } = useQuery('stok-getir', () => stokGetir(veri.stokKodu))

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

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
            Stok Çıkış
          </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="urun"
                  required
                  fullWidth
                  id="urun"
                  label="Stok kodu"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.urun}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="cinsi"
                  label="Cinsi"
                  name="cinsi"
                  onChange={formik.handleChange}
                  value={veri.cinsi}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="birimi"
                  label="Birimi"
                  name="birimi"
                  onChange={formik.handleChange}
                  value={veri.birimi}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="grubu"
                  label="Grubu"
                  id="grubu"
                  onChange={formik.handleChange}
                  value={veri.grubu}
                  disabled
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="birimFiyat"
                  label="Fiyatı"
                  id="birimFiyat"
                  onChange={formik.handleChange}
                  value={veri.fiyat}
                  disabled
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="adet"
                  label="Adet"
                  id="adet"
                  onChange={formik.handleChange}
                  value={formik.values.adet}
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
              Çıkış işlemi yap
            </Button>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            href="/"
            disabled={onay === false ? true : false}
          >
            Onayla
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  )
}