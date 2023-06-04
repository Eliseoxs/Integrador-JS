
let respuesta = document.getElementById("respuesta");

function total(){
let cantidad = document.getElementById("cantidad").value;
let opcion = document.getElementById("opcion").value;
let total =0;
if(opcion == "Estudiante" ){

    total = cantidad*200 - cantidad*200*0.8
respuesta.innerHTML= total;

}
if(opcion == "Trainee"){
    total = cantidad*200 - cantidad*200*0.6
respuesta.innerHTML= total;
}
if(opcion== "Junior"){

    total = cantidad*200 - cantidad*200*0.15
respuesta.innerHTML= total;

}

}

function borrar(){

    respuesta.innerHTML=0;
}



