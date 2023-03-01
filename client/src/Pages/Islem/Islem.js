import { Grid } from '@mui/material';
import * as React from 'react';
import StokGiris from '../../components/stokGiris';
import StokCikis from '../../components/stokCikis';
import { useParams } from 'react-router-dom';
import { urunGetir } from '../../api';
import { useQuery } from 'react-query';

export default function Islem() {
    const { stokKod } = useParams();

    const { isLoading, error, data } = useQuery(['urun-getir', stokKod], () => urunGetir(stokKod))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                <StokGiris veri={data} />
                <StokCikis veri={data} />
            </Grid>
        </div>
    );
}