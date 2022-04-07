//cargo el documento
if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio(){
	let boton=document.getElementById("anyadir");
    //cargo los eventos, por compatibilidad compruebo los dos
	if (document.addEventListener)
		boton.addEventListener("click",anyadirDefinicion)
	else if (document.attachEvent)
		boton.attachEvent("onclick",anyadirDefinicion);
}

function anyadirDefinicion(){
    //extraigo el valor de la palabra y de la definicion por el id
	let palabra=document.getElementById("word").value.trim().toLowerCase();
	let definicion=document.getElementById("def").value.trim().toLowerCase();

    //compruebo si las cajas de texto no estan vacias
    if (palabra!="" && definicion!="" ){
		//cada palabra solo aparece 1 vez, orden descendente
		//obtengo el nodo de la datalistlista por el id
		let lista = document.getElementById("lista");
		//obtengo todos los nodos dt
		let todos = lista.getElementsByTagName("dt"); //devuelve un array
		let ausente=true; //para comprobar si la palabra se repite
		let indice=0;
		while (ausente && indice < todos.length) {
			//si la nueva palabra es igual a una existente
			if (palabra == todos.item(indice).textContent) {
				ausente=false;
				//creo el nodo dd para la definicion
				let newDef=document.createElement("dd");
				//creo el nodo text con el valor introducido
				let textDef=document.createTextNode(definicion);
				//añado el nodo text al nodo de la nueva definicion
				newDef.appendChild(textDef);
				//si el indice donde se encontró es igual a la posicion del ultimo nodo dt
				if (indice==todos.length -1) 
					//añado el nodo de la nueva definicion a la lista
					lista.appendChild(newDef); //se añadirá al final del todo
				else //sino, añado la nueva def en la posicion correspondiente
					lista.insertBefore(newDef,todos.item(indice+1));
			}
			else if (palabra > todos.item(indice).textContent) {
				ausente=false;
				//creo los nodos elementos (dt y dd) para la palabra y definicion 
				let neWord=document.createElement("dt");
				let newDef=document.createElement("dd");
				//creo los nodos de texto con los valores correspondientes de las cajas de texto
				let textWord=document.createTextNode(palabra);
				let textDef=document.createTextNode(definicion);
				//añado los nodos de texto a los nodos dt y dd correspondientes
				neWord.appendChild(textWord);
				newDef.appendChild(textDef);
				//inserto la nueva palabra antes del nodo con el indice comparado
				lista.insertBefore(neWord,todos.item(indice));
				//añado la definicion despues del nodo de la palabra
				neWord.after(newDef);
			}

			indice++;
		}
		//si la nueva palabra no existe 
		if (ausente) {
			//creo los nodos elementos (dt y dd) para la palabra y definicion 
			let neWord=document.createElement("dt");
			let newDef=document.createElement("dd");
			//creo los nodos de texto con los valores correspondientes de las cajas de texto
			let textWord=document.createTextNode(palabra);
			let textDef=document.createTextNode(definicion);
			//añado los nodos de texto a los nodos dt y dd correspondientes
			neWord.appendChild(textWord);
			newDef.appendChild(textDef);
			//añado los nodos dt y dd (que ya contienen el txt) al node lista dl
			//se añaden al final automaticamente (por eso primero añadimos el nodo dt y luego dd)
			lista.appendChild(neWord); 
			lista.appendChild(newDef);
		}
    }
}