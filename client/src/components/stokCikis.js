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
import { stokDuzenle, stokEkle, stokGetir, stoklarGetir, urunDuzenle } from '../api';
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import { UseStokAuth } from '../context/stokContext';

const theme = createTheme();


export default function StokCikis({ veri }) {
  const {_id} = useParams();
  
  const formik = useFormik({
    initialValues: {
      urun : veri.stokKodu,
      cinsi : veri.cinsi,
      birimi : veri.birimi,
      grubu : veri.grubu,
      islemTuru: "cikis",
      adet: "",
      stokDurum: "var",
      birimFiyat : veri.fiyat
    },
    onSubmit: async (values, bag) => {
      try {
        // if (veri.stokDurum === "yok") {
        //   const stokEkleme = await stokEkle(values);
        //   const urunDuzenleme = await urunDuzenle({stokDurum : values.stokDurum} ,veri._id);
        // }else{
        //   const stokDuzenleme = await stokDuzenle({adet : eskiAdet[0] - Number(values.adet) } ,veri.stokKodu);
        //   console.log(stokDuzenleme);
        //   console.log(values);
        // }
        if (data.adet >= Number(values.adet)) {
          const stokDuzenleme = await stokDuzenle({adet : data.adet - Number(values.adet) } ,veri.stokKodu);
        }else{
          console.log("stokta o kadar malzeme yok");
        }
      } catch (e) {
        console.log(e);
      }
    }
  })

  const { isLoading, error, data } = useQuery('stok-getir',() => stokGetir(veri.stokKodu))

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data);

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
            >
              Çıkış işlemi yap
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}






// import * as React from 'react';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useFormik } from 'formik'

// const theme = createTheme();



// export default function StokCikis({ veri }) {
//   const formik = useFormik({
//     initialValues: {
//       stokKodu: veri.stokKodu,
//       cinsi: veri.cinsi,
//       birimi: veri.birimi,
//       grubu: veri.grubu,
//       fiyat: veri.fiyat,
//       adet: ""
//     },
//     onSubmit: async (values, bag) => {
//       try {
//         console.log(values);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   })
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >

//           <Typography component="h1" variant="h5">
//             Stok Çıkış
//           </Typography>
//           <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="stokKodu"
//                   required
//                   fullWidth
//                   id="stokKodu"
//                   label="Stok kodu"
//                   autoFocus
//                   onChange={formik.handleChange}
//                   value={formik.values.stokKodu}
//                   disabled
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="cinsi"
//                   label="Cinsi"
//                   name="cinsi"
//                   onChange={formik.handleChange}
//                   value={formik.values.cinsi}
//                   disabled
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="birimi"
//                   label="Birimi"
//                   name="birimi"
//                   onChange={formik.handleChange}
//                   value={formik.values.birimi}
//                   disabled
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="grubu"
//                   label="Grubu"
//                   id="grubu"
//                   onChange={formik.handleChange}
//                   value={formik.values.grubu}
//                   disabled
//                 />
//               </Grid>
//               <Grid item xs={12} >
//                 <TextField
//                   required
//                   fullWidth
//                   name="fiyat"
//                   label="fiyatı"
//                   id="fiyat"
//                   onChange={formik.handleChange}
//                   value={formik.values.fiyat}
//                   disabled
//                 />
//               </Grid>
//               <Grid item xs={12} >
//                 <TextField
//                   required
//                   fullWidth
//                   name="adet"
//                   label="Adet"
//                   id="adet"
//                   onChange={formik.handleChange}
//                   value={formik.values.adet}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Çıkış işlemi yap
//             </Button>

//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   )
// }



