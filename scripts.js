// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landingBtn = document.getElementById("landing");
    let abortBtn = document.getElementById("missionAbort");
    let upBtn = document.getElementById("up");
    let downBtn = document.getElementById("down");
    let leftBtn = document.getElementById("left");
    let rightBtn = document.getElementById("right");
    let rocket = document.getElementById("rocket");
    rocket.style.position = 'absolute';
    //rocket.style.left = '0px';
    //rocket.style.bottom = '0px';
    //rocket.style.top = '0px';
    takeOff.addEventListener("click", function(){
    let confirmTakeOff = confirm("confirm that the shuttle is ready for takeoff");
    if(confirmTakeOff === true){
        flightStatus.innerHTML = "Shuttle in flight!";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = "10000";
    }});
    landingBtn.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
    });
    abortBtn.addEventListener("click", function(){
        let confirmAbort = confirm("Confirm that you want to abort the mission");
        if(confirmAbort === true){
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
        }
    });
    upBtn.addEventListener("click", function(){
        let placement = window.getComputedStyle(rocket);
        let topValue = placement.getPropertyValue("top").replace("px", "");
        rocket.style.top = (Number(topValue) - 10) + "px";
        // movement = parseInt(rocket.style.bottom) + 10;
        // rocket.style.bottom = movement + 'px';
        miles = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        spaceShuttleHeight.innerHTML = miles;
        console.log("pressed");
    });
    downBtn.addEventListener("click", function(){
        let placement = window.getComputedStyle(rocket);
        let topValue = placement.getPropertyValue("top").replace("px", "");
        rocket.style.top = (Number(topValue) + 10) + "px";
        // movement = parseInt(rocket.style.top) + 10;
        // rocket.style.top = movement + 'px';
        miles = parseInt(spaceShuttleHeight.innerHTML) - 10000;
        spaceShuttleHeight.innerHTML = miles;
    });
    rightBtn.addEventListener("click", function(){
        let placement = window.getComputedStyle(rocket);
        let leftValue = placement.getPropertyValue("left").replace("px", "");
        rocket.style.left = (Number(leftValue) + 10) + "px";
        // movement = parseInt(rocket.style.right) - 10;
        // rocket.style.right = movement + 'px';
        console.log("pressed right btn");
    });
    leftBtn.addEventListener("click", function(){
        let placement = window.getComputedStyle(rocket);
        let leftValue = placement.getPropertyValue("left").replace("px", "");
        rocket.style.left = (Number(leftValue) - 10) + "px";
        // movement = (parseInt(rocket.style.left) || 0) - 10;
        // rocket.style.left = movement + 'px';
        console.log("pressed left btn");
    });
});




