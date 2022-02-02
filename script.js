// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");


window.addEventListener("load", function() {

    // console.log("Hello harry");
    // console.log( { formSubmission } );

    let form = document.querySelector("form");



    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    form.addEventListener("submit", function (event){

        console.log(pilot.value);
        console.log(copilot.value);
        console.log(fuelLevel.value);
        console.log(cargoMass.value);

        alert("Are you ready to submit?");
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});