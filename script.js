// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");


window.addEventListener("load", function() {

    let form = document.querySelector("form");


    //when working with Angela we put ".value", after all of pilot thru cargoLevel, to get the user input, but now going thru and console logging them, they're blank becuase on the window load they are not inputed by the user yet, but because they are const, i can't reassign them as new variables?, I just don't know hwo I know that theses are working
    const list = document.getElementById("faultyItems");
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass]");

    const launchStatus = document.getElementById("launchStatus")


    form.addEventListener("submit", function (event){
        
        // working with formSubmission function here we use the event prevent default
        event.preventDefault();


        formSubmission("document", list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        

        if (Number(fuelLevel.value) < 10000 ){
            console.log("Fuel Level low");
            list.style.visibility = "visible";
            list.innerHTML = `
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">${pilot.value}</li>
                    <li id="copilotStatus" data-testid="copilotStatus">${copilot.value}</li>
                    <li id="fuelStatus" data-testid="fuelStatus">There is not enough fuel for the journey.</li>
                    <li id="cargoStatus" data-testid="cargoStatus">${cargoLevel.value} kg</li>
                </ol>
            `;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
        }
        if (Number(cargoLevel.value) > 10000){
            console.log("Cargo Mass too high");
            list.style.visibility = "visible";
            list.innerHTML = `
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">${pilot.value}</li>
                    <li id="copilotStatus" data-testid="copilotStatus">${copilot.value}</li>
                    <li id="fuelStatus" data-testid="fuelStatus">${fuelLevel.value} liters</li>
                    <li id="cargoStatus" data-testid="cargoStatus">There is too much mass for the shuttle to take off.</li>
                </ol>
            `;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
        }

        if (Number(cargoLevel.value) > 10000 && Number(cargoLevel.value) > 10000){
            console.log("Cargo Mass too high");
            list.style.visibility = "visible";
            list.innerHTML = `
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">${pilot.value}</li>
                    <li id="copilotStatus" data-testid="copilotStatus">${copilot.value}</li>
                    <li id="fuelStatus" data-testid="fuelStatus">There is not enough fuel for the journey.</li>
                    <li id="cargoStatus" data-testid="cargoStatus">There is too much mass for the shuttle to take off.</li>
                </ol>
            `;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
        }
        
        if (Number(cargoLevel.value) < 10000 && Number(cargoLevel.value) < 10000 && formSubmission("document", list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value) === "Validated"){
            console.log("update Html elements here for ordered list.");
            console.log(list);
            list.style.visibility = "visible";
            list.innerHTML = `
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">${pilot.value}</li>
                    <li id="copilotStatus" data-testid="copilotStatus">${copilot.value}</li>
                    <li id="fuelStatus" data-testid="fuelStatus">${fuelLevel.value} liters</li>
                    <li id="cargoStatus" data-testid="cargoStatus">${cargoLevel.value} kg</li>
                </ol>
            `;
            launchStatus.innerHTML = `Shuttle is ready for launch`;    
            launchStatus.style.color = "green";
        }




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
   })
   
});