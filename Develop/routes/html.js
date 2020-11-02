const router = require("express").Router();

const path= require("path");


  router.get("/index", (req, res) =>{
    console.log("lskdjklsjdkl")
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log("exercise page")
  });
  router.get("/exercise",  (req, res) =>{
    console.log("stats page")
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  router.get("/stats",  (req, res) =>{
    console.log("stats page")
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  module.exports = router