function greetUser(name){
    return 'hello '+name
}

function add(num1, num2){
    return num1+num2
}
function subtract(num1, num2){
    return num1-num2
}
function reverse(string){
    return string.split('').reverse().join('');
}

module.exports = {
    greetUser, add, reverse,subtract
}