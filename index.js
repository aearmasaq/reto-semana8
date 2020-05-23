//funcion suamr 
function Sumar() {
    let n1 = document.getElementById('txtN1').value;
    let n2 = document.getElementById('txtN2').value;
    let suma = parseInt(n1) + parseInt(n2);
    alert("La suma es: "+suma);
}

//Promedio de 4 notas
function Promedio(){
 let not1 = document.getElementById('not1').value;
 let not2 = document.getElementById('not2').value;
 let not3 = document.getElementById('not3').value;
 let not4 = document.getElementById('not4').value;

 let promedio = (parseInt(not1) + parseInt(not2) + parseInt(not3) + parseInt(not4)) /4;
  alert ("El promedio de las 4 notas es: "+ promedio);
}

//Calcular el área de un rectángulo

function areaRectangulo(){
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;

    let area =  parseInt(base) * parseInt(altura);
    
    alert ("El area del rectángulo es: " +area );
}

//Calcular el área de un triangulo

function areaTriangulo(){
    let base_tri = document.getElementById('base_tri').value;
    let altura_tri = document.getElementById('altura_tri').value;

    let area_tri =(parseInt(base_tri)*parseInt(altura_tri))/2;
    alert ( "El area del triangulo es: " +area_tri )
}

//Calcular el área de un circulo 
function areaCirculo(){
    let radio_cir =document.getElementById('radio_cir').value;
  

    let area = Math.PI  * Math.pow(radio_cir,2);

    alert("El area del circulo es: "+ area);
}  

//calcular sueldo 
 function calcularSueldo(){
     let pagohora = document.getElementById('pagohora').value;
     let horas = document.getElementById('horas').value;

     let pagoTotal = pagohora * horas;
     
     alert( "Tu sueldo por " +horas+" trabajadas es de S/"+ pagoTotal);
 }
 
 //conversor metro a pulgada
 function convertirMetroPulgada(){
     let metros = document. getElementById('metros').value;

     let conPulg = metros * 39.3701;

     alert (metros + " metro equivale a " + conPulg + " pulgadas")
 }

 //calcular tipo de cambio
 function convertirSoleDolares (){
     let soles_do =  document.getElementById('soles_do').value;

     let soles_dolar = soles_do  / 3.40;
  alert("Con S/"+ soles_do + " puedes adquirir $" + soles_dolar);
 }
//Calcular edad por año de nacimiento

 function calcularEdad(){
     let date_nac = document.getElementById('date_nac').value;

     let edad = 2020 - date_nac;

     alert( "La edad del postulate es de: "+ edad + " años")
     
 }

 //Calcular numero menor 
 function calcularMenor( ){
    
    let num1 =  document.getElementById('num1').value;
    let num2 =  document.getElementById('num2').value;
    let num3 =  document.getElementById('num3').value;
    let name1 =  document.getElementById('name1').value;
    let name2 =  document.getElementById('name2').value;
    let name3 =  document.getElementById('name3').value;
    let menor = 0; 
    let nombre ="";

            
            if (num1<num2 && num1<num3) {
                menor = num1;
                nombre = name1;
            }

            if(num2<num1 && num2<num3){
                menor = num2;
                nombre = name2;
            }
            
            if(num3<num1 && num3<num2 ){
                menor = num3;
               nombre = name3;
            }    
    alert("La edad de la persona menor es de "+ menor + " años y su nombre es: " + nombre)
    
 }

 //Calcular bono
 function calcularBono(){
     let  anti_trab= document.getElementById('anti_trab').value;

     if (anti_trab == 1)  {
        bono = 100;
     }
		
	
	
	if (anti_trab == 2)  {
        bono = 200;
    }
		
	
	if (anti_trab == 3)  {
        bono = 300;
    }
		
	
	if (anti_trab == 4)  {
        bono = 400;
    }
		
	
	if (anti_trab == 5)  {
        bono = 500;
    }
		
	
	
	if (anti_trab > 5)  {
        bono = 1000;
    }

    alert("Tu bono a recibir por "+ anti_trab + " años es de $" + bono);
		
	

 }
  
