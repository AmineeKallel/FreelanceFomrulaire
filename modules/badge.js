const { createCanvas, loadImage } = require('canvas')
const fs = require('fs')
var badge=function(nom,date_naissance,equipe,specialite,id,imagepath,callback){
const canvas = createCanvas(1200, 800)
const ctx = canvas.getContext('2d')
var dir=__dirname
dir=dir.substring(0,dir.indexOf("modules"))
loadImage(__dirname+'/FOND BADGE.jpg').then((image) => {
    loadImage(dir+imagepath).then((image1)=>{
      ctx.drawImage(image, 0, 0,1200,800)
      ctx.drawImage(image1, 48, 295,295,365)
    //add the name to the template
    ctx.font = 'bold 50px "Arial"'
  ctx.fillStyle="black"
  ctx.fillText(nom, 710, 460,180)
  var date = date_naissance.getFullYear()+'/'+(date_naissance.getMonth()+1)+'/'+date_naissance.getDate();
  ctx.font = 'bold 40px "Arial"'
ctx.fillText(date, 680, 547,500,500)
ctx.fillText(equipe, 600, 630,380)
ctx.fillText(specialite, 800, 725,100)
ctx.font='bold 60px Calibri'
ctx.fillStyle='rgba(0,0,128,255)'
ctx.fillText("ID: "+id, 100, 270,180)
  var imagefinal=canvas.toBuffer("image/jpeg");
  fs.writeFileSync(dir+'/badges/'+id+".png", imagefinal)
  
  callback(id)
    })
  })}
module.exports.badge=badge