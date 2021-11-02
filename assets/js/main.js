function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}

let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

// let timer = 0;
// let timerFunc;

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
    // timerFunc =     setInterval(()=>{
    //     timer++;
    //     relogio.innerHTML = timerIntoTime(timer);
    // }, 1000);

})

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');
    // relogio.style.color = 'red';
})

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos=0;
    relogio.classList.remove('pausado');

    // relogio.style.color = 'black';
})

// function timerIntoTime (counter) {
//     let str = '00:00:00';
//     if(counter<10) return `00:00:0${counter}`;
//     if(counter<60) return `00:00:${counter}`;
//     if(counter<36000 && counter%60<10) return `00:0${Math.floor(counter/60)}:0${counter%60}`;
//     if(counter<36000) return `00:0${Math.floor(counter/60)}:${counter%60}`;
    
// }