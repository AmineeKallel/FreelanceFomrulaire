const express = require("express");
const router = express.Router();
const formidable=require("formidable");
const ErrorResponse = require("../utils/errorResponse");
const mv=require("mv")
const excel=require("../modules/Excel")
const badge=require("../modules/badge")
const { createCanvas, loadImage } = require('canvas')

router.post("/",(req,res,next)=>{
    let form=new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      
        var nom=fields.name;
        
var date=new Date(fields.birthday)
date_naissance=date.toLocaleDateString("zh-Hans-CN");
var equipe=fields.equipe
var sexe=fields.gender;
var lic=fields.lic;
var classe=fields.classe
var specialite=fields.specialite
var division=fields.division

var id=excel.excel(nom,date_naissance,equipe,sexe,lic,classe,specialite,division)

if(files.file.originalFilename!=""){
        var oldpath = files.file.filepath;
      var newpath = 'uploads/' + id+'.jpg';
     
      mv(oldpath, newpath, function (err) {
        if (err) throw err;
        badge.badge(nom,date,equipe,specialite,id,newpath, function(imagefinal) {
          console.log(req.headers.host)
         const x = req.headers.host.substring(0,10)
         console.log("x="+x)
          res.redirect("http://"+x+"3000/impression/"+id)
        })
        
      });
        if (err) {
          console.log("Error parsing the files");
          return res.status(400).json({
            status: "Fail",
            message: "There was an error parsing the files",
            error: err,
          });
        }}
        else{
          var newpath='uploads/default.png'
          badge.badge(nom,date,equipe,specialite,id,newpath, function(imagefinal) {
            console.log(req.headers.host)
            
            res.redirect("http://"+req.headers.host+"/impression/"+id)
          })
        }
        
        

      });
})







module.exports=router;