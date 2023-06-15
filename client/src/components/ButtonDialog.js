import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteStock, deleteProduct } from "../api";

export default function AlertDialog({ item }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    deleteProduct(item._id);
    deleteStock(item.stockCode);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Sil</Button>
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
          <Button onClick={handleAccept} autoFocus>
            Evet
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
