define([
		'modulos/contador',
		'modulos/ingresar',
		'modulos/validar'
	],function(){

	var modulos = Array.prototype.slice.call(arguments);

	return {
		iniciar: function(){
			for (var name in modulos){
				modulos[name].iniciar();
			}
		}
	};
});