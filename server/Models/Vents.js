const mongoose = require('mongoose')


const ventsSchema = mongoose.Schema({
    body: {
        type: String,
        required:true

    },
    date: {
        type: Date,
        default:Date.now
    }
    
})

const Post = mongoose.model("vents", ventsSchema);
module.exports = Post;