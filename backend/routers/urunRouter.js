const router = require('express').Router();
const urunController = require('../controllers/urunController');

router.get('/', urunController.urunleriListele);
router.get('/:urun_id', urunController.urunGetir);
router.get('/stok/:stok_kod', urunController.stokUrun);
router.patch('/:urun_id', urunController.urunGuncelle);
router.post('/', urunController.urunEkle);
router.delete('/:urun_id', urunController.urunSil);

module.exports = router;