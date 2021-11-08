//Prima parte esercizio
//Punto Uno: creare modale che si apre dopo dieci secondi

function showModal() {
    setTimeout(() => {
       modal.style.display = "block";
    }, 1000);
}

function hideModal() {
    modal.style.display = "none";
}

const modal = document.querySelector("#modal");
const closeBtn = document.querySelector('#btn-accept');

document.addEventListener("DOMContentLoaded", showModal, {once:true});
closeBtn.addEventListener('click', hideModal);

//Punto due: funzioni traduzione e calcolo del diametro
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

  const terrestrial = (planets) => planets.surface === "terrestrial";
  const smallPlanets = (planets) => planets.radius <= 3000;
  const stars = (planets) => planets.surface === "star";  
  const planetDiameter = (planets) => planets.radius * 2;
  //const planetNames = (planets) => planets.name
  //const translate = (planets, italianNames) => planets.name = italianNames;
  const italianNames = ["Sole", "Mercurio", "Venere" , "Terra", "Marte", "Giove", "Saturno", "Urano", "Nettuno"];


   const diameters = solarSystem.map(planetDiameter);

   const newNames= ((planet) => {
           switch (planet.name) {
            case "Sun":
                planet.name = italianNames[0]
               break;
            case "Mercury":
                planet.name = italianNames[1]
                break;
            case "Venus":
                planet.name = italianNames[2]
                break;
            case "Earth":
                planet.name = italianNames[3]
                break;
            case "Mars":
                planet.name = italianNames[4]
                break;
            case "Jupiter":
                planet.name = italianNames[5]
                break;
            case "Saturn":
                planet.name = italianNames[6]
                break;
            case "Uranus":
                planet.name = italianNames[7]
                break;
            case "Neptune":
                planet.name = italianNames[8]
                break;
            
       }
       return planet
   });
  
   const translate = solarSystem.map(newNames)

//Seconda parte esercizio: le scimmie assassine

function hideAll() {
    allTheContent.style.opacity = 0;
    modal.style.display = "none";
}
function showPanicModal() {
    setTimeout(() => {
        panicModal.style.display = "block";
     }, 5000);
}
function hidePanicModal() {
    panicModal.style.display = "none";
}

const printMonkeys = ((container, items) => {
    const elements = items.map((element) => `<h3>${element.name} ${element.surname} aka ${element.aka}</h3>`);
    const content = elements.join('');
    container.innerHTML = content;
});

function panicOnPage() {
    hideAll();
    showPanicModal();
    setTimeout(() => {
        hidePanicModal()
    }, 10000);
    setTimeout(() => {
        printMonkeys(showMonkeys,monkeysEquipe);
    }, 15000);
}


const panicBtn = document.querySelector('#btn-deny');
const allTheContent = document.querySelector('main');
const panicModal = document.querySelector("#modal-panic");
const showMonkeys = document.querySelector('#monkey')


panicBtn.addEventListener('click', panicOnPage);
