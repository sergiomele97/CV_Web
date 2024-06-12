
//------------------------ESPACIO PARA RELLENAR CON EXPERIENCIA-----------------------------------//
function display_conocimientos(tecnologia){
	
	let displayed_html;
	
	switch(tecnologia) {
		
// Python ----------------------------//		
		case "Python":
		displayed_html = 
	
"Funciona!!!";
	
    break;

// Java ------------------------------//
		case "Java":
		displayed_html = 
	
"Funciona!!!";
	
    break;

// Default ---------------------------//
		default:
    // code block
	}
	
	document.getElementById("contenido-variable").innerHTML = displayed_html;
}