const express = require('express');
require('./db/dbConnection');

const app = express();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const urunRouter = require('./routers/urunRouter');
const stokRouter = require('./routers/stokRouter');

app.use('/api/urunler', urunRouter);
app.use('/api/stoklar', stokRouter);

app.use('/' , (req,res) => {
    res.json({"hoşgeldin" : "burası backend"});
})

app.listen(4000, () => {
    console.log("4000 portundan bağlanıldı");
})