function fnOverall() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnOverall").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(overall, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(overall, +noOfBins);
    }
}

function fnBalance() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnBalance").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(balance, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(balance, +noOfBins);
    }
}

function fnStamina() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnStamina").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(stamina, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(stamina, +noOfBins);
    }
}

function fnStrength() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnStrength").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(strength, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(strength, +noOfBins);
    }
}

function fnHeadingAccuracy() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnHeadingAccuracy").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(headingAccuracy, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(headingAccuracy, +noOfBins);
    }
}

function fnShortPassing() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnShortPassing").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(shortPassing, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(shortPassing, +noOfBins);
    }
}

function fnLongPassing() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnLongPassing").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(longPassing, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(longPassing, +noOfBins);
    }
}

function fnDribbling() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnDribbling").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(dribbling, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(dribbling, +noOfBins);
    }
}

function fnBallControl() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnBallControl").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(ballControl, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(ballControl, +noOfBins);
    }
}

function fnAcceleration() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnAcceleration").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(acceleration, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(acceleration, +noOfBins);
    }
}

function fnSprintSpeed() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnSprintSpeed").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(sprintSpeed, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(sprintSpeed, +noOfBins);
    }
}

function fnAgility() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnAgility").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(agility, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(agility, +noOfBins);
    }
}

function fnShotPower() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnShotPower").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(shotPower, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(shotPower, +noOfBins);
    }
}

function fnAggression() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnAggression").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(aggression, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(aggression, +noOfBins);
    }
}

function fnJumping() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnJumping").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(jumping, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(jumping, +noOfBins);
    }
}

function fnVision() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnVision").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(vision, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(vision, +noOfBins);
    }
}

function fnComposure() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnComposure").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(composure, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(composure, +noOfBins);
    }
}

function fnStandingTackle() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnStandingTackle").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(standingTackle, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(standingTackle, +noOfBins);
    }
}


function fnSlidingTackle() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnComposure").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 1) {
        drawPieChart(slidingTackle, +noOfBins);
    }
    else {
        chartType = 0;
        drawBarChart(slidingTackle, +noOfBins);
    }
}


var overall = [];
var balance = [];
var strength = [];
var stamina = [];
var headingAccuracy = [];
var shortPassing = [];
var longPassing = [];
var dribbling = [];
var ballControl = [];
var acceleration = [];
var sprintSpeed = [];
var agility = [];
var shotPower = [];
var aggression = [];
var jumping = [];
var vision = [];
var composure = [];
var standingTackle = [];
var slidingTackle = [];

// console.log(overall);

d3.csv("data.csv", function(csvdata) {
    // fl = 0;
    csvdata.map(function (d) {
        // if (fl == 0) {
        //     console.log(typeof +d.Overall)
        // }
        // fl = 1
        // if(fl==0){
        // console.log(+eval(d.overall))}
        // fl=1;
        // console.log(+eval(d.overall))

        // if (!isNaN(d.overall)) {
        overall.push(+d.Overall);
        balance.push(+d.Balance);
        strength.push(+d.Strength);
        stamina.push(+d.Stamina);
        headingAccuracy.push(+d.HeadingAccuracy);
        shortPassing.push(+d.ShortPassing);
        longPassing.push(+d.LongPassing);
        dribbling.push(+d.Dribbling);
        ballControl.push(+d.BallControl);
        acceleration.push(+d.Acceleration);
        sprintSpeed.push(+d.SprintSpeed);
        agility.push(+d.Agility);
        shotPower.push(+d.ShotPower);
        aggression.push(+d.Aggression);
        jumping.push(+d.Jumping);
        vision.push(+d.Vision);
        composure.push(+d.Composure);
        standingTackle.push(+d.StandingTackle);
        slidingTackle.push(+d.SlidingTackle);


        // }
        // if (!isNaN(d.ST)) {
        //     ST.push(+d.ST);
        // }
        // if (!isNaN(d.RS)) {
        //     RS.push(+d.RS);
        // }
        // if (!isNaN(d.LW)) {
        //     LW.push(+d.LW);
        // }
    });
    drawBarChart(overall, 10);
});
// console.log(overall);

