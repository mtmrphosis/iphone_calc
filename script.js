
function numberZero() {
    let zeroCheck = document.getElementById("results").textContent;
    if (zeroCheck == "0") {
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
    if (zeroCheck == "0") {
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
    if (zeroCheck == "0") {
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
    if (zeroCheck == "0") {
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
    if (zeroCheck == "0") {
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
    if (zeroCheck == "0") {
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
    if (zeroCheck == "0") {
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
    if (zeroCheck == "0") {
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
    if (zeroCheck == "0") {
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
    if (zeroCheck == "0") {
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
    let promejytok = zeroCheck / 100;
    let a = document.getElementById("results").value = promejytok;
    document.getElementById("results").innerHTML = a;
}   