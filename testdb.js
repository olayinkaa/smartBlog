const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cleanblogDB',{useNewUrlParser: true});

const Post = require('./models/Post');


Post.create({

    username:"Ibrahim Olayinka",
    title:"Life is good",
    description:"Don't give up yet",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iste atque doloremque nesciunt, vel itaque."
    // title:"Musical Concert",
    // description:"Let Everything that has breath, Praise the lord",
    // content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iste atque doloremque nesciunt, vel itaque."

},(error,post)=>{

    console.log(error,post);
});
