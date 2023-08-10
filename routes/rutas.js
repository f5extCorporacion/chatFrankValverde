const express = require('express');
const router = express.Router();

router("/camino")
.get( (req,res,next)=>{render.res('rutas')})
.post((req,res,next)=>{console.log('hol')})

router("/inicio/:id")
.get( (req,res,next)=>{res.send('data')})
.post((req,res,next)=>{console.log('hol')})

modules.exports = router;