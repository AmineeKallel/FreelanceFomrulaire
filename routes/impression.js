const express = require("express");
const router = express.Router();
const excelImpression=require("../modules/validationImpression")
const formidable=require("formidable");
const imgToPDF = require('image-to-pdf');
const fs = require('fs');
router.post("/",(req,res,next)=>{
    let form=new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
        var id= fields.id;
    
    var r=excelImpression.impression(id);
    var dir=__dirname
dir=dir.substring(0,dir.indexOf("routes"))
    const pages = [dir+"/badges/"+id+".png"];
 
    res.setHeader('Content-Type', 'application/pdf');
res.setHeader('Content-Disposition', 'attachment; filename='+id+'.pdf');
    imgToPDF(pages, 'BADGE').pipe(res);

    })
    

})


module.exports=router;