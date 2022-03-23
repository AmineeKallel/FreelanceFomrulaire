const express = require("express");
const router = express.Router();
const formidable=require("formidable");
const imgToPDF = require('image-to-pdf');
const fs = require('fs');
router.post("/",(req,res,next)=>{
    let form=new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
        var id= parseInt(fields.id);
       

    var dir=__dirname
dir=dir.substring(0,dir.indexOf("routes"))

    const pages = [];
   
        pages.push(dir+"/badges/"+id+".png");
        console.log(id)
      
    
    res.setHeader('Content-Type', 'application/pdf');
res.setHeader('Content-Disposition', 'attachment; filename='+id+'.pdf');
    imgToPDF(pages, 'BADGE').pipe(res);
   
  
    })
    
    


})


module.exports=router;