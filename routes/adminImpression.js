const express = require("express");
const router = express.Router();
const formidable=require("formidable");
const imgToPDF = require('image-to-pdf');
const fs = require('fs');
router.post("/",(req,res,next)=>{
    let form=new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
        var id1= parseInt(fields.id1);
        var id2=parseInt(fields.id2);

    var dir=__dirname
   
dir=dir.substring(0,dir.indexOf("routes"))
    const pages = [];
    for(var id=id1;id<=id2;id++){
        pages.push(dir+"/badges/"+id+"_resized.png");
        console.log(id)
    }
    res.setHeader('Content-Type', 'application/pdf');
  
res.setHeader('Content-Disposition', 'attachment; filename='+id+'.pdf');

    imgToPDF(pages, 'BADGE').pipe(res);
   
  
    })
    
    


})


module.exports=router;