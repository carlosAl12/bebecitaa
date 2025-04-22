const sectionSeleccionarAtaque = document.getElementById("seleccionar_ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const sectionpelea = document.getElementById("pelea");
const informacionCombate=document.getElementById('infoCombate')
const jugadorVidas = document.getElementById("jugadorVidas");
const sectionSeleccionarMascota = document.getElementById("seleccionar_mascota");
const spanMascotaEnemigo = document.getElementById('mascotaEnemigo');
const EnemigoVidas = document.getElementById("EnemigoVidas");
const spanMascotaJugador = document.getElementById('mascotaJugador');
const spanVidasJugador = document.getElementById('jugadorVidas');
const spanVidasEnemigo = document.getElementById('EnemigoVidas');
const sectionMensaje = document.getElementById('resultado');
const ataqueDelJugador = document.getElementById('ataqueDelJugador');
const ataqueDelEnemigo = document.getElementById('ataqueDelEnemigo');
const sectionMensajes = document.getElementById('mensajes');
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const contenedorAtaques = document.getElementById('contenedorAtaques');
const sectionVerMapa=document.getElementById('verMapa')
const mapa=document.getElementById('mapa')
const combate=document.getElementById('PeleaTotal')


let OpcionDeMokepones;
let mokepones = [];
let botonFuego ;
let botonTierra;
let botonAgua;
let ataquesMokeponEnemigo;
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let mascotaJugador;
let input1;
let mascotaJugadorObjeto;
let input2;
let input3;
let ataquesMokepon;
let ataqueEnemigo =[];
let VidasEnemigo = 3;
let VidasJugador = 3;
let victoriasJugador=0;
let victoriasEnemigo=0;
let botones=[];
let ataquesJugador=[];
let lienzo=mapa.getContext('2d');
let intervalo;
let mapaBackground = new Image()
mapaBackground.src='imagen/mokemap-ca51ea18-7ac8-492f-be96-6181d766a99d.webp'


class Mokepon {
    constructor(nombre, foto, vida,fotoMapa,x=10,y=10) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.x=x 
        this.y=y
        this.ancho=50
        this.alto=50
        this.mapaFoto=new Image()
        this.mapaFoto.src= fotoMapa
        this.velocidadx=0
        this.velocidady=0
    }
    pintarMokepon(){
    lienzo.drawImage(
        this.mapaFoto,
        this.x,
        this.y,
        this.ancho,
        this.alto)
}
}

let hipoge = new Mokepon('hipoge', './imagen/hipodoge1.png', 5,'imagen/hipodoge.png');
let capipepo = new Mokepon('capipepo', './imagen/capipepo1.png', 5,'imagen/capipepo.png');
let ratigueya = new Mokepon('ratigueya', './imagen/ratigueya1.png', 5,'imagen/ratigueya.png');

let hipogeEnemigo = new Mokepon('hipoge', './imagen/hipodoge1.png', 5, 'imagen/hipodoge.png', 150, 170);
let capipepoEnemigo = new Mokepon('capipepo', './imagen/capipepo1.png', 5, 'imagen/capipepo.png', 230, 300);
let ratigueyaEnemigo = new Mokepon('ratigueya', './imagen/ratigueya1.png', 5, 'imagen/ratigueya.png', 200, 105);


hipoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' }
);

capipepo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' }
);

ratigueya.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }
);

hipogeEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' }
);

capipepoEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' }
);

ratigueyaEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }
);

mokepones.push(hipoge, ratigueya, capipepo);

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none';
    sectionVerMapa.style.display='none'

    mokepones.forEach((Mokepon) => {
        OpcionDeMokepones = `
            <input type="radio" id="${Mokepon.nombre}" name="mascota">
            <label class="tarjetaPokepon" for="${Mokepon.nombre}">
                <p>${Mokepon.nombre}</p>
                <img src="${Mokepon.foto}" alt="${Mokepon.nombre}">
            </label>
        `;
        contenedorTarjetas.innerHTML += OpcionDeMokepones;
    });

    input1 = document.getElementById('hipoge');
    input2 = document.getElementById('capipepo');
    input3 = document.getElementById('ratigueya');

    sectionpelea.style.display = 'none';
    jugadorVidas.style.display = 'none';
    EnemigoVidas.style.display = 'none';
    sectionReiniciar.style.display = 'none';

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

   sectionReiniciar.addEventListener('click', reiniciarJuego);

   unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/Unirse")
    .then(function(res){
        console.log(res)
        if (res.ok){
            res.text()
                .then(function(respuesta){
                    console.log(respuesta)
                })
        }
    })

}

function seleccionarMascotaJugador() {
    //sectionSeleccionarAtaque.style.display = 'flex';
    sectionSeleccionarMascota.style.display = 'none';
    //EnemigoVidas.style.display = 'flex';
    //jugadorVidas.style.display = 'flex';
    //sectionpelea.style.display = 'flex';
    sectionVerMapa.style.display='flex';
    spanMascotaJugador.style.display='none';
    spanMascotaEnemigo.style.display='none'
    iniciarMapa()
  

    if (input1.checked) {
        spanMascotaJugador.innerHTML = input1.id;
        mascotaJugador=input1.id
    } else if (input2.checked) {
        spanMascotaJugador.innerHTML = input2.id;
        mascotaJugador=input2.id
    } else if (input3.checked) {
        spanMascotaJugador.innerHTML = input3.id;
        mascotaJugador=input3.id
    } else {
        alert("Selecciona una mascota");
        return;
    }

    spanVidasJugador.innerHTML = VidasJugador;
    spanVidasEnemigo.innerHTML = VidasEnemigo;
    iniciarMapa()

}

function extraerAtaques(mascotaJugador) {
    let ataques = []; // Inicializar como un array vacío
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = ataques.concat(mokepones[i].ataques); // Combinar arrays correctamente
        }
    }
    iniciarMapa();
    mostrarAtaques(ataques); // Mostrar los ataques de la mascota seleccionada
}

function seleccionarMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML = enemigo.nombre;
    ataquesMokeponEnemigo = enemigo.ataques;
    extraerAtaques(mascotaJugador);
    secuenciaAtaque();

}

function mostrarAtaques(ataques) {
    // Limpiar el contenedor antes de mostrar nuevos ataques
    contenedorAtaques.innerHTML = ''; 

    ataques.forEach((ataque) => {
        const ataquesMokepon = `<button class="ataques BAtaque" id="${ataque.id}">${ataque.nombre}</button>`;
        contenedorAtaques.innerHTML += ataquesMokepon;
    });
    botonFuego=document.getElementById('boton-fuego');
    botonTierra= document.getElementById('boton-tierra');
    botonAgua= document.getElementById('boton-agua');
    botones=document.querySelectorAll('.BAtaque')


}

function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e)=> {
            if(e.target.textContent === "🔥"){
                ataquesJugador.push('FUEGO')
                boton.style.background='#112f58'
                boton.disabled=true
            }else if(e.target.textContent === "💧"){
                ataquesJugador.push('AGUA')
                boton.style.background='#112f58'   
                boton.disabled=true  
            }else{
                ataquesJugador.push('TIERRA')
                boton.style.background='#112f58' 
                boton.disabled=true 
            }
            ataqueAleatorioEnemigo()
        })
    })
    
} 


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1);
    if(ataqueAleatorio==0 || ataqueAleatorio==1){
        ataqueEnemigo.push('FUEGO')
    }else if((ataqueAleatorio==3||ataqueAleatorio==4)){
        ataqueEnemigo.push('AGUA')
    }else{
        ataqueEnemigo.push('TIERRA')
    }
    
    iniciarPelea()

}

function iniciarPelea(){
    if (ataquesJugador.length===5){
        combates() 
    }
}

function indexAmbosOponente(jugador,enemigo){
    indexAtaqueJugador=ataquesJugador[jugador]
    indexAtaqueEnemigo=ataqueEnemigo[enemigo]
}

function combates() {
    for (let i= 0; i< ataquesJugador.length; i++) {
        if(ataquesJugador[i]===ataqueEnemigo[i]){
            indexAmbosOponente(i,i)
            crearMensajeCombate("EMPATE");  
            spanVidasJugador.innerHTML= victoriasJugador         
        }else if(ataquesJugador[i]==='FUEGO'&& ataqueEnemigo[i]==='TIERRA'){
            indexAmbosOponente(i,i)
            crearMensajeCombate("GANASTE");  
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador  
        }else if(ataquesJugador[i]==='AGUA'&& ataqueEnemigo[i]==='FUEGO'){   indexAmbosOponente(i,i)
            crearMensajeCombate("GANASTE");  
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador 

        }else if(ataquesJugador[i]==='TIERRA'&& ataqueEnemigo[i]==='AGUA'){
            crearMensajeCombate("GANASTE");  
            victoriasJugador++
            spanVidasJugador.innerHTML= victoriasJugador 
        }
        else{
            indexAmbosOponente(i,i)
            crearMensajeCombate("PERDISTE");  
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }    
        
    }
    revisarVidas();
}

function revisarVidas() {
    if (victoriasJugador===victoriasEnemigo) {
        mensajeFinal("Esto fue un empate!!");
        sectionMensaje.innerHTML = "EMPATE"
    } else if (victoriasJugador> victoriasEnemigo) {
        mensajeFinal("ganaste perrota ")
        sectionMensaje.innerHTML = "GANASTE"
    }else{
        mensajeFinal("💀 Perdiste el combate, será en la próxima.");
        sectionMensaje.innerHTML = "PERDISTE"
    }
}

function crearMensajeCombate(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);

    sectionMensaje.innerHTML = resultado;
}

function mensajeFinal(resultado) {
    sectionReiniciar.style.display = 'block';
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultado;
    sectionMensajes.appendChild(parrafo);
}


function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function PintarCanvas(){

    mascotaJugadorObjeto.x=mascotaJugadorObjeto.x +mascotaJugadorObjeto.velocidadx
    mascotaJugadorObjeto.y=mascotaJugadorObjeto.y +mascotaJugadorObjeto.velocidady
    lienzo.clearRect(0,0,mapa.clientWidth,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipogeEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    if (mascotaJugadorObjeto.velocidadx!==0||mascotaJugadorObjeto.velocidady!==0){
        revisarColision(hipogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
    }
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadx=5
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadx=-5
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidady=5
}
function moverArriba(){
    mascotaJugadorObjeto.velocidady=-5
}
function detenerMovimiento(){
    clearInterval(intervalo)
    mascotaJugadorObjeto.velocidadx=0
    mascotaJugadorObjeto.velocidady=0

}

function sePrecionoUnaTecla(event){
    switch(event.key){
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
                break;
        case 'ArrowRight':
            moverDerecha()
            break;    
    }
}

function iniciarMapa(){
    mapa.width=400
    mapa.height=500
    mascotaJugadorObjeto=obtenerObjetoMascota(mascotaJugador)
    intervalo=setInterval(PintarCanvas,50)

    window.addEventListener('keydown',sePrecionoUnaTecla)
    window.addEventListener('keyup',detenerMovimiento)
}
function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i] // Combinar arrays correctamente
        }
    }
}
// Función de colisión corregida
function revisarColision(enemigo) {
    const izquierdaEnemigo = enemigo.x;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;

    const izquierdaMascota = mascotaJugadorObjeto.x;
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const arribaMascota = mascotaJugadorObjeto.y;
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;

    // Lógica AABB corregida (usar && en lugar de ||)
    if (
        derechaMascota > izquierdaEnemigo &&
        izquierdaMascota < derechaEnemigo &&
        abajoMascota > arribaEnemigo &&
        arribaMascota < abajoEnemigo
    ) {
        detenerMovimiento();
        clearInterval(intervalo);
        sectionVerMapa.style.display = "none";
        sectionpelea.style.display = "flex";
        alert(`¡Combate con ${enemigo.nombre}!`);
        return true;
    }
    return false;
}

// Actualizar PintarCanvas para manejar colisiones
// Función de colisión corregida
function revisarColision(enemigo) {
    const izquierdaEnemigo = enemigo.x;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;

    const izquierdaMascota = mascotaJugadorObjeto.x;
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const arribaMascota = mascotaJugadorObjeto.y;
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;

    // Lógica AABB corregida (usar && en lugar de ||)
    if (
        derechaMascota > izquierdaEnemigo &&
        izquierdaMascota < derechaEnemigo &&
        abajoMascota > arribaEnemigo &&
        arribaMascota < abajoEnemigo
    ) {
        detenerMovimiento();
        clearInterval(intervalo);
        sectionVerMapa.style.display = "none";
        sectionpelea.style.display = "flex";
        alert(`¡Combate con ${enemigo.nombre}!`);
        return true;
    }
    return false;
}

// Actualizar PintarCanvas para manejar colisiones
// Función de colisión corregida
function revisarColision(enemigo) {
    const izquierdaEnemigo = enemigo.x;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;

    const izquierdaMascota = mascotaJugadorObjeto.x;
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const arribaMascota = mascotaJugadorObjeto.y;
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;

    if (
        derechaMascota > izquierdaEnemigo &&
        izquierdaMascota < derechaEnemigo &&
        abajoMascota > arribaEnemigo &&
        arribaMascota < abajoEnemigo
    ) {
        detenerMovimiento();
        sectionVerMapa.style.display='none';
        sectionSeleccionarAtaque.style.display='flex';
        EnemigoVidas.style.display = 'flex';
        jugadorVidas.style.display = 'flex';
        sectionpelea.style.display = 'flex';
        spanMascotaJugador.style.display='flex';
        spanMascotaEnemigo.style.display='flex'; 
        sectionReiniciar.style.display='flex'  
        seleccionarMascotaEnemigo (enemigo) 
        return true;
    }
    return false;
}
window.addEventListener('load', iniciarJuego);


