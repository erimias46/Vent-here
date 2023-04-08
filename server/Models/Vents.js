const mongoose = require('mongoose')


const ventsSchema = mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    body: {
        type: String,
        required:true

    },
    date: {
        type: Date,
        default:Date.now
    },
    tags: {
        type:Array
    }
    
})

const Post = mongoose.model("vents", ventsSchema);
module.exports = Post;