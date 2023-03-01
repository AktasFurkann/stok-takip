const Urun = require("../models/urunModel");

const urunleriListele = async (req, res) => {
    const tumUrunler = await Urun.find();
    res.json(tumUrunler);
}

const urunGetir = async (req, res) => {
    const { urun_id } = req.params
    try {
        const sonuc = await Urun.findById(urun_id);
        console.log(sonuc);
        res.json(sonuc);
    } catch (error) {
        console.log("urun getirilirken hata oluştu: " + error);
    }
}
const stokUrun = async (req, res) => {
    const { stok_kod } = req.params
    console.log(stok_kod);
    try {
        const sonuc = await Urun.findOne({stokKodu : stok_kod});
        console.log(sonuc);
        res.json(sonuc);
    } catch (error) {
        console.log("urun getirilirken hata oluştu: " + error);
    }
}

const urunGuncelle = async (req, res) => {
    const { urun_id } = req.params
    console.log(req.body);
    try {
        const guncelle = await Urun.findByIdAndUpdate(urun_id,req.body);
        res.json(guncelle);
    } catch (error) {
        console.log("urun guncellenirken hata oluştu: " + error);
    }
}

const urunEkle = async (req, res) => {
    try {
        const eklenecekUrun = new Urun(req.body);
        const sonuc = await eklenecekUrun.save();
        res.send(sonuc);
    } catch (error) {
        console.log("ürün eklenirken hata oldu" + error);
    }
}

const urunSil = async (req,res) => {
    const {urun_id} = req.params;

    try {
           const deleted = await Urun.findByIdAndDelete(urun_id)

           res.send(deleted);
    } catch (error) {
        console.log("veri silinirken hata oluştu!" + error);
    }
}

module.exports = {
    urunleriListele,
    urunGetir,
    urunGuncelle,
    urunEkle,
    urunSil,
    stokUrun
}