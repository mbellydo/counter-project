// Tu código aquí
let buttonAdd = document.querySelector('.nextBtn')
let buttonLow = document.querySelector('.prevBtn')

buttonAdd.onclick = addCount
buttonLow.onclick = lowCount

let contador = document.querySelector('#counter').innerHTML

function addCount() {
    let count = contador;
    let countNum = parseInt(count, 10);

    let countAdded = document.querySelector("#counter").innerHTML = countNum + 1;

    contador = countAdded;
    return changeColor();
}

function lowCount() {
    let count = contador;
    let countNum = parseInt(count, 10);

    let countAdded = document.querySelector("#counter").innerHTML = countNum - 1;

    contador = countAdded;
    return changeColor();
}

function changeColor() { 
    if (contador < 0) {
        if (document.querySelector("#counter").classList.contains('zeroCounter') || document.querySelector("#counter").classList.contains('positiveCounter')) {
            document.querySelector("#counter").classList.remove("zeroCounter");
            document.querySelector("#counter").classList.remove("positiveCounter");
        } else {
            document.querySelector("#counter").classList.add("negativeCounter");
        }
    } else if (contador == 0) {
        if (document.querySelector("#counter").classList.contains('negativeCounter') || document.querySelector("#counter").classList.contains('positiveCounter')) {
            document.querySelector("#counter").classList.remove("negativeCounter");
            document.querySelector("#counter").classList.remove("positiveCounter");
        } else {
            document.querySelector("#counter").classList.add("zeroCounter");
        }
    } else { 
        if (document.querySelector("#counter").classList.contains('negativeCounter') || document.querySelector("#counter").classList.contains('zeroCounter')) {
            document.querySelector("#counter").classList.remove("negativeCounter");
            document.querySelector("#counter").classList.remove("zeroCounter");
        } else {
            document.querySelector("#counter").classList.add("positiveCounter");
        } 
    }
}