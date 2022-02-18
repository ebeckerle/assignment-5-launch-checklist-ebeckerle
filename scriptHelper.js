// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(list, name, diameter, star, distance, moons, imageUrl) {
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
    let missionTarget = document.getElementById("missionTarget");
    missionTarget = missionTarget.innerHtml += `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
    console.log(missionTarget);
    console.log(list);

    console.log(moons);
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
        // console.log(response);
        // console.log(json());
        //I think response.json() is right - a promise that parses a json into a JavaScript object.
        // response.json();
        // response.json().then(function(response){
        //     return response.json();
        // });
        // console.log(response.json());

        //this is GOOD!: getting just the data I believe in an Array (as far as I read the console),
        // but I get it twice, but I need to keep line 59 the same as it was given (thought maybe twice bc of the double .then 's)
        // response.json().then(data => {
        //     console.log(data);
        //     console.log(data[1]);
        //     // return data;
        // })

        return response.json()


        // console.log(Promise.resolve(response.json()));


        // response.json().then(function(json){
        //     // call addDestinationInfo function or call pickPlanet Function?
        //     // console.log(response);
        //     // console.log(json);
        //     // console.log(pickPlanet(json));

        //     // const randomPlanet = pickPlanet(json);
        //     // console.log(randomPlanet);
        //     // console.log(randomPlanet.name);

        //     // addDestinationInfo(randomPlanet, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.imageUrl);

        //     // return json;
        //     // pickPlanet(json);
        //     json;
        // });   
        // console.log(planetsReturned);
        // console.log(json);
    });
    // console.log(typeof planetsReturned);
    // console.log(typeof 10);
    // console.log(planetsReturned);

    // planetsReturned = planetsReturned.then(data => {
    //     console.log(data);
    //     return data;
    // });
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
