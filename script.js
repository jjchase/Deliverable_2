function infoFunction(){
    var vacationType = document.getElementById('vacationType').value;
    var groupSize = document.getElementById('groupSize').value;
    var destination; 

    if(vacationType==="musical"){
        (destination="New Orleans.");
    } else if(vacationType==="tropical"){
        (destination="a beach vacation in Mexico.")
    } else if(vacationType==="adventurous"){
        (destination="go whitewater rafting the Grand Canyon.")
    }

    var travel;

    if(groupSize<=2){
        (travel="first class")
    } else if(groupSize>=3 && groupSize<=5){
        (travel="helicopter")
    } else if(groupSize>=6){
        (travel="charter flight")
    }

    var result = "Since you chose a "+document.getElementById('vacationType').value
    +" vacation and have a group size of "+document.getElementById('groupSize').value
    +". We recommend that you travel by "+travel +" to " +destination;

    console.log(result);
    document.getElementById('suggestion').innerHTML = result;
}
