
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
	
"<ul>"
+    "<li><a href='https://github.com/sergiomele97/Apuntes_Perl_Biotecnologia/blob/main/Algoritmos_geneticos/AlgoritmoGenetico.pl' target='_blank'>Desarrollo de algoritmos genéticos</a></li>"
+    "<li><a href='https://github.com/sergiomele97/Apuntes_Perl_Biotecnologia/blob/main/Redes_neuronales/perceptron_simple.pl' target='_blank'>Modelización de bajo nivel de redes neuronales simples</a></li>"
+    "<li><a href='https://github.com/sergiomele97/Apuntes_Perl_Biotecnologia/blob/main/Bioinformatica/Ejercicio%208.cgi' target='_blank'>Procesamiento de información biológica</a></li>"
+    "<li>Desarrollo de aplicaciones de consola</li>"
+    "<li>Implementación de herramientas bioinformáticas</li>"
+ "</ul>";	
    break;

// Default ---------------------------//
		default:
    // code block
	}
	
	document.getElementById("contenido-variable").innerHTML = displayed_html;
}