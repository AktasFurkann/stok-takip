import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useFormik} from 'formik'
import {urunEkle} from '../../api';
const theme = createTheme();

export default function Urun({item}) {
  
  const formik = useFormik({
    initialValues:{
        stokKodu: item.length > 0 ? Number(item.length)+1 : "1",
        cinsi:"",
        birimi:"",
        grubu: "",
        fiyat: "",
        stokDurum: "yok"
    },
    onSubmit: async (values ,bag) => {
        try {
            const registerResponse = await urunEkle(values);
            if (registerResponse.hataKodu === 400 ) {
                bag.setErrors({general : "bu stok kodu zaten var!"})
            }
            else{
                console.log(registerResponse);
            }                
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="cinsi"
                  label="Cinsi"
                  name="cinsi"
                  onChange={formik.handleChange}
                  value={formik.values.cinsi}
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
                  value={formik.values.birimi}
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
                  value={formik.values.grubu}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
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
            >
              Sign Up
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}