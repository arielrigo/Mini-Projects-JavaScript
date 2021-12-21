function Calcular() {
    let nome = document.getElementById('name').value
    let peso = Number(document.getElementById('weigth').value)
    let altura = Number(document.getElementById('heigth').value)
    let res = document.getElementById('secao')

    if (nome.value == '' ) {
        alert('Falta dados no campo "nome"!')
    } else if (peso.value == '') {
        alert('Falta dados no campo "peso"!')
    } else if (altura.value == '') {
        alert('Falta dados no campo "altura"!')
    }      
    
if (nome !== '' && peso !== '' && altura !== '') {   

    let calcIMC = (peso / (altura * altura))

    if (calcIMC < 18.5) {
        res.innerHTML = `${nome}, Seu IMC é de ${calcIMC.toFixed(2)} você está abaixo do peso`
    } else if (calcIMC < 25) {
        res.innerHTML = `${nome}, Seu IMC é de ${calcIMC.toFixed(2)} você está com o peso ideal`
    } else if (calcIMC < 30) {
        res.innerHTML = `${nome}, Seu IMC é de ${calcIMC.toFixed(2)} você está levemente acima da média`
    } else if (calcIMC < 35) {
        res.innerHTML = `${nome}, Seu IMC é de ${calcIMC.toFixed(2)} você está com obesidade grau I`
    } else if (calcIMC < 40) {
        res.innerHTML = `${nome}, Seu IMC é de ${calcIMC.toFixed(2)} você está com obesidade grau II`
    } else {
        res.innerHTML = `${nome}, Seu IMC é de ${calcIMC.toFixed(2)} você está com obesidade grau III`
    }
    }
}

