const botao = document.querySelector('[data-botao]');


function calcularMedia(){
	var nota1 = document.querySelector('[data-nota-1]').value;
	var nota2 = document.querySelector('[data-nota-2]').value;
	var nota3 = document.querySelector('[data-nota-3]').value;
	var nota4 = document.querySelector('[data-nota-4]').value;
	var mediaParaPassar = document.querySelector('[data-input-media]').value;
		
	var somaDasNotas = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
	var numeroDeNotasAnuais = 4;
	var media = somaDasNotas / numeroDeNotasAnuais;
	var mediaRedonda = media.toFixed(1);
	var mediaParaPassarReescrita = parseFloat(mediaParaPassar);

	if(mediaRedonda >= mediaParaPassarReescrita){
	  alert("Sua média é " + mediaRedonda + " Parabéns! :)");
	}
	else{
	  alert("ops...sua média é " + mediaRedonda + "  :(");
	}
}



botao.addEventListener('click', () => {calcularMedia()});