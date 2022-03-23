const express = require("express");
const router = express.Router();
const fs=require("fs");


router.post("/",(req,res,next)=>{
    var dir=__dirname
    dir=dir.substring(0,dir.indexOf("routes"))+"/modules/list.xlsx";

    var readStream = fs.createReadStream(dir);
  
    
    readStream.on('open', function () {
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader("Content-Disposition", "attachment; filename=" + "list.xlsx");
      readStream.pipe(res);
    });



})

















module.exports=router;