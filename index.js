const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = new express()
const Post = require('./models/Post');

//-------connection to mongoDB-------------------------------------------------------
mongoose.connect('mongodb://localhost:27017/cleanblogDB',{useNewUrlParser: true})

//setting up edge template engine
const expressEdge = require('express-edge')
app.use(expressEdge);
app.set('views', `${__dirname}/views`)

//all asset request from browser get it from public directory
app.use(express.static('public'))

//-------------body parser--------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())





//handling routing

app.get('/',async (req,res)=>{

    const posts = await Post.find({})
    res.render('index',{
        title:"Smart Blog",
        posts
    });

    // console.log(posts)

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

app.get('/post/create',(req,res)=>{

    res.render('create');
});

app.get('/post/:id', async(req,res)=>{

    var id = req.params.id;
    const post = await Post.findById(id);
    res.render('post',{

        post
    });


    // const id = req.params.id
    // Post.findById(id,(err,docs)=>{

    //     if(!err){

    //         res.render('post',{
                
    //             post:docs
    //         });
    //     }
    // });
    


});

app.post('/posts/store',(req,res)=>{

    console.log(req.body);
    res.redirect('/');
});





app.listen(2200,()=>{

console.log("Server started @ port : 2200");

});