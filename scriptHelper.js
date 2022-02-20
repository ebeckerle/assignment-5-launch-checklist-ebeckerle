// Write your helper functions here!

try{ require('isomorphic-fetch'); } catch(error) {}


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
    // let missionTarget = document.getElementById("missionTarget");

    document.innerHTML += `
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
    // if (typeof name === "string"){
    //     console.log("name is a string");

    // console.log(missionTarget);
    // console.log(document);
    // };
    
    console.log(missionTarget);
    console.log(document);

    console.log(moons + name);
}

function validateInput(testInput) {
    if (isNaN(testInput)){
        return "Not a Number"; 
    } else if (testInput === ""){
        return "Empty";
    } else if (!isNaN(testInput)){
        return 'Is a Number'
    };
};

function validate(pilot, copilot, fuelLevel, cargoLevel){
    if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == 
        "Empty"){
        alert("All Fields are Required.");
    }else if (validateInput(fuelLevel) == "Not a Number" || validateInput(cargoLevel) == "Not a Number"){
        alert ("Please enter a Number for Fuel Level and Cargo Mass.");
    }else{
        return "Validated";
        }
}

// document stands for the for and list for the "faulty items" (the items aren't passing the Shuttle Requirements)
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    

    list.style.visibility = "hidden";
    // console.log(document.innerHTML);
    // console.log(document.getElementsByTagName("h2"))

    let h2HtmlCollection = document.getElementsByTagName("h2");
    let h2 = h2HtmlCollection.namedItem("launchStatus");
    // console.log(h2);
    // console.log(h2.innerHTML);
    // let h2 = document.getElementById("launchStatus");

    if (fuelLevel < 10000 && cargoLevel < 10000){
        console.log("Fuel Level low");
        list.style.visibility = "visible";
        list.innerHTML = `
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                <li id="fuelStatus" data-testid="fuelStatus">There is not enough fuel for the journey.</li>
                <li id="cargoStatus" data-testid="cargoStatus">${cargoLevel} kg</li>
            </ol>
        `;
        h2.innerHTML = `Shuttle Not Ready for Launch`;
        console.log(h2.innerHTML);
        h2.style.color = 'rgb(199, 37, 78)';
        // let pilotStatus = document.getElementById("pilotStatus");
        // console.log(pilotStatus.innerHTML);
        // return document;
        document.load();
    } else if (cargoLevel > 10000 && fuelLevel >= 10000){
        console.log("Cargo Mass too high");
        list.style.visibility = "visible";
        list.innerHTML = `
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                <li id="fuelStatus" data-testid="fuelStatus">${fuelLevel} liters</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch.</li>
            </ol>
        `;
        h2.innerHTML = `Shuttle Not Ready for Launch`;
        h2.style.color = 'rgb(199, 37, 78)';
    } else if (cargoLevel > 10000 && fuelLevel < 10000){
                console.log("Cargo Mass too high and Fuel Level low");
                list.style.visibility = "visible";
                list.innerHTML = `
                    <ol>
                        <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                        <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                        <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
                        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>
                    </ol>
                `;
                h2.innerHTML = `Shuttle Not Ready for Launch`;
                h2.style.color = 'rgb(199, 37, 78)';
    } else if (fuelLevel > 10000 && cargoLevel < 10000 && validate(pilot, copilot, fuelLevel, cargoLevel) === "Validated"){
        console.log("Launch Checklist when everything is good to go.");
                console.log(list);
                list.style.visibility = "visible";
                list.innerHTML = `
                    <ol>
                        <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                        <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                        <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                    </ol>
                `;
                h2.innerHTML = `Shuttle is Ready for Launch`;    
                h2.style.color = 'rgb(65, 159, 106)';
    } else {
        list.style.visibility = 'hidden';
    }


}

async function myFetch() {
    let planetsReturned;

    
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( response => response.json()).then(data => {
            console.log(data);
            console.log(data[1]);
            return data;
        })
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.round(((planets.length-1)/10) * Math.round(Math.random()*10))
    return planets[index];
}

try { module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
} catch(error) {}
