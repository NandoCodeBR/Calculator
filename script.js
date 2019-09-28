
var res = document.querySelector('p')

function soma(num1, num2){
    var num1 = parseFloat(document.querySelector('#fn').value)
    var num2 = parseFloat(document.querySelector('#sn').value)
    res.innerHTML= num1 + num2
}
function sub(num1, num2){
    var num1 = parseFloat(document.querySelector('#fn').value)
    var num2 = parseFloat(document.querySelector('#sn').value)
    res.innerHTML = num1 - num2
}
function mult(num1, num2){
    var num1 = parseFloat(document.querySelector('#fn').value)
    var num2 = parseFloat(document.querySelector('#sn').value)
    res.innerHTML = num1 * num2
}
function div(num1, num2){
    var num1 = parseFloat(document.querySelector('#fn').value)
    var num2 = parseFloat(document.querySelector('#sn').value)
    res.innerHTML = num1 / num2
}
