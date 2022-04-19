//cargo el documento
if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio(){
	let boton=document.getElementById("boton");
    //cargo los eventos, por compatibilidad compruebo los dos
	if (document.addEventListener)
		boton.addEventListener("click",mostrarProvincias)
	else if (document.attachEvent)
		boton.attachEvent("onclick",mostrarProvincias);
}

function mostrarProvincias(){
    //creo los arrays con las provincias de cada comunidad autonoma
    let md = new Array("Madrid");
    let mc = new Array("Murcia");
    let as = new Array("Oviedo");
    let nc = new Array("Pamplona");
    let cb = new Array("Santander");
    let ri = new Array("Logroño");
    let ib = new Array("Palma de Mallorca");
    let an = new Array("Almeria","Cadiz","Cordoba","Granada","Huelva","Jaen","Malaga","Sevilla");
    let ar = new Array("Huesca","Teruel","Zaragoza");
    let cn = new Array("Santa Cruz de Tenerife","La Palmas de Gran Canaria");
    let cm = new Array("Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo");
    let cl = new Array("Avila","Burgos","Leon","Salamanca","Segovia","Soria","Valladolid","Zamora");
    let ct = new Array("Barcelona","Gerona","Lerida","Tarragona");
    let vc = new Array("Alicante","Castellón de la Plana","Valencia");
    let ex = new Array("Badajoz","Caceres");
    let ga = new Array("La Coruña","Lugo","Orense","Pontevedra");
    let pv = new Array("Bilbao","San Sebastián","Vitoria");

    //obtengo el nodo de la select provincias
    let select = document.getElementById("provincias");

    /*--------------borrar nodos option de la select provincias ----*/
    select = borrar_options(select); //devuelve la select sin nodos option
    /*--------------------------------------------------------------*/

    //obtengo el nodo de la select de comunidades autonomas
	let c_autonom = document.getElementById("c_autonom");
	//obtengo una collection con los option seleccionados
    let value_autonom = c_autonom.selectedOptions;
    //obtengo el value de los options seleccionados
    if (value_autonom.length > 0) {
        let valor;
        let provincias;
        //recorro la colletion obteniendo el valor de cada indice
        for (let i = 0; i < value_autonom.length; i++) {
            valor = value_autonom[i].value;
            //compruebo el valor seleccionado para así crear los nodos correspondientes
            //eval busca una variable que sea igual al valor del parametro indicado
            provincias = eval(valor);
            
            anyadir_provincias(provincias,select);

        }
    }
}

function anyadir_provincias(provincias,select){
    let options = select.getElementsByTagName("option");
    let anyadido = false;
    let pos = 0;

    for (let i = 0; i < provincias.length; i++) {
        pos = 0;
        while (!anyadido && pos < options.length) {
            //orden descendente
            if (provincias[i] > options.item(pos).textContent) {
                anyadido = true;
                //creo el nuevo nodo option de la select
                let newOption = document.createElement("option");
                //creo los nodos de texto
                let textOption=document.createTextNode(provincias[i]);
                //asigno los nodos texto a los nodos option correspondientes
                newOption.appendChild(textOption);
                //asigno el nodo option al nodo select
                select.insertBefore(newOption,options.item(pos));
            
            }
            pos++;
        }
        if (!anyadido) {
                //creo el nuevo nodo option de la select
                let newOption = document.createElement("option");
                //creo los nodos de texto
                let textOption=document.createTextNode(provincias[i]);
                //asigno los nodos texto a los nodos option correspondientes
                newOption.appendChild(textOption);
                //asigno el nodo option al nodo select
                select.appendChild(newOption);
                
        }
        //options = select.getElementsByTagName("option");
        anyadido = false;
    }
}

function borrar_options(select){
    //comprueba que mientras existe al menos un nodo hijo
    while (select.firstChild) {
        //borrara todos los nodos hijos
        select.removeChild(select.firstChild)
    }
    //devuelve la select sin nodos hijos
    return select;
}

