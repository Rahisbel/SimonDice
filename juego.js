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
		//el bind ata el this
		this.elegirColor = this.elegirColor.bind(this)
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
		this.agregarEventosClick()
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

	agregarEventosClick(){	// el bind ata el this: this.elegirColor.bind(this)
		this.colores.azul.addEventListener('click',this.elegirColor)
		this.colores.violeta.addEventListener('click',this.elegirColor)
		this.colores.rosa.addEventListener('click',this.elegirColor)
		this.colores.verde.addEventListener('click',this.elegirColor)
	}

	elegirColor(ev){
		//console.log(ev), target me indica cuál boton ha sido presionado
		//console.log(this) boton al que se llama, dispara el evento. Para que tenga la misma funcionalidad que ev, se utiliza el .bind()

			
	}


} // fin de la clase juego


function empezarJuego(){
	window.juego = new Juego()
}

