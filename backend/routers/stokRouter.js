const router = require('express').Router();
const stokController = require('../controllers/stokController');

router.get('/', stokController.stoklariListele);
router.patch('/:stok_kodu', stokController.stokGuncelle);
router.post('/', stokController.stokEkle);
router.delete('/:stok_kodu', stokController.stokSil);
router.get('/:stok_id', stokController.stokGetir);

module.exports = router;