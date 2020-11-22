const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors')
const {router} = require('./routes/anime.routes')

app.use(cors())
app.use(morgan('dev'));

app.get('/',(req,res)=> {
    res.json({
        welcome:'Apis For Development',
        Author:"Soyer98",
        Version:"V_1.1"
    })
})

app.use('/api/animes',router)


module.exports = {
    app
}