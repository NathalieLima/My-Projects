<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>Contador de Cliques</title>
<link rel="stylesheet" href="style.css">
<script>
	function insereTexto(){
		var oi = document.getElementById('divTeste').innerHTML = 'Você clicou no primeiro botão.';
}

		//console.log(event.target);


		var botao = document.getElementById("divTeste");
		botao.addEventListener("click", function(event) {
				console.log(event.target); // este é o elemento clicado
				alert('O elemento clicado foi o ' + e.target.innerHTML);
</script>
</head>
<body>

<button onclick="insereTexto()">Botão 1</button>
<button>Botão 2</button>
<button>Botão 3</button>
<button>Botão 4</button>

<!-- select de emyle-->




<div id="divTeste"> </div>





</body>
</html>




<script>

var i = 0;

while (i < 10){
	document.write("Boa noite</br>");
	i++;

}

</script>



button{
	padding: 30px;
	border-radius: 10px;
	border: 5px solid;
	font-weight: bold;
}
