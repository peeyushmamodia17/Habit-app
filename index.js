const express=require('express');
const path=require('path');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const sassMiddleware=require('node-sass-middleware');
const db=require('./config/mongoose');

app.use(sassMiddleware({
    src : './assets/scss',
    dest :'./assets/css',
    debug : true,
    outputStyle : 'extended',
    prefix : '/css'
}))


app.use(express.urlencoded());

app.use(express.static('assets'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log("error in running the server on port");
    }

    console.log("Server successfully running on port",port);
})

