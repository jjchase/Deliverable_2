function infoFunction(){
    var vacationInput = document.getElementById('vacationInput').value;
    var groupInput = document.getElementById('groupInput').value;
    var result = "Since you chose a "+document.getElementById('vacationInput').value
    +" vacation and have a group size of "+(document.getElementById('groupInput').value)
    +". We recommend that you travel by ";

if (document.getElementById('vacationInput').value === "Musical"
&& document.getElementById('groupInput').value === "1-2" ) {
    console.log(result+"First Class to New Orleans.");
    document.getElementById('suggestion').innerHTML = result +"First Class to New Orleans.";

} else if (document.getElementById('vacationInput').value === "Musical"
&& document.getElementById('groupInput').value === "3-5") {
    console.log(result+"Helicopter to New Orleans.");
    document.getElementById('suggestion').innerHTML = result +"Helicopter to New Orleans.";

} else if (document.getElementById('vacationInput').value === "Musical"+"Helicopter to New Orleans."
&& document.getElementById('groupInput').value === "6+") {
    console.log(result+"Charter Flight to New Orleans.");
    document.getElementById('suggestion').innerHTML = result +"Charter Flight to New Orleans.";

} else if (document.getElementById('vacationInput').value === "Tropical"
&& document.getElementById('groupInput').value === "1-2") {
    console.log(result+"First Class to a Beach Vacation in Mexico.");
    document.getElementById('suggestion').innerHTML = result +"First Class to a Beach Vacation in Mexico.";

} else if (document.getElementById('vacationInput').value === "Tropical"
&& document.getElementById('groupInput').value === "3-5") {
    console.log(result+"Helipcopter to a Beach Vacation in Mexico.");
    document.getElementById('suggestion').innerHTML = result +"Helipcopter to a Beach Vacation in Mexico.";

} else if (document.getElementById('vacationInput').value === "Tropical"
&& document.getElementById('groupInput').value === "6+") {
    console.log(result+"Charter Flight to a Beach Vacation in Mexico.");
    document.getElementById('suggestion').innerHTML = result +"Charter Flight to a Beach Vacation in Mexico.";

} else if (document.getElementById('vacationInput').value === "Adventurous"
&& document.getElementById('groupInput').value === "1-2") {
    console.log(result+"First Class to go Whitewater Rafting the Grand Canyon.");
    document.getElementById('suggestion').innerHTML = result +"First Class to go Whitewater Rafting the Grand Canyon.";

} else if (document.getElementById('vacationInput').value === "Adventurous"
&& document.getElementById('groupInput').value === "3-5") {
    console.log(result+"Helicopter to go Whitewater Rafting the Grand Canyon.");
    document.getElementById('suggestion').innerHTML = result +"Helicopter to go Whitewater Rafting the Grand Canyon.";

} else if (document.getElementById('vacationInput').value === "Adventurous"
&& document.getElementById('groupInput').value === "6+") {
    console.log(result+"Charter Flight to go Whitewater Rafting the Grand Canyon.");
    document.getElementById('suggestion').innerHTML = result +"Charter Flight to go Whitewater Rafting the Grand Canyon.";

 } else {
    return("invalid response");
 }
    }

    
 
