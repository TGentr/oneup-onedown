let upone = document.querySelector('#oneup');
let downone = document.querySelector('#onedown');
let liczbashow = document.querySelector('#liczba');

upone.addEventListener('click', dodaj);
downone.addEventListener('click', odejmij);

let liczbataka = 0;

function dodaj() {

liczbataka++;
liczbashow.innerHTML = liczbataka;
if(liczbashow.innerHTML>'0'){
    liczbashow.style.color ="red";
}
else if (liczbashow.innerHTML === '0'){
    liczbashow.style.color = "green";
}

}

function odejmij() {
    liczbataka--;
    liczbashow.innerHTML = liczbataka;
    if(liczbataka<0){
        liczbashow.style.color = "blue";
    }
    else if (liczbashow.innerHTML === '0'){
        liczbashow.style.color = "green";
    }
}
