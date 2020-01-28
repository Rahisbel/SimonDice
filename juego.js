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
		this.siguienteNivel()
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

	siguienteNivel(){
		this.iluminarSecuencia()
	}

	transformarNumeroAColor(numero){
		switch(numero){
			case 0 : 
				return 'azul'
			case 1 : 
				return 'violeta'
			case 2 : 
				return 'rosa'
			case 3 : 
				return 'verde'
		}
	}

	iluminarSecuencia(){
	// en los ciclos for se recomienda usar let
		for (let i = 0; i < this.nivel; i++) {
			const color = this.transformarNumeroAColor(this.secuencia[i])
			setTimeout(()=> this.iluminarColor(color),1000*i)
		}
	} 

	iluminarColor(color){
		this.colores[color] .classList.add('claro')
		setTimeout(() => this.apagarColor(color),350)
	}

	apagarColor(color){
		this.colores[color].classList.remove('claro')
	}
}


function empezarJuego(){
	window.juego = new Juego()
}

