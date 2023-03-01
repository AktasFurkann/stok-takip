const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stokSchema = new Schema({
    urun: {
        type: String,
        required: true,
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
    birimFiyat: {
        type: Number,
        required: true
    },
    adet: {
        type: Number,
        trim: true,
    }
}, { collection: 'stoklar', timestamps: true });

const Stok = mongoose.model('Stok', stokSchema);

module.exports = Stok;