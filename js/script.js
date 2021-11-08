//Prima parte esercizio
//Punto Uno: creare modale che si apre dopo dieci secondi

function showModal() {
    setTimeout(() => {
       modal.style.display = "block";
    }, 10000);
}

function hideModal() {
    modal.style.display = "none";
}

const modal = document.querySelector("#modal");
const closeBtn = document.querySelector('#btn-accept');

document.addEventListener("DOMContentLoaded", showModal, {once:true});
closeBtn.addEventListener('click', hideModal);

//Punto due: 
const solarSystem = [
    { name: "Sun", radius: 696340, surface: "star" },
    { name: "Mercury", radius: 2440, surface: "terrestrial" },
    { name: "Venus", radius: 6052, surface: "terrestrial" },
    { name: "Earth", radius: 6371, surface: "terrestrial" },
    { name: "Mars", radius: 3389, surface: "terrestrial" },
    { name: "Jupiter", radius: 69911, surface: "gas giant" },
    { name: "Saturn", radius: 58232, surface: "gas giant" },
    { name: "Uranus", radius: 25362, surface: "ice giant" },
    { name: "Neptune", radius: 24622, surface: "ice giant" },
  ];