import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Dialog, DialogActions, DialogTitle, IconButton, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { stokSil, stokUrun, urunDuzenle } from '../api';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

export default function BasicCard({ item }) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const { isLoading, error, data } = useQuery(['urun-getir'], () => stokUrun(item.urun))

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAccept = async () => {
    await stokSil(item.urun)
    await urunDuzenle({ stokDurum: "yok" }, data._id);
    setOpen(false);
    navigate("/malzeme")
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          avatar={
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {item.cinsi.toUpperCase()}
            </Typography>
          }
          action={
            <Tooltip title='Ürünü sil' >
              <IconButton onClick={handleClickOpen} aria-label="settings" disabled={open === true ? true : false} >
                <ClearIcon />
                <Dialog
                  open={open}
                  onClose={handleCancel}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Bu ürünü silmek istediğinize emin misiniz?"}
                  </DialogTitle>
                  <DialogActions>
                    <Button onClick={handleCancel}>Hayır</Button>
                    <Button onClick={handleAccept} autoFocus> Evet </Button>
                  </DialogActions>
                </Dialog>
              </IconButton>
            </Tooltip>
          }
        />
        <CardContent>
          <Typography variant="h5" component="div"  >
            {item.grubu.toUpperCase()}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" >
            Ürün kodu: {item.urun}
          </Typography>
          <Typography variant="body1">
            {data.birimi.charAt(0).toUpperCase() + data.birimi.slice(1)}: {item.adet === 0 ? 'stokta yok' : item.adet}
            <br />
            Birim fiyatı: {`${item.birimFiyat} ₺`}
            <br />
            Toplam fiyat: {item.adet === 0 ? 'stokta yok' : `${item.birimFiyat * item.adet} ₺`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={`/Islem/${data._id}`} size="small">Stok Ekle / Çıkar</Button>
        </CardActions>
      </Card>
    </>
  );
}