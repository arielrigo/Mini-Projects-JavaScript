const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function islampBroken() {
    return lamp.src.indexOf ('quebrada') > -1
}


function lampOn() {
    if (!islampBroken() ) {
        lamp.src = './images/ligada.png';
    }   
}

function lampOff() {
    if (!islampBroken () ) {
    lamp.src = './images/desligada.png';
    }
}

function quebrar() {
    lamp.src = './images/quebrada.jpg';
    console.log('quebro vei')
}

turnOn.addEventListener ('click' , lampOn)
turnOff.addEventListener ('click' , lampOff)
lamp.addEventListener ( 'mouseover' , lampOn)
lamp.addEventListener ( 'mouseleave' , lampOff)
lamp.addEventListener('dblclick' , quebrar)