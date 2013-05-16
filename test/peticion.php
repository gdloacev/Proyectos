<?php
	$nombre = $_POST["nombre"];

	if ($nombre != ""){
		echo "Hola " . $nombre . "\n";
	}
	else
		echo "Incorrecto";
?>