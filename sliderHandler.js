function sliderHandler(value) {
    // var overall = [];
    // var ST = [];
    // var RS = [];
    // var LW = [];

    document.getElementById("sliderNumber").innerHTML = +value;
    // d3.csv("data.csv", function(csvdata) {
    //     // fl = 0;
    //     csvdata.map(function (d) {
    //         // if (fl == 0) {
    //         //     console.log(typeof +d.Overall)
    //         // }
    //         // fl = 1
    //         // if(fl==0){
    //         // console.log(+eval(d.overall))}
    //         // fl=1;
    //         // console.log(+eval(d.overall))
    //
    //         // if (!isNaN(d.overall)) {
    //         overall.push(+d.Overall);
    //         // }
    //         // if (!isNaN(d.ST)) {
    //         //     ST.push(+d.ST);
    //         // }
    //         // if (!isNaN(d.RS)) {
    //         //     RS.push(+d.RS);
    //         // }
    //         // if (!isNaN(d.LW)) {
    //         //     LW.push(+d.LW);
    //         // }
    //     });

        document.getElementsByClassName("active")[0].click();

    //     document.getElementById("mysvg").innerHTML = "";
    //     if (chartType == 0) {
    //         drawBarChart(overall, +value);
    //     }
    //     else if (chartType == 1) {
    //         drawPieChart(overall, +value);
    //     }
    // });
}