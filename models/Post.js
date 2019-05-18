const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

        title:{
            type:String
            
        },
        description:{
            type: String
        },
        content:{
            type: String
        },
        username:{
            type: String
        },
        createdAt:{

            type: Date,
            default: new Date()
        }
});


const Post =  mongoose.model('Post',PostSchema);


module.exports = Post