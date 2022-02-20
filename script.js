// Write your JavaScript code here!
try{ const {myFetch} = require("./scriptHelper.js");
} catch(error) {}


window.addEventListener("load", function() {

    let form = document.querySelector("form");


    //when working with Angela we put ".value", after all of pilot thru cargoLevel, to get the user input, but now going thru and console logging them, they're blank becuase on the window load they are not inputed by the user yet, but because they are const, i can't reassign them as new variables?, I just don't know hwo I know that theses are working
    // const document = window.document
    // const container = document.getElementById("launchStatusCheck");
    const myDoc = document;
    const list = document.getElementById("faultyItems");
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass]");
    // const h2 = document.getElementById("launchStatus");
    let missionTarget = document.getElementById("missionTarget");

    // missionTarget.innerHTML += `
    //     <h2>Mission Destination</h2>
    //         <ol>
    //             <li>Name: Trial</li>
    //             <li>Diameter: Trial</li>
    //             <li>Star: Trial</li>
    //             <li>Distance from Earth: Trial</li>
    //             <li>Number of Moons: Trial</li>
    //         </ol>
    //     `;
    // console.log(missionTarget.innerHTML);

    // console.log(container);
    // console.log(container.innerHTML);

    list.style.visibility = "hidden";
    // container.style.visibility = "hidden";



    form.addEventListener("submit", function (event){
        
        list.style.visibility = "hidden";
        // container.style.visibility = "hidden";

        // working with formSubmission function here we use the event prevent default
        event.preventDefault();

        validate(pilot.value, copilot.value, Number(fuelLevel.value), Number(cargoLevel.value));


        event.preventDefault();

        if (validate(pilot.value, copilot.value, Number(fuelLevel.value), Number(cargoLevel.value)) !== "Validated"){
            console.log("not valid");
            list.style.visibility = "hidden";

        }else{
            console.log("run formSubmission function")
            list.style.visibility = "hidden";
            // container.style.visibility = "hidden";
            formSubmission(myDoc, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        }

        // list.style.visibility = "hidden";
        // container.style.visibility = "hidden";
        // formSubmission(window.document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);

    })



   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()


   let listedPlanetsResponse = myFetch();


   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       // call pickPlanet() function 1st
    //    pickPlanet(listedPlanets);
    //    console.log(pickPlanet(listedPlanets));
       const chosenPlanet = pickPlanet(listedPlanets);
    
       // call addDestination info with the array from the pickPlanet function
       console.log(chosenPlanet.name);
    
       addDestinationInfo(missionTarget, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);

   });

});