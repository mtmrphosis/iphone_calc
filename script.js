var sum1;
var sum2;
var symbol;

function numberZero() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck == "0" || zeroCheck == "-0") {
        let a = document.getElementById("results").value = "";
        document.getElementById("results").innerHTML = a;
        let b = document.getElementById("results").value = +0;
        document.getElementById("results").innerHTML += b;
    } else {
        let b = document.getElementById("results").value = +0;
        document.getElementById("results").innerHTML += b;
    }
}

function numberOne() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck == "0" || zeroCheck == "-0") {
        let a = document.getElementById("results").value = "";
        document.getElementById("results").innerHTML = a;
        let b = document.getElementById("results").value = +1;
        document.getElementById("results").innerHTML += b;
    } else {
        let b = document.getElementById("results").value = +1;
        document.getElementById("results").innerHTML += b;
    }
}

function numberTwo() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck == "0" || zeroCheck == "-0") {
        let a = document.getElementById("results").value = "";
        document.getElementById("results").innerHTML = a;
        let b = document.getElementById("results").value = +2;
        document.getElementById("results").innerHTML += b;
    } else {
        let b = document.getElementById("results").value = +2;
        document.getElementById("results").innerHTML += b;
    }
}

function numberThree() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck == "0" || zeroCheck == "-0") {
        let a = document.getElementById("results").value = "";
        document.getElementById("results").innerHTML = a;
        let b = document.getElementById("results").value = +3;
        document.getElementById("results").innerHTML += b;
    } else {
        let b = document.getElementById("results").value = +3;
        document.getElementById("results").innerHTML += b;
    }
}

function numberFour() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck == "0" || zeroCheck == "-0") {
        let a = document.getElementById("results").value = "";
        document.getElementById("results").innerHTML = a;
        let b = document.getElementById("results").value = +4;
        document.getElementById("results").innerHTML += b;
    } else {
        let b = document.getElementById("results").value = +4;
        document.getElementById("results").innerHTML += b;
    }
}

function numberFive() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck == "0" || zeroCheck == "-0") {
        let a = document.getElementById("results").value = "";
        document.getElementById("results").innerHTML = a;
        let b = document.getElementById("results").value = +5;
        document.getElementById("results").innerHTML += b;
    } else {
        let b = document.getElementById("results").value = +5;
        document.getElementById("results").innerHTML += b;
    }
}

function numberSix() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck == "0" || zeroCheck == "-0") {
        let a = document.getElementById("results").value = "";
        document.getElementById("results").innerHTML = a;
        let b = document.getElementById("results").value = +6;
        document.getElementById("results").innerHTML += b;
    } else {
        let b = document.getElementById("results").value = +6;
        document.getElementById("results").innerHTML += b;
    }
}

function numberSeven() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck == "0" || zeroCheck == "-0") {
        let a = document.getElementById("results").value = "";
        document.getElementById("results").innerHTML = a;
        let b = document.getElementById("results").value = +7;
        document.getElementById("results").innerHTML += b;
    } else {
        let b = document.getElementById("results").value = +7;
        document.getElementById("results").innerHTML += b;
    }
}

function numberEight() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck == "0" || zeroCheck == "-0") {
        let a = document.getElementById("results").value = "";
        document.getElementById("results").innerHTML = a;
        let b = document.getElementById("results").value = +8;
        document.getElementById("results").innerHTML += b;
    } else {
        let b = document.getElementById("results").value = +8;
        document.getElementById("results").innerHTML += b;
    }
}

function numberNine() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck == "0" || zeroCheck == "-0") {
        let a = document.getElementById("results").value = "";
        document.getElementById("results").innerHTML = a;
        let b = document.getElementById("results").value = +9;
        document.getElementById("results").innerHTML += b;
    } else {
        let b = document.getElementById("results").value = +9;
        document.getElementById("results").innerHTML += b;
    }
}

function clearButton() {
    let a = document.getElementById("results").value = 0;
    document.getElementById("results").innerHTML = a;
}

function numberFloat() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck.includes(".")) {
        console.log("already floated")
    } else {
        let a = document.getElementById("results").value = ".";
        document.getElementById("results").innerHTML += a;
    }
}

function onePercent() {

    let zeroCheck = document.getElementById("results").textContent;
    let promejytok = (zeroCheck / 100).toPrecision(2);
    let a = document.getElementById("results").value = promejytok;
    document.getElementById("results").innerHTML = a;
}

function plus() {
    symbol = '+';
    sum1 = document.getElementById("results").textContent;
    let a = document.getElementById("results").value = "";
    document.getElementById("results").innerHTML = a;
}

function minus() {
    symbol = '-';
    sum1 = document.getElementById("results").textContent;
    let a = document.getElementById("results").value = "";
    document.getElementById("results").innerHTML = a;
}

function divide() {
    symbol = '÷';
    sum1 = document.getElementById("results").textContent;
    let a = document.getElementById("results").value = "";
    document.getElementById("results").innerHTML = a;
}

function multiply() {
    symbol = '×';
    sum1 = document.getElementById("results").textContent;
    let a = document.getElementById("results").value = "";
    document.getElementById("results").innerHTML = a;
}

function equal() {
    sum2 = document.getElementById("results").textContent;
    if (symbol === "+") {
        let a = document.getElementById("results").value = +sum1 + +sum2;
        if (sum1.includes(".") || sum2.includes(".")) {
            document.getElementById("results").innerHTML = a.toFixed(4);
        } else {
            document.getElementById("results").innerHTML = a.toFixed(0);
        }
    } else if (symbol === '-') {
        sum2 = sum2.replace('-', '');
        let a = document.getElementById("results").value = Number(sum1 - sum2);
        if (sum1.includes(".") || sum2.includes(".")) {
            document.getElementById("results").innerHTML = a.toFixed(4);
        } else {
            document.getElementById("results").innerHTML = a.toFixed(0);
        }
    } else if (symbol === '×') {
        let a = document.getElementById("results").value = Number(sum1 * sum2);
        if (sum1.includes(".") || sum2.includes(".")) {
            document.getElementById("results").innerHTML = a.toFixed(4);
        } else {
            document.getElementById("results").innerHTML = a.toFixed(0);
        }
    } else if (symbol == '÷') {
        let a = document.getElementById("results").value = Number(sum1 / sum2);
        if (sum1.includes(".") || sum2.includes(".") || sum1 < sum2) {
            document.getElementById("results").innerHTML = a.toFixed(4);
        } else {
            document.getElementById("results").innerHTML = a;
        }
    }
    sum1 = '';
    sum2 = '';
    symbol = '';
}


function countMinus() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck.includes("-")) {
        let b = document.getElementById("results").value = zeroCheck.replace('-', '');
        document.getElementById("results").innerHTML = b;
    } else {
        let a = document.getElementById("results").value = `-${zeroCheck}`;
        document.getElementById("results").innerHTML = a;
    }
}
