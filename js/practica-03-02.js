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

	//obtengo el nodo de la select de comunidades autonomas
	let c_autonom = document.getElementById("c_autonom");
	//obtengo el valor del option seleccionado
	let value_autonom = c_autonom.options[c_autonom.selectedIndex].value;

    //creo los arrays con las provincias de cada comunidad autonoma
    let md = "Madrid";
    let mc = "Murcia";
    let as = "Oviedo";
    let nc = "Pamplona";
    let cb = "Santander";
    let ri = "Logroño";
    let ib = "Palma de Mallorca";
    let an = Array("Almería","Cádiz","Córdoba","Granada","Huelva","Jaén","Málaga","Sevilla");
    let ar = Array("Huesca","Teruel","Zaragoza");
    let cn = Array("Santa Cruz de Tenerife","La Palmas de Gran Canaria");
    let cm = Array("Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo");
    let cl = Array("Ávila","Burgos","León","Salamanca","Segovia","Soria","Valladolid","Zamora");
    let ct = Array("Barcelona","Gerona","Lérida","Tarragona");
    let vc = Array("Alicante","Castellón de la Plana","Valencia");
    let ex = Array("Badajoz","Cáceres");
    let ga = Array("La Coruña","Lugo","Orense","Pontevedra");
    let pv = Array("Bilbao","San Sebastián","Vitoria");

    //compruebo el valor seleccionado para así crear los nodos correspondientes
    if (value_autonom == "md") {
        mostrarProvincia(md);
    }
    else if (value_autonom == "mc") {
        mostrarProvincia(mc);
    }
    else if (value_autonom == "as") {
        mostrarProvincia(as);
    }
    else if (value_autonom == "nc") {
        mostrarProvincia(nc);
    }
    else if (value_autonom == "cb") {
        mostrarProvincia(cb);
    }
    else if (value_autonom == "ri") {
        mostrarProvincia(ri);
    }
    else if (value_autonom == "ib") {
        mostrarProvincia(ib);
    }
    else if (value_autonom == "an") {
        mostrarProvincia(an);
    }
    else if (value_autonom == "as") {
        mostrarProvincia(as);
    }
    else if (value_autonom == "as") {
        mostrarProvincia(as);
    }
    else if (value_autonom == "as") {
        mostrarProvincia(as);
    }
    else if (value_autonom == "as") {
        mostrarProvincia(as);
    }
    else if (value_autonom == "as") {
        mostrarProvincia(as);
    }
    else if (value_autonom == "as") {
        mostrarProvincia(as);
    }


    




}

function mostrarProvincia(provincia){
    //obtengo el nodo de la select de comunidades autonomas
	let provincias = document.getElementById("provincias");

    //creo el nuevo nodo option de la select
    let newOption = document.createElement("option");
	//creo los nodos de texto
	let textOption=document.createTextNode(provincia);
    //asigno los nodos texto a los nodos option correspondientes
	newOption.appendChild(textOption);
    //asigno el nodo option al nodo select
	provincias.appendChild(newOption);

}