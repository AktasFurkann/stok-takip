import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { stokSil, urunuSil } from '../api';

export default function AlertDialog({item}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleAccept = () => {
        urunuSil(item._id)
        stokSil(item.stokKodu)
        setOpen(false);
    };
    return (
        <div>
            <Button  onClick={handleClickOpen}>
                Sil
            </Button>
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
                    <Button onClick={handleCancel}>Disagree</Button>
                    <Button onClick={handleAccept} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}