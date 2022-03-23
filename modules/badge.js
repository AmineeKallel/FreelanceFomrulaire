const { createCanvas, loadImage } = require('canvas')
const fs = require('fs')
var badge=function(nom,date_naissance,equipe,specialite,id,imagepath,callback){
const canvas = createCanvas(650, 408)
const ctx = canvas.getContext('2d')
var dir=__dirname
dir=dir.substring(0,dir.indexOf("modules"))
loadImage(__dirname+'/FOND BADGE.jpg').then((image) => {
    loadImage(dir+imagepath).then((image1)=>{
      ctx.drawImage(image, 0, 0,650,408)
      ctx.drawImage(image1, 26, 151,160,183)
    //add the name to the template
  ctx.font = 'bold 30px "Arial"'
  ctx.fillStyle="black"
  if(nom.length>25) {
    ctx.font = 'bold 24px "Arial"'
    ctx.fillText(nom, 500+(12-nom.length)*14, 235,300-(12-nom.length)*6)
  }else{ ctx.font = 'bold 30px "Arial"'
  ctx.fillText(nom, 355+(12-nom.length)*11, 236,300-(12-nom.length)*6)}
  var month=date_naissance.getMonth()+1;
  var day=date_naissance.getDate();
  if(month<=9){
    month="0"+month;
  }
  if(day<=9){
    day="0"+day;
  }
  var date = date_naissance.getFullYear()+'/'+month+'/'+day;
  ctx.font = 'bold 25px "Arial"'
  ctx.fillText(date, 350, 277,180)
 
  if(equipe.length>45){
    ctx.font = 'bold 19px "Arial"'
    ctx.fillText(equipe, 660+(27-equipe.length)*20,325,300-(28-equipe.length)*6)
  }else if(equipe.length>30 && equipe.length<=45){
    ctx.font = 'bold 21px "Arial"'
    ctx.fillText(equipe, 370+(27-equipe.length)*12,325,300-(28-equipe.length)*6)
  }else{  ctx.font = 'bold 28px "Arial"'
  ctx.fillText(equipe,250+(27-equipe.length)*14,325,300-(28-equipe.length)*6)}

  console.log("equipe"+equipe.length)
  
  console.log("specialite"+specialite.length)
  
  
    ctx.font = 'bold 28px "Arial"'
  ctx.fillText(specialite,410+(8-specialite.length)*10, 370,110-(8-specialite.length)*7)
  

  ctx.font='bold 30px Calibri'
  ctx.fillStyle='rgba(0,0,128,255)'
  ctx.fillText("ID: "+id, 60, 140,100)
  var imagefinal=canvas.toBuffer("image/jpeg");
  fs.writeFileSync(dir+'/badges/'+id+".png", imagefinal)
  
  callback(id)
    })
  })}
module.exports.badge=badge