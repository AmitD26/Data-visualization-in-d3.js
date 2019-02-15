function fnOverall() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnOverall").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 0) {
        drawBarChart(overall, +noOfBins);
    }
    else if (chartType == 1) {
        drawPieChart(overall, +noOfBins);
    }
}

function fnBalance() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnBalance").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 0) {
        drawBarChart(balance, +noOfBins);
    }
    else if (chartType == 1) {
        drawPieChart(balance, +noOfBins);
    }
}

function fnStamina() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnStamina").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 0) {
        drawBarChart(stamina, +noOfBins);
    }
    else if (chartType == 1) {
        drawPieChart(stamina, +noOfBins);
    }
}

function fnStrength() {
    document.getElementsByClassName("active")[0].className = "";
    document.getElementById("btnStrength").className = "active";
    noOfBins = document.getElementById("slider").value;
    document.getElementById("mysvg").innerHTML = "";
    if (chartType == 0) {
        drawBarChart(strength, +noOfBins);
    }
    else if (chartType == 1) {
        drawPieChart(strength, +noOfBins);
    }
}

var overall = [];
var balance = [];
var strength = [];
var stamina = [];

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

