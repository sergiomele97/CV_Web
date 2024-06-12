
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

// Perl ------------------------------//
		case "Perl":
		displayed_html = 
	
"# <a href='https://github.com/sergiomele97/Apuntes_Perl_Biotecnologia/blob/main/Algoritmos_geneticos/AlgoritmoGenetico.pl'>Desarrollo de algoritmos genéticos</a>"
+ "<br># <a href='https://github.com/sergiomele97/Apuntes_Perl_Biotecnologia/blob/main/Redes_neuronales/perceptron_simple.pl'>Modelización de bajo nivel de redes neuronales simples</a>"
+ "<br># <a href='https://github.com/sergiomele97/Apuntes_Perl_Biotecnologia/blob/main/Bioinformatica/Ejercicio%208.cgi'>Procesamiento de información biológica</a>"
+ "<br># <a>Desarrollo de aplicaciones de consola</a>"
+ "<br># <a>Implementación de herramientas bioinformáticas</a>";	
    break;

// Default ---------------------------//
		default:
    // code block
	}
	
	document.getElementById("contenido-variable").innerHTML = displayed_html;
}