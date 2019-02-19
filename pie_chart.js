function drawPieChart(data, noOfBins) {
    document.getElementById("mySliderContainer").style.visibility = "visible";

    var binSize = (d3.max(data) - d3.min(data))/noOfBins;

    var binValArray = Array.apply(null, Array(noOfBins)).map(Number.prototype.valueOf,0);
    data.forEach(function (d) {
        binValArray[Math.floor((d - d3.min(data))/binSize)]++;
    });

    var min = d3.min(data);
    var binValues = [];
    for(var i = 0; i < noOfBins; i++){
        var end = (+min + +binSize).toFixed(1);
        binValues.push(min + "-" + end);
        min = end;
    }

    var svg = d3.select("svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;

    svg.append("text")
        .attr("transform", "translate(300,0)")
        .attr("x", 50)
        .attr("y", 50)
        .attr("font-size", "24px")

    binValArray.pop();
    var radius = Math.min(width, height) / 2 + 50;

    var color = d3.scaleOrdinal().range(d3.schemeCategory20);
    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var arcBig = d3.arc()
        .outerRadius(radius + 10)
        .innerRadius(0);

    var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d; });

    var svg = d3.select("svg")
        .append("g")
        .attr("transform", "translate(" + 0.50 * width + "," + 0.90 * height + ")");

    var renderArcs = svg.selectAll(".arc")
        .data(pie(binValArray))
        .enter().append("g")
        .attr("class", "arc");

    renderArcs.append("path")
        .attr("d", arc)
        .style("fill", function(d, i) {
            return color(i);
        })

        .on("mouseover", function(d,i) {
            d3.select(this)
                .transition().duration(400)
                .attr("d", arcBig)
                .attr("stroke", "black")
            d3.selectAll("text").each(function (d, currI) {
                if (currI-1 === i) {
                    d3.select(this).style("visibility", "visible");
                }
            })
        })

        .on("mouseout", function(d,i) {
            d3.select(this)
                .transition().duration(1000)
                .attr("d",arc);

            d3.selectAll("text").each(function (d, currI) {
                if (currI-1 === i) {
                    d3.select(this).style("visibility", "hidden");
                }
            })
        });

    renderArcs.on("click", function() {
        chartType = 2;
        document.getElementById("mysvg").innerHTML = "";
        document.getElementById("mySliderContainer").style.visibility = "hidden";
        drawForceDirectedLayout(data, noOfBins);
    });

    renderArcs.append("text")
        .attr("transform", function(d) {
            return "translate(" + labelArc.centroid(d) + ")";
        })
        .attr("dy", ".35em")
        .text(function(d) {
            return d.value;
        })
        .style("font-weight", "bold")
        .style("font-size", "14px")
        .style("visibility", "hidden");

}