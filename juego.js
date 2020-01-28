const btnEmpezar = document.getElementById('btnEmpezar')
const azul = document.getElementById('azul')
const violeta = document.getElementById('violeta')
const rosa = document.getElementById('rosa')
const verde = document.getElementById('verde')

btnEmpezar.addEventListener('click',function(){
	empezarJuego()
})

class Juego{

	constructor(){
		this.inicializar()
	}

	inicializar(){
		btnEmpezar.classList.add('hide')
	}
}


function empezarJuego(){
	var juego = new Juego()
}