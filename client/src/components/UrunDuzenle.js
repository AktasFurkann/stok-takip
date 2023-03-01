import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik'
import { stokDuzenle, urunDuzenle } from '../api';


const theme = createTheme();

export default function Duzenle({ veri }) {

    const [onay, setOnay] = useState(false)

    const formik = useFormik({
        initialValues: {
            stokKodu: veri.stokKodu,
            cinsi: veri.cinsi,
            birimi: veri.birimi,
            grubu: veri.grubu,
            fiyat: veri.fiyat
        },
        onSubmit: async (values, bag) => {
            try {
                const urunDuzenleme = await urunDuzenle(values, veri._id);
                const stokDuzenleme = await stokDuzenle({ birimFiyat: Number(values.fiyat) }, values.stokKodu);
                setOnay(true)

            } catch (e) {
                console.log(e);
            }
        }
    })

    // const submitoldu = useEffect(() => {
    //     if(onay){setOnay(true)}
    // },[])


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
                        Ürün Düzenle
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
                                    value={formik.values.stokKodu}
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
                                    label="Fiyatı"
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
                            Düzenle
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
        </ThemeProvider >
    )
}
