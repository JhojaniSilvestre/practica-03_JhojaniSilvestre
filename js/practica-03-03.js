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
    select = borrar_options(select); //devuelve la select sin nodos option
    /*--------------------------------------------------------------*/

    //obtengo el nodo de la select de comunidades autonomas
	let c_autonom = document.getElementById("c_autonom");
	//obtengo una collection con los option seleccionados
    let value_autonom = c_autonom.selectedOptions;
    let valor;
    //obtengo el value de los options seleccionados
    if (value_autonom.length > 0) {
        //recorro la colletion obteniendo el valor de cada indice
        for (let i = 0; i < value_autonom.length; i++) {
            valor = value_autonom[i].value;
            //compruebo el valor seleccionado para así crear los nodos correspondientes
            if (valor == "md") {
                anyadir_provincia(md,select);
            }
            else if (valor == "mc") {
                anyadir_provincia(mc,select);
            }
            else if (valor == "as") {
                anyadir_provincia(as,select);
            }
            else if (valor == "nc") {
                anyadir_provincia(nc,select);
            }
            else if (valor == "cb") {
                anyadir_provincia(cb,select);
            }
            else if (valor == "ri") {
                anyadir_provincia(ri,select);
            }
            else if (valor == "ib") {
                anyadir_provincia(ib,select);
            }
            else if (valor == "an") {
                anyadir_provincia(an,select);
            }
            else if (valor == "ar") {
                anyadir_provincia(ar,select);
            }
            else if (valor == "cn") {
                anyadir_provincia(cn,select);
            }
            else if (valor == "cm") {
                anyadir_provincia(cm,select);
            }
            else if (valor == "cl") {
                anyadir_provincia(cl,select);
            }
            else if (valor == "ct") {
                anyadir_provincia(ct,select);
            }
            else if (valor == "vc") {
                anyadir_provincia(vc,select);
            }
            else if (valor == "ex") {
                anyadir_provincia(ex,select);
            }
            else if (valor == "ga") {
                anyadir_provincia(ga,select);
            }
            else if (valor == "pv") {
                anyadir_provincia(pv,select);
            }

        }
    }
}

function anyadir_provincia(provincias,select){
    let options = select.getElementsByTagName("option");
    //falta ordenar descendente
    for (let i = 0; i < options.length; i++) {
        //esto recorre el array provincias a añadir
        for (let j = 0; j < provincias.length; j++) {
            //creo el nuevo nodo option de la select
            let newOption = document.createElement("option");
            //creo los nodos de texto
            let textOption=document.createTextNode(provincias[j]);
            //asigno los nodos texto a los nodos option correspondientes
            newOption.appendChild(textOption);
            //asigno el nodo option al nodo select
            select.appendChild(newOption);
        }  
        
    }
    if (palabra > todos.item(indice).textContent) {
    }
    else{

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

