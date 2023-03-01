const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urunSchema = new Schema({
    stokKodu: {
        type: String,
        required: true,
        unique: true
    },
    cinsi: {
        type: String,
        required: true,
        trim: true,
    },
    birimi: {
        type: String,
        required: true,
        trim: true,
    },
    grubu: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
    ,
    fiyat: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    stokDurum: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    }
}, { collection: 'urunler', timestamps: true });

const Urun = mongoose.model('Urun', urunSchema);

module.exports = Urun;