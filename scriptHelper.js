// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
    let document = document.getElementById("missionTarget");
    document.innerHtml = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `
}

function validateInput(testInput) {
    if (isNaN(testInput)){
        return "Not a number"; 
    } else if (testInput === ""){
        return "Empty";
    } else if (!isNaN(testInput)){
        return 'Is a Number'
    };
}
// document stands for the for and list for the "faulty items" (the items aren't passing the Shuttle Requirements)
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == 
    "Empty"){
        alert("All Fields are Required.");
    }else if (validateInput(fuelLevel) == "Not a number" || validateInput(cargoLevel) == "Not a number"){
        alert ("Please enter a Number for Fuel Level and Cargo Mass.");
    }

    else{
        return "Validated";
    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json)){
            // call addDestinationInfo function or call pickPlanet Function?
        }        
});

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.round(((planets.length-1)/10) * Math.round(Math.random()*10))
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
