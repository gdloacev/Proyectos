var llantaact = "llanta1.png";
var techoact = "techo2.png";
var coche = "cnegro.jpg"

$(document).on("ready",inicio);

function borrarCanvas(idcanvas)
{
	var ctx = cargaContextoCanvas(idcanvas);
	var canvas = $(idcanvas);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function cambiarColor(datos)
{
	var colorito = datos.currentTarget.id;
	var nuevoCoche = "c" + colorito + ".jpg";
	coche = nuevoCoche;
	borrarCanvas("micanvas");
	cargarCanvas("micanvas",nuevoCoche,0,0,1000,600);
	cargarCanvas("micanvas",llantaact,130,240,180,180);
	cargarCanvas("micanvas",llantaact,731,232,192,192);
	cargarCanvas("micanvas",techoact,415,72,260,114);
	$('#caracteristicas li:first').html('<strong>Color: </strong> ' + colorito.substring(0, 1).toUpperCase() + colorito.substr(1, colorito.length));
}
function cambiarNombre()
{
	var camCSS = {
		height: "auto",
		margin: "0 1em",
		opacity: 1,
		width: "12em"
	};
	var camCSS1 = {
		height: 0,
		margin: 0,
		opacity: 0,
		width: 0
	};
	if ($('#nombre').css('opacity') != 1)
	{
		$('#nombre').css(camCSS);
	}
	else
	{
		$('#nombre').css(camCSS1);
	}
	$('#nombre').focus();
}
function cambiarLlantas(datos)
{
	var llantita = datos.currentTarget.id + ".png";
	var tipollanta = '';
	borrarCanvas("micanvas");
	cargarCanvas("micanvas",coche,0,0,1000,600);
	cargarCanvas("micanvas",llantita,130,240,180,180);
	cargarCanvas("micanvas",llantita,731,232,192,192);
	cargarCanvas("micanvas",techoact,415,72,260,114);
	llantaact = llantita;
	if (llantita == 'llanta1.png')
	{
		tipollanta = 'Baratas';
	}
	else
	{
		tipollanta = 'Caras';
	}
	$('#caracteristicas li:nth-child(3)').html('<strong>Llantas: </strong> ' + tipollanta);
	playPause();
}
function cambiarTecho(datos)
{
	var techito = datos.currentTarget.id + ".png";
	var tipotecho = '';
	borrarCanvas("micanvas");
	cargarCanvas("micanvas",coche,0,0,1000,600);
	cargarCanvas("micanvas",llantaact,130,240,180,180);
	cargarCanvas("micanvas",llantaact,731,232,192,192);
	cargarCanvas("micanvas",techito,415,72,260,114);
	techoact = techito;
		if (techito == 'techo1.png')
	{
		tipotecho = 'Transparente';
	}
	else
	{
		tipotecho = 'Mate';
	}
	$('#caracteristicas li:nth-child(2)').html('<strong>Techo: </strong> ' + tipotecho);
}
function cambioNombre(event)
{
	if (event.keyCode == 13)
	{
		var cssHidden =
		{
			height: 0,
			margin: 0,
			opacity: 0,
			width: 0
		};
		var nombre = $('#nombre').val();
		$('h1').text('Nuevo ' + nombre);
		$('#nombreauto').text(nombre);
		$('#nombre').val('');
		$('#nombre').css(cssHidden);
	}
}
function cargaContextoCanvas(idCanvas)
{
   var elemento = document.getElementById(idCanvas);
   if(elemento && elemento.getContext){
      var contexto = elemento.getContext('2d');
      if(contexto){
         return contexto;
      }
   }
   return FALSE;
}
function cargarCanvas(idcanvas,imagen,x,y,ancho,alto)
{
	var ctx = cargaContextoCanvas(idcanvas);
	if(ctx){
		//Creo una imagen conun objeto Image de Javascript
		var img = new Image();
		//indico la URL de la imagen
		img.src = imagen;
		//defino el evento onload del objeto imagen
		img.onload = function(){
			//incluyo la imagen en el canvas
			ctx.drawImage(img, x, y, ancho, alto);
		}
	}
}
function playPause()
{
	var song = document.getElementsByTagName('audio')[0];
	if (song.paused)
		song.play();
	else
		song.pause();
}
function inicio()
{

	cargarCanvas("micanvas",coche,0,0,1000,600);
	cargarCanvas("micanvas",llantaact,130,240,180,180);
	cargarCanvas("micanvas",llantaact,731,232,192,192);
	cargarCanvas("micanvas",techoact,415,72,260,114);

	$("#personalizar").on("click",movida);
	$("#btnComprar").on("click",cambiarNombre);
	$("#nombre").on("keydown",cambioNombre);
	$("#micanvas").on("click",playPause);
}
function movida()
{
	var cambiosCSS =
	{
		margin: 0,
		maxHeight: 0,
		opacity: 0,
		overflow: "hidden",
		padding: 0,
		width: 0
	};

	var cambiosCSS2 =
	{
		height: "auto",
		opacity: 1,
		width: "40%"
	};

	if ($('#historia').css('opacity') != 1)
	{
		$("#historia").removeAttr('style');
		$("#personalizacion").removeAttr('style');
		$('#personalizar').text('Personalizar');
	}
	else
	{
		$("#historia").css(cambiosCSS);
		$("#personalizacion").css(cambiosCSS2);
		$('#personalizar').text('Ver Historia');
	}
	$("article div").on("click",cambiarColor);
	$("#llantas figure").on("click",cambiarLlantas);
	$("#techo figure").on("click",cambiarTecho);
}