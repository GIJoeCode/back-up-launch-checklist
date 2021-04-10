// Write your JavaScript code here!
window.addEventListener("load",function(){
  const json = fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
    response.json().then(function(json){
      // console.log(response);

      const div =document.getElementById("missionTarget");
      div.innerHTML = `<h2>Mission Destination</h2>
      <ol>
          <li>Name: ${json[0].name}</li>
          <li>Diameter: ${json[0].diameter}</li>
          <li>Star: ${json[0].star}</li>
          <li>Distance from Earth: ${json[0].distance}</li>
          <li>Number of Moons: ${json[0].moons}</li>
      </ol>
      <img src="${json[0].image}">`
    });
  });
  let form = document.querySelector("form");


  form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("hello")
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
      
      
    if (pilotName.value ==="" ||copilotName.value ===""  || fuelLevel.value ===""|| cargoMass.value===""){
      alert("All fields are required");
    } else if(!isNaN(pilotName.value) || !isNaN(copilotName.value)){
      alert("Please Enter a name for Pilot and Co-Pilot");
    } else if(isNaN(fuelLevel.value)||isNaN(cargoMass.value)){
      alert("Please enter a number for Fule level and Cargo mass");
    } else { 
      document.getElementById("pilotStatus").innerHTML = "Pilot: " + pilotName.value + " Ready";
      document.getElementById("copilotStatus").innerHTML = "Co-pilot " + copilotName.value + " Ready"

      if ( fuelLevel.value < 10000){
        document.getElementById("faultyItems").style.visibility = "visible"
        document.getElementById("fuelStatus").innerHTML = ( "Not enough fuel for the journey")
        document.getElementById("launchStatus").innerHTML = ("Shutle not ready for launch")
        document.getElementById("launchStatus").style.color = "red"
      } else {
        document.getElementById("fuelStatus").innerHTML = ( "Enough fuel for the journey")
      }

      if (cargoMass.value > 10000){
        document.getElementById("faultyItems").style.visibility = "visible"
        document.getElementById("cargoStatus").innerHTML = ( "There is too much mass for the shuttle to take off")
        document.getElementById("launchStatus").innerHTML = ("Shutle not ready for launch")
        document.getElementById("launchStatus").style.color = "red"
      } else {
        document.getElementById("cargoStatus").innerHTML = ( "Enough mass for the shuttle to take off")
      }

      if (fuelLevel.value >= 10000 && cargoMass.value <= 10000){
        document.getElementById("faultyItems").style.visibility = "visible"
        document.getElementById("launchStatus").innerHTML = ( "Shuttle is ready for launch!")
        document.getElementById("launchStatus").style.color = "green"
      }
    }
   });
});

