import { Grid } from '@mui/material';
import * as React from 'react';
import UrunDuzenle from '../../components/UrunDuzenle';
import { useParams } from 'react-router-dom';
import { urunGetir } from '../../api';
import { useQuery } from 'react-query';

export default function Duzenle() {
    const {urun_id} = useParams();

    const { isLoading, error, data } = useQuery(['urun-getir',urun_id],() => urunGetir(urun_id))
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
console.log(data);
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                <UrunDuzenle veri={data}></UrunDuzenle>
            </Grid>
        </div>

    );
}