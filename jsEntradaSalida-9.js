/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{var numero1 = document.getElementById("sueldo").value;
var numero2= parseInt(numero1);
var resultado= numero2 * 1.1
document.getElementById("resultado").value=resultado

  
	
}
