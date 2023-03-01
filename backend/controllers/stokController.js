const Stok = require("../models/stokModel");

const stoklariListele = async (req, res) => {
    const tumStoklar = await Stok.find();
    res.json(tumStoklar);
}

const stokEkle = async (req, res) => {
    try {
        const eklenecekStok = new Stok(req.body);
        const sonuc = await eklenecekStok.save();


        res.send(sonuc);
    } catch (error) {
        console.log("stok eklenirken hata oldu" + error);

    }
}

const stokGuncelle = async (req, res) => {
    const { stok_kodu } = req.params
    console.log(req.body.birimFiyat);
    console.log(req.body.adet);
    console.log(stok_kodu);
    try {
        const guncelle = await Stok.findOneAndUpdate({ urun: stok_kodu }, { adet: req.body.adet, birimFiyat: req.body.birimFiyat });
        console.log(guncelle);
        res.json(guncelle);
    } catch (error) {
        console.log("urun guncellenirken hata oluştu: " + error);
    }
}

const stokSil = async (req,res) => {
    const {stok_kodu} = req.params;
    try {
           const deleted = await Stok.findOneAndDelete(stok_kodu)
           res.send(deleted);
    } catch (error) {
        console.log("veri silinirken hata oluştu!" + error);
    }
}

const stokGetir = async (req, res) => {
    const { stok_id } = req.params
    console.log(stok_id);
    try {
        const sonuc = await Stok.findOne({urun : stok_id});
        console.log(sonuc);
        res.json(sonuc);
    } catch (error) {
        console.log("urun getirilirken hata oluştu: " + error);
    }
}

module.exports = {
    stoklariListele,
    stokEkle,
    stokGuncelle,
    stokSil,
    stokGetir
}