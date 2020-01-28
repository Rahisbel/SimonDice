const btnEmpezar = document.getElementById('btnEmpezar')
const azul = document.getElementById('azul')
const violeta = document.getElementById('violeta')
const rosa = document.getElementById('rosa')
const verde = document.getElementById('verde')
const ULTIMO_NIVEL = 5

btnEmpezar.addEventListener('click',function(){
	empezarJuego()
})

class Juego{

	constructor(){
		this.inicializar()
		this.generarSecuencia()
		setTimeout(this.siguienteNivel(),500)
	}

	inicializar(){
		//el bind ata el this
		this.inicializar = this.inicializar.bind(this)
		this.siguienteNivel = this.siguienteNivel.bind(this)
		this.elegirColor = this.elegirColor.bind(this)
		this.toggleBtnEmpezar()
		this.nivel = 1
		this.colores = {
			azul,
			violeta,
			rosa,
			verde
		}
	}

	toggleBtnEmpezar(){
		if(btnEmpezar.classList.contains('hide')){
			btnEmpezar.classList.remove('hide')
		}
		else{
			btnEmpezar.classList.add('hide')
		}
	}

	generarSecuencia(){
		this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4))
	}

	siguienteNivel(){
		this.subnivel = 0
		this.iluminarSecuencia()
		this.agregarEventosClick()
	}

	transformarNumeroAColor(numero){
		switch(numero){
			case 0 : return 'azul'
			case 1 : return 'violeta'
			case 2 : return 'rosa'
			case 3 : return 'verde'
		}
	}

	transformarColorANumero(color){
		switch(color){
			case 'azul': return 0
			case 'violeta': return 1
			case 'rosa': return 2
			case 'verde': return 3
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
		this.colores[color].classList.add('claro')
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

	eliminarEventosClick(){
		this.colores.azul.removeEventListener('click',this.elegirColor)
		this.colores.violeta.removeEventListener('click',this.elegirColor)
		this.colores.rosa.removeEventListener('click',this.elegirColor)
		this.colores.verde.removeEventListener('click',this.elegirColor)
	}

	elegirColor(ev){
		//console.log(ev), target me indica cuál boton ha sido presionado
		//console.log(this) boton al que se llama, dispara el evento. Para que tenga la misma funcionalidad que ev, se utiliza el .bind()
		const nombreColor = ev.target.dataset.color
		const numeroColor = this.transformarColorANumero(nombreColor)
		this.iluminarColor(nombreColor)
		if(numeroColor === this.secuencia[this.subnivel]){
			this.subnivel++
			if(this.subnivel === this.nivel){
				this.nivel++
				this.eliminarEventosClick()
				if(this.nivel === (ULTIMO_NIVEL+1)){
					this.ganoElJuego()
				}
				else{
					setTimeout(this.siguienteNivel,1500)
				}
			}
		}
		else{
			this.perdioElJuego()
		}	
	}

	ganoElJuego(){
		swal('Simón Dice','¡Felicitaciones! Ganaste el juego','success')
		.then(() => this.inicializar())
	}

	perdioElJuego(){
		swal('Simón Dice','¡Lo siento! Perdiste el juego','error')
		.then(() => {
			this.eliminarEventosClick()
			this.inicializar()
		})
	}


} // fin de la clase juego


function empezarJuego(){
	window.juego = new Juego()
}

