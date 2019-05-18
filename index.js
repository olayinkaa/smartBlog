const express = require('express');

const app = new express();


//setting up edge template engine
const expressEdge = require('express-edge');


app.use(expressEdge);

app.set('views', `${__dirname}/views`);


//all asset request from browser get it from public directory
app.use(express.static('public'));






//handling routing

app.get('/',(req,res)=>{

    res.render('index',{
        title:"Smart Blog"
    });

});

app.get('/about',(req,res)=>{

    res.render('about');
});

app.get('/contact',(req,res)=>{

    res.render('contact');
});

app.get('/post',(req,res)=>{

    res.render('post');
});



app.listen(2200,()=>{

console.log("Server started @ port : 2200");

});