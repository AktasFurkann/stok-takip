const express = require('express');
require('./db/dbConnection');

const app = express();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DATABASE
// const db = module.exports = () => {
//     const connectionParams = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
//     try {
//         mongoose.connect('mongodb+srv://aktasfurkaann:KnsAJZ0mfYH7wFDm@cluster0.sdxdfua.mongodb.net/?retryWrites=true&w=majority',connectionParams)
//         console.log("db'ye bağlanıldı");
//     } catch (error) {
//         console.log("db hata: "+error);
//     }
// }



//Routes
const urunRouter = require('./routers/urunRouter');
const stokRouter = require('./routers/stokRouter');
// const giderRouter = require('./routers/giderRouter');
// const userRouter = require('./routers/userRouter');


app.use('/api/urunler', urunRouter);
app.use('/api/stoklar', stokRouter);

app.use('/' , (req,res) => {
    res.json({"hoşgeldin" : "burası backend"});
})

app.listen(4000, () => {
    console.log("4000 portundan bağlanıldı");
})