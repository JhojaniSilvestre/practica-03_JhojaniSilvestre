//cargo el documento
if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio(){
	let boton=document.getElementById("c_autonom");
    
    //cargo los eventos, por compatibilidad compruebo los dos
	if (document.addEventListener)
		boton.addEventListener("onchange",mostrarProvincias)
	else if (document.attachEvent)
		boton.attachEvent("onchange",mostrarProvincias);
}

function mostrarProvincias(){
    console.log("llegó a mostrar provincias");
	//obtengo el nodo de la select de comunidades autonomas
	let c_autonom = document.getElementById("c_autonom");
	//obtengo el valor del option seleccionado
	let value_autonom = c_autonom.options[c_autonom.selectedIndex].value;
    
    //creo los arrays con las provincias de cada comunidad autonoma
    let md = new Array("Madrid");
    let mc = new Array("Murcia");
    let as = new Array("Oviedo");
    let nc = new Array("Pamplona");
    let cb = new Array("Santander");
    let ri = new Array("Logroño");
    let ib = new Array("Palma de Mallorca");
    let an = new Array("Almería","Cádiz","Córdoba","Granada","Huelva","Jaén","Málaga","Sevilla");
    let ar = new Array("Huesca","Teruel","Zaragoza");
    let cn = new Array("Santa Cruz de Tenerife","La Palmas de Gran Canaria");
    let cm = new Array("Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo");
    let cl = new Array("Ávila","Burgos","León","Salamanca","Segovia","Soria","Valladolid","Zamora");
    let ct = new Array("Barcelona","Gerona","Lérida","Tarragona");
    let vc = new Array("Alicante","Castellón de la Plana","Valencia");
    let ex = new Array("Badajoz","Cáceres");
    let ga = new Array("La Coruña","Lugo","Orense","Pontevedra");
    let pv = new Array("Bilbao","San Sebastián","Vitoria");

    //obtengo el nodo de la select provincias
	let select = document.getElementById("provincias");

    /*--------------borrar nodos option de la select provincias ----*/
    //llamada a la funcion de borrar
    select = borrar_options(select); //devuelve la select sin nodos option
    /*--------------------------------------------------------------*/
    //eval busca una variable que sea igual al valor del parametro indicado
    let provincias = eval(value_autonom);
    
    anyadir_provincias(provincias,select);
}

function anyadir_provincias(provincias,select){
    for (let index = 0; index < provincias.length; index++) {
        //creo el nuevo nodo option de la select
        let newOption = document.createElement("option");
        //creo los nodos de texto
        let textOption=document.createTextNode(provincias[index]);
        //asigno los nodos texto a los nodos option correspondientes
        newOption.appendChild(textOption);
        //asigno el nodo option al nodo select
        select.appendChild(newOption);
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

/*
    //obtengo una coleccion con todos los nodos
	let options = select.getElementsByTagName("option");
    pos = options.length - 1;
    //alert(options.length);
    if (options.length > 0) {
        while (options.length > 0) {
            select.removeChild(options.item(pos));
            pos--;
        }
    }
    return select;
*/
}





