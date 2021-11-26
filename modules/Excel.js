const XLSX=require("xlsx-js-style");
const fs = require('fs');
var excel=function(nom,date_naissance,equipe,sexe,lic,classe,specialite,division){
var num;
var workbook = XLSX.readFile(__dirname+"/list.xlsx",{"cellStyles":true});
var sheet = workbook.Sheets["Feuil1"];

sheet["D6"].s={
	"fill":sheet["D6"].s,
	"font":{
		sz:16,
		bold:true
	},
	"alignment":{
		"vertical":"center",
		"horizontal":"center",
		"readingOrder":0
	}
}
var cell;
var font;
for(let i=0;i<8;i++){
	switch(i){
		case 0: cell="C8"; font={
			sz:22,
			bold:true,
			name:"Andalus"

		};  break;
		case 1: cell="D8";font={
			sz:22,
			bold:true,
			name:"Andalus"

		}; break;
		case 2: cell="E8";font={
			sz:22,
			bold:true,
			name:"Andalus"

		}; break;
		case 3: cell="F8";font={
			sz:22,
			bold:true,
			name:"Andalus"

		}; break;
		case 4: cell="G8";font={
			sz:22,
			bold:true,
			name:"Andalus"

		}; break;
		case 5: cell="H8";font={
			sz:16,
			bold:true,
			name:"Andalus"

		}; break;
		case 6: cell="I8";font={
			sz:16,
			bold:true,
			name:"Agency FB"

		}; break;
		case 7: cell="J8";font={
			sz:16,
			bold:true,
			name:"Agency FB"

		}; break;
	}
	sheet[cell].s={
		"fill":sheet[cell].s,
		"font":font,
		"alignment":{
			"vertical":"center",
			"horizontal":"center",
			"readingOrder":0
		},
		"border":{
			"top":{"style":"medium"},
			"left":{"style":"medium"},
			"right":{"style":"medium"},
			"bottom":{"style":"medium"}
			
		}
	}
}
font={
	sz:14,
	bold:true,
	name:"Andalus"

};
sheet["B8"].s={
	"fill":{
		patternType: 'solid',

		fgColor: { theme: 1, tint: -0.249977111117893, rgb:'A6A6A6' },
		bgColor: { indexed: 64 }
	  },
	"font":font,
	"alignment":{
		"vertical":"center",
		"horizontal":"center",
		"readingOrder":0
	},
	"border":{
		"top":{"style":"medium"},
		"left":{"style":"medium"},
		"right":{"style":"medium"},
		"bottom":{"style":"medium"}
		
	}
}
for(i=8;i<500;i++){
	for(j=1;j<10;j++){
		cell=XLSX.utils.encode_cell({"c":j,"r":i})
		if((sheet[cell]==undefined)||(!("v" in sheet[cell]))){
			sheet[cell]={ t: 's', v: " ", z: 'General', w: ' ', s: { patternType: 'none' } }
		}
		
		sheet[cell].s={
			"border":{
				"top":{"style":"medium"},
				"left":{"style":"medium"},
				"right":{"style":"medium"},
				"bottom":{"style":"medium"}
				
			},
			"font":{
				sz:16,
				bold:true
			},
			"alignment":{
				"vertical":"bottom",
				"horizontal":"center",
				"readingOrder":0
			}
		}
		if(j==1){
			sheet[cell].s["fill"]={
				patternType: 'solid',
		
				fgColor: { theme: 1, tint: -0.249977111117893, rgb:'A6A6A6' },
				bgColor: { indexed: 64 }
			  }
		}else{
			sheet[cell].s.font.bold=false
		}
	}
}
i=9;

while(sheet["C"+i].v!=" "){
i++
}
num=sheet["B"+i];
sheet["C"+i].v=nom
sheet["D"+i].v=date_naissance
sheet["E"+i].v=equipe
sheet["F"+i].v=sexe
sheet["G"+i].v=lic
sheet["H"+i].v=classe
sheet["I"+i].v=specialite
sheet["J"+i].v=division
sheet["B2"].s={
	"font":{name:"Arial",
		sz:40,
		bold:true,
		color:{rgb:"FF0000"}
	},
	"alignment":{
		"vertical":"center",
		"horizontal":"center",
		"readingOrder":0
	},
	"fill":{
		patternType: 'solid',

		fgColor: { theme: 1, tint: -0.249977111117893, rgb:'D7E4BD' },
		bgColor: { indexed: 64 }
	  }
}
sheet1=workbook.Sheets["Feuil2"]
sheet1["O7"].s={
	"font":{name:"Calibri",
		sz:12,
		bold:true,
	},
	"alignment":{
		"vertical":"center",
		"horizontal":"center",
		"readingOrder":0
	},
	"fill":sheet1["O7"].s
}
for(i=8;i<13;i++){
	cell=XLSX.utils.encode_cell({"c":i,"r":4})
	sheet1[cell].s={
		"font":{name:"Andalus",
			sz:22,
			bold:true,
		},
		"alignment":{
			"vertical":"bottom",
			"horizontal":"center",
			"readingOrder":0
		},
		"fill":sheet1[cell].s,
		"border":{
			"top":{"style":"medium"},
			"left":{"style":"medium"},
			"right":{"style":"medium"},
			"bottom":{"style":"medium"}
			
		}
	}
}
sheet1["H5"].v=" ";
sheet1["H5"].t="s";
sheet1["H5"].s={
	"font":{name:"Andalus",
		sz:22,
		bold:true,
	},
	"alignment":{
		"vertical":"bottom",
		"horizontal":"center",
		"readingOrder":0
	},
	"fill":{
		patternType: 'solid',

		fgColor: { theme: 1, tint: -0.249977111117893, rgb:'A6A6A6' },
		bgColor: { indexed: 64 }
	  },
	"border":{
		"top":{"style":"medium"},
		"left":{"style":"medium"},
		"right":{"style":"medium"},
		"bottom":{"style":"medium"}
		
	}
}
sheet1["N5"].s={
	"font":{name:"Andalus",
		sz:16,
		bold:true,
	},
	"alignment":{
		"vertical":"bottom",
		"horizontal":"center",
		"readingOrder":0
	},
	"fill":sheet1["N5"].s,
	"border":{
		"top":{"style":"medium"},
		"left":{"style":"medium"},
		"right":{"style":"medium"},
		"bottom":{"style":"medium"}
		
	}
}
for(i=5;i<20;i++){
	cell=XLSX.utils.encode_cell({"c":7,"r":i})
	sheet1[cell].s={
		"font":{name:"Calibri",
			sz:14,
			bold:false,
		},
		"alignment":{
			"vertical":"bottom",
			"horizontal":"center",
			"readingOrder":0
		},
		"fill":sheet1[cell].s,
		"border":{
			"top":{"style":"medium"},
			"left":{"style":"medium"},
			"right":{"style":"medium"},
			"bottom":{"style":"medium"}
			
		}
	}
}
for(i=8;i<14;i++){
	for(j=5;j<20;j++){
		cell=XLSX.utils.encode_cell({"c":i,"r":j})
		sheet1[cell].s={
			"font":{name:"Andalus",
				sz:16,
				bold:true,
			},
			"alignment":{
				"vertical":"bottom",
				"horizontal":"center",
				"readingOrder":0
			},
			"fill":sheet1[cell].s,
			"border":{
				"top":{"style":"medium"},
				"left":{"style":"medium"},
				"right":{"style":"medium"},
				"bottom":{"style":"medium"}
				
			}
		}
	}
}
sheet2=workbook.Sheets["حكام"];
for(i=2;i<7;i++){
	cell=XLSX.utils.encode_cell({"c":i,"r":1})
	sheet2[cell].s={
		"font":{name:"Calibri",
			sz:16,
			bold:true,
		},
		"alignment":{
			"vertical":"center",
			"horizontal":"center",
			"readingOrder":0
		},
		"fill":sheet2[cell].s,
		"border":{
			"top":{"style":"thin"},
			"left":{"style":"thin"},
			"right":{"style":"thin"},
			"bottom":{"style":"thin"}
			
		}
	}
}

for(i=2;i<7;i++){
	for(j=2;j<243;j++){
		cell=XLSX.utils.encode_cell({"c":i,"r":j})
		if((sheet2[cell]==undefined)||(!("v" in sheet2[cell]))){
			sheet2[cell]={ t: 's', v: " ", z: 'General', w: ' ', s: { patternType: 'none' } }
		}
		sheet2[cell].s={
			"font":{name:"Calibri",
				sz:11,
				bold:true,
			},
			"alignment":{
				"vertical":"center",
				"horizontal":"center",
				"readingOrder":0
			},
			"border":{
				"top":{"style":"thin"},
				"left":{"style":"thin"},
				"right":{"style":"thin"},
				"bottom":{"style":"thin"}
				
			}
		}
	}
}

XLSX.writeFile(workbook,__dirname+"/list.xlsx")
return num.v;}

module.exports.excel=excel;
