const express = require('express');
const router = express.Router()

const { Post } = require("../model/model");

router.get("/", (req, res) => {
    Post.find().exec((err, grocery) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, grocery: grocery });
    });
});

router.get("/details/:id", (req, res) => {
    let id=req.params.id;
    Post.findById(id, function(err,grocery){
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, grocery });
    });
});

router.post("/add", (req, res) => {
    const post = new Post(req.body);
    post.save((err) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true });
    });
});

router.put("/update/:id", (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body, 
        },
        (err, post) => {
            if (err) return res.status(400).json({ success: false, err });
            return res.status(200).json({ success: true });
        }
    );
});

router.delete("/delete/:id",(req,res)=>{
    Post.findByIdAndRemove(req.params.id).exec((err, deleteItem)=>{
        if(err){
            res.send(err);
        }
        return res.json(deleteItem)
    });
});

module.exports = router;