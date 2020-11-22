const express = require('express');
const morgan = require('morgan');
const app = express();
const {router} = require('./routes/anime.routes')
app.use(morgan('dev'));

app.get('/',(req,res)=> {
    res.json({
        welcome:'Apis For Development',
        Author:"Soyer98"
    })
})

app.use('/api/animes',router)


module.exports = {
    app
}