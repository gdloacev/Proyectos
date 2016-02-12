define(['core/sandbox'],function(sandbox){
	return {
		inputId: 'todo-input',
		botonId: 'todo-boton',
		listaId: 'todo-lista',
		iniciar: function(){
			that = this;
			this.input = document.getElementById(this.inputId);
			this.boton = document.getElementById(this.botonId);
			this.lista = document.getElementById(this.listaId);
			this.localStorage = window.localStorage;
			this.boton.onclick = function(){
				that.buscarValidacion(that.input.value);
			};
			this.input.onkeypress = function(e){
				if (e.keyCode == 13){
					that.buscarValidacion(that.input.value);
				}
			};

			this.sandbox = new sandbox(this);
			this.sandbox.on('input-validado',this.limpiarInput);
			this.sandbox.on('input-validado',this.agregarTodo);
			if (localStorage.length !== 0){
				for(var i=0; i<localStorage.length;i++){
					that.input.value = localStorage.key(i);
					this.sandbox.emit('input-validado',that.input.value);
				}
			}
		},
		limpiarInput: function(){
			this.input.value = "";
			this.input.focus();
		},
		agregarTodo: function(value){
			if (this.localStorage){
				this.localStorage.setItem(value,value);
			}
			var li = document.createElement('li');
			li.innerHTML = '<a id="' + value + '" href="">' + value + '</a>';
			this.lista.insertBefore(li, this.lista.firstChild);
			this.element = document.getElementById(value);
			this.element.onclick = function(e){
				that.eliminarTodo(e.target.id);
			};
			this.sandbox.emit('nuevo-todo');
		},
		buscarValidacion: function(){
			this.sandbox.emit('buscar-validacion',{
				value : this.input.value
			});
		},
		eliminarTodo: function (value){
			console.log(value);
			this.localStorage.removeItem(value);
		}
	};
});