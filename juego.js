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
		this.generarSecuencia()
	}

	inicializar(){
		btnEmpezar.classList.add('hide')
		this.nivel = 1
		this.colores = {
			azul,
			violeta,
			rosa,
			verde
		}
	}

	generarSecuencia(){
		this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
	}
 }

function empezarJuego(){
	window.juego = new Juego()
}

