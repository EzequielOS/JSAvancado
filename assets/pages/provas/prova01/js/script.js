import geladeirasJson from './geladeiras.json' assert {type: 'json'};
import smartphoneJson from './smartphones.json' assert {type: 'json'};


const obj = geladeirasJson;
var j = 0;


var interval = window.setInterval(() => {
    document.getElementById("marca").innerHTML = obj.geladeiras[j].marca;
    document.getElementById("modelo").innerHTML = obj.geladeiras[j].modelo;
    document.getElementById("valor").innerHTML = obj.geladeiras[j].valor;
    document.getElementById("img").src = "img/geladeiras/geladeira0"+j+".jpg";
    
    (j < obj.geladeiras.length-1) ? j++ : j=0;
    }, 1000);
    console.log(j); 
