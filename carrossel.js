let currentquimica = 0;

function showquimica(index) {
    const quimica = document.querySelector('.carousel-quimica');
    const quimica2 = document.querySelectorAll('.quimica-item');
    const totalquimica2 = quimica2.length;

    currentquimica = (index + totalquimica2) % totalquimica2; // Garante que o índice seja circular
    quimica.style.transform = `translateX(-${currentquimica * 100}%)`;
}

function nextquimica() {
    showquimica(currentquimica + 1);
}

function prevquimica() {
    showquimica(currentquimica - 1);
}

let currentbiologia = 0;

function showbiologia(index) {
    const biologia = document.querySelector('.carousel-biologia');
    const biologia2 = document.querySelectorAll('.biologia-item');
    const totalbiologia2 = biologia2.length;

    currentbiologia = (index + totalbiologia2) % totalbiologia2; // Garante que o índice seja circular
    biologia.style.transform = `translateX(-${currentbiologia * 100}%)`;
}

function nextbiologia() {
    showbiologia(currentbiologia + 1);
}

function prevbiologia() {
    showbiologia(currentbiologia - 1);
}

let currentfisica = 0;

function showfisica(index) {
    const fisica = document.querySelector('.carousel-fisica');
    const fisica2 = document.querySelectorAll('.fisica-item');
    const totalfisica2 = fisica2.length;

    currentfisica = (index + totalfisica2) % totalfisica2; // Garante que o índice seja circular
    fisica.style.transform = `translateX(-${currentfisica * 100}%)`;
}

function nextfisica() {
    showfisica(currentfisica + 1);
}

function prevfisica() {
    showfisica(currentfisica - 1);
}
let currentiot1 = 0;

function showiot1(index) {
    const iot1 = document.querySelector('.carousel-iot1');
    const iot12 = document.querySelectorAll('.iot1-item');
    const totaliot12 = iot12.length;

    currentiot1 = (index + totaliot12) % totaliot12; // Garante que o índice seja circular
    iot1.style.transform = `translateX(-${currentiot1 * 100}%)`;
}

function nextiot1() {
    showiot1(currentiot1 + 1);
}

function previot1() {
    showiot1(currentiot1 - 1);
}

let currentiot2 = 0;

function showiot2(index) {
    const iot2 = document.querySelector('.carousel-iot2');
    const iot22 = document.querySelectorAll('.iot2-item');
    const totaliot22 = iot22.length;

    currentiot2 = (index + totaliot22) % totaliot22; // Garante que o índice seja circular
    iot2.style.transform = `translateX(-${currentiot2 * 100}%)`;
}

function nextiot2() {
    showiot2(currentiot2 + 1);
}

function previot2() {
    showiot2(currentiot2 - 1);
}

let currentiot3 = 0;

function showiot3(index) {
    const iot3 = document.querySelector('.carousel-iot3');
    const iot32 = document.querySelectorAll('.iot3-item');
    const totaliot32 = iot32.length;

    currentiot3 = (index + totaliot32) % totaliot32; // Garante que o índice seja circular
    iot3.style.transform = `translateX(-${currentiot3 * 100}%)`;
}

function nextiot3() {
    showiot3(currentiot3 + 1);
}

function previot3() {
    showiot3(currentiot3 - 1);
}

let currentiot4 = 0;

function showiot4(index) {
    const iot4 = document.querySelector('.carousel-iot4');
    const iot42 = document.querySelectorAll('.iot4-item');
    const totaliot42 = iot42.length;

    currentiot4 = (index + totaliot42) % totaliot42; // Garante que o índice seja circular
    iot4.style.transform = `translateX(-${currentiot4 * 100}%)`;
}

function nextiot4() {
    showiot4(currentiot4 + 1);
}

function previot4() {
    showiot4(currentiot4 - 1);
}

let currentiot5 = 0;

function showiot5(index) {
    const iot5 = document.querySelector('.carousel-iot5');
    const iot52 = document.querySelectorAll('.iot5-item');
    const totaliot52 = iot52.length;

    currentiot5 = (index + totaliot52) % totaliot52; // Garante que o índice seja circular
    iot5.style.transform = `translateX(-${currentiot5 * 100}%)`;
}

function nextiot5() {
    showiot5(currentiot5 + 1);
}

function previot5() {
    showiot5(currentiot5 - 1);
}
let currenthistoria = 0;
function showhistoria(index) {
    const historia = document.querySelector('.carousel-historia');
    const historiaItems = document.querySelectorAll('.historia-item');
    const totalhistoria = historiaItems.length;
    currenthistoria = (index + totalhistoria) % totalhistoria;
    historia.style.transform = `translateX(-${currenthistoria * 100}%)`;
}
function nexthistoria() { showhistoria(currenthistoria + 1); }
function prevhistoria() { showhistoria(currenthistoria - 1); }

let currentsociologia = 0;
function showsociologia(index) {
    const sociologia = document.querySelector('.carousel-sociologia');
    const sociologiaItems = document.querySelectorAll('.sociologia-item');
    const totalsociologia = sociologiaItems.length;
    currentsociologia = (index + totalsociologia) % totalsociologia;
    sociologia.style.transform = `translateX(-${currentsociologia * 100}%)`;
}
function nextsociologia() { showsociologia(currentsociologia + 1); }
function prevsociologia() { showsociologia(currentsociologia - 1); }

let currentmatematica = 0;
function showmatematica(index) {
    const matematica = document.querySelector('.carousel-matematica');
    const matematicaItems = document.querySelectorAll('.matematica-item');
    const totalmatematica = matematicaItems.length;
    currentmatematica = (index + totalmatematica) % totalmatematica;
    matematica.style.transform = `translateX(-${currentmatematica * 100}%)`;
}
function nextmatematica() { showmatematica(currentmatematica + 1); }
function prevmatematica() { showmatematica(currentmatematica - 1); }

let currentgeografia = 0;
function showgeografia(index) {
    const geografia = document.querySelector('.carousel-geografia');
    const geografiaItems = document.querySelectorAll('.geografia-item');
    const totalgeografia = geografiaItems.length;
    currentgeografia = (index + totalgeografia) % totalgeografia;
    geografia.style.transform = `translateX(-${currentgeografia * 100}%)`;
}
function nextgeografia() { showgeografia(currentgeografia + 1); }
function prevgeografia() { showgeografia(currentgeografia - 1); }

let currentportugues = 0;
function showportugues(index) {
    const portugues = document.querySelector('.carousel-portugues');
    const portuguesItems = document.querySelectorAll('.portugues-item');
    const totalportugues = portuguesItems.length;
    currentportugues = (index + totalportugues) % totalportugues;
    portugues.style.transform = `translateX(-${currentportugues * 100}%)`;
}
function nextportugues() { showportugues(currentportugues + 1); }
function prevportugues() { showportugues(currentportugues - 1); }

let currentingles = 0;
function showingles(index) {
    const ingles = document.querySelector('.carousel-ingles');
    const inglesItems = document.querySelectorAll('.ingles-item');
    const totalingles = inglesItems.length;
    currentingles = (index + totalingles) % totalingles;
    ingles.style.transform = `translateX(-${currentingles * 100}%)`;
}
function nextingles() { showingles(currentingles + 1); }
function previngles() { showingles(currentingles - 1); }

let currentartes = 0;
function showartes(index) {
    const artes = document.querySelector('.carousel-artes');
    const artesItems = document.querySelectorAll('.artes-item');
    const totalartes = artesItems.length;
    currentartes = (index + totalartes) % totalartes;
    artes.style.transform = `translateX(-${currentartes * 100}%)`;
}
function nextartes() { showartes(currentartes + 1); }
function prevartes() { showartes(currentartes - 1); }
let currentedfisica = 0;
function showedfisica(index) {
    const edfisica = document.querySelector('.carousel-edfisica');
    const edfisicaItems = document.querySelectorAll('.edfisica-item');
    const totaledfisica = edfisicaItems.length;
    currentedfisica = (index + totaledfisica) % totaledfisica;
    edfisica.style.transform = `translateX(-${currentedfisica * 100}%)`;
}
function nextedfisica() { showedfisica(currentedfisica + 1); }
function prevedfisica() { showedfisica(currentedfisica - 1); }
let currentfilosofia = 0;
function showfilosofia(index) {
    const filosofia = document.querySelector('.carousel-filosofia');
    const filosofiaItems = document.querySelectorAll('.filosofia-item');
    const totalfilosofia = filosofiaItems.length;
    currentfilosofia = (index + totalfilosofia) % totalfilosofia;
    filosofia.style.transform = `translateX(-${currentfilosofia * 100}%)`;
}
function nextfilosofia() { showfilosofia(currentfilosofia + 1); }
function prevfilosofia() { showfilosofia(currentfilosofia - 1); }
let currentestatistica = 0;
function showestatistica(index) {
    const estatistica = document.querySelector('.carousel-estatistica');
    const estatisticaItems = document.querySelectorAll('.estatistica-item');
    const totalestatistica = estatisticaItems.length;
    currentestatistica = (index + totalestatistica) % totalestatistica;
    estatistica.style.transform = `translateX(-${currentestatistica * 100}%)`;
}
function nextestatistica() { showestatistica(currentestatistica + 1); }
function prevestatistica() { showestatistica(currentestatistica - 1); }
