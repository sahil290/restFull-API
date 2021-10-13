const express = require("express");
const { model } = require("mongoose");
const Post = require("./models/posts")
const router = express.Router();

router.get("/", (req,res)=>{
    res.send('we are on posts page');
});
router.post("/", (req ,res) => {
    console.log(req.body);
})
module.exports = router;