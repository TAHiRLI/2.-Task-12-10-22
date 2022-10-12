

function getNumber(message) {
    let n;
    do {
        n = prompt(message);
        if (isNaN(n))
            alert("eded daxil edin");
    } while (isNaN(n)  || n <=0);
    return parseInt(n);
}
const plus = function (array) {
    let result = 0;
    array.forEach(num => {
        result += num;
    });
    return result.toFixed(2);
};
const minus = function (array) {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        result -= array[i];        
    }
    return result.toFixed(2);
};
const multiply = function (array) {
    let result = 1;
    array.forEach(num => {
        result *= num;
    });
    return result.toFixed(2);
};
const divide = function (array) {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        result /= array[i];        
    }
    return result.toFixed(2);
};

const inputs = [];


let n = getNumber("Nece eded daxil edilecek ?");

for (let i = 0; i < n; i++) {
    inputs.push(getNumber(`${i + 1}. Eded `));
}



let opt;

do {

    opt = prompt(" + - * / proseslerinden birini secin !");

} while (opt != '+' && opt != '-' && opt != '*' && opt != '/');

switch (opt) {
    case '+':
        alert(plus(inputs));
        break;

    case '-':
        alert(minus(inputs));
        break;

    case '*':
        alert(multiply(inputs));
        break;

    case '/':
        console.log('fghgj');
        alert(divide(inputs));
        break;

    default:
        alert("Dogru Secim Edin !!!");
        break;
}
