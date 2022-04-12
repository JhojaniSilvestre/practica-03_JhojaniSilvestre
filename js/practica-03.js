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

		/*-------tabla --------------------------------------------------------------------------------------*/

		//obtengo el nodo de la tabla
		let tabla = document.getElementById("tabla");
		//obtengo el nodo del tbody
		let tbody = tabla.querySelector("tbody");
		//obtengo una coleccion con todos los nodos tr
		let filas = tbody.getElementsByTagName("tr");

		ausente=true;
		indice=0;
		while (ausente && indice < filas.length) {
			let celdas=filas.item(indice).getElementsByTagName("td");
			if (palabra == celdas.item(0).textContent) {
				ausente = false;
				let valorCeldaNum = parseInt(celdas.item(1).textContent,10);
				let resultado = valorCeldaNum + 1;
				celdas.item(1).textContent=resultado;
			}
			else if (palabra < celdas.item(0).textContent) {
				ausente = false;
				//creo los nuevos nodos de la tabla
				let newFila=document.createElement("tr");
				let newCeldaWord=document.createElement("td");
				let newCeldaCont=document.createElement("td");
				//creo los nodos de texto
				let textWordTable=document.createTextNode(palabra);
				let textWordNum=document.createTextNode("1");
				//asigno los nodos texto a los nodos celda correspondientes
				newCeldaWord.appendChild(textWordTable);
				newCeldaCont.appendChild(textWordNum);
				//asigno los nodos celda al nodo fila
				newFila.appendChild(newCeldaWord);
				newFila.appendChild(newCeldaCont);

				tbody.insertBefore(newFila, filas.item(indice));
			}
			indice++;
		}
		if (ausente) {
			//creo los nuevos nodos de la tabla
			let newFila=document.createElement("tr");
			let newCeldaWord=document.createElement("td");
			let newCeldaCont=document.createElement("td");
			//creo los nodos de texto
			let textWordTable=document.createTextNode(palabra);
			let textWordNum=document.createTextNode("1");
			//asigno los nodos texto a los nodos celda correspondientes
			newCeldaWord.appendChild(textWordTable);
			newCeldaCont.appendChild(textWordNum);
			//asigno los nodos celda al nodo fila
			newFila.appendChild(newCeldaWord);
			newFila.appendChild(newCeldaCont);
			//asigno el nodo fila al nodo tbody
			tbody.appendChild(newFila);
		}
    }
}