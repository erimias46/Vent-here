const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Post=require('./Models/Vents')

app.use(express.json())
app.use(cors())

mongoose
  .connect("mongodb://127.0.0.1/Vent", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(3001, () => {
      console.log("On port 3001")
})
  
app.post('/posts',async (req, res) => {
  const vent = req.body.body;
  const title = req.body.title
  const tags=req.body.tags
    const post = new Post({
      body: vent,
      title: title,
      tags:tags
      
    });
    try {
      await post.save();
      res.send("success");
    } catch (err) {
      console.log(err);
    }
    
    
});
app.get('/posts', async (req, res) => {
    
    try {
        const vents = await Post.find().sort({ date: -1 }).exec();
        
        res.send(vents);
        
    }
    catch (err) {
        console.log(err)
    }
    
})
    

    


  
  