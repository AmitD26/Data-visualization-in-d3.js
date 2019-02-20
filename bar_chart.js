 function drawBarChart(data, noOfBins) {
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

    var x = d3.scaleBand().range([0, width]).padding(0.4);
    var y = d3.scaleLinear().range([height, 0]);

    var g = svg.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");


    x.domain(binValues);
    y.domain([0, d3.max(binValArray)]);


     g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(x))
         .append("text")
         .attr("y", height - 250)
         .attr("x", width/2)
         .attr("text-anchor", "middle")
         .attr("fill", "black")
         .attr("font-family", "sans-serif")
         .attr("font-size", "20px")
         .text("Bins");

    g.append("g")
        .call(d3.axisLeft(y).tickFormat(function(d){
            return  d;
        }).ticks(10))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 50)
        .attr("x", -140)
        .attr("dy", "-5.1em")
        .attr("text-anchor", "middle")
        .attr("fill", "black")
        .attr("font-family", "sans-serif")
        .attr("font-size", "20px")
        .text("Counts");

     g.append("g")
         .call(d3.axisLeft(y).tickFormat("").ticks(10).tickSizeInner(-width)).attr("class", "grid");

    g.selectAll(".bar")
        .data(binValues)
        .enter().append("rect")
        .attr("class", "bar")
        .on("mouseover", onMouseOver)
        .on("mouseout", onMouseOut)
        .on("click", onClick)
        .attr("x", function(d) { return x(d); })
        .attr("y", height)
        .attr("height", 0)
        .attr("width", x.bandwidth())
        .transition()
        .ease(d3.easeLinear)
        .duration(600)
        .delay(function (d, i) {
            return i * 50;
        })
        .attr("y", function(d, i) { return y(binValArray[i]); })
        .attr("height", function(d, i) { return height - y(binValArray[i]); });


    function onMouseOver(d, i) {
        d3.select(this).attr('class', 'highlight');
        d3.select(this)
            .transition()
            .duration(200)
            .attr('width', x.bandwidth() + 5)
            .attr("y", function() { return y(binValArray[i]) - 10; })
            .attr("height", function() { return height - y(binValArray[i]) + 10; });

        g.append("text")
            .attr('class', 'val')
            .attr('x', function() {
                return x(d);
            })
            .attr('y', function() {
                return y(binValArray[i]) - 15;
            })
            .text(function() {
                return [+binValArray[i]];
            });
    }

    function onMouseOut(d, i) {
        d3.select(this).attr('class', 'bar');
        d3.select(this)
            .transition()
            .duration(200)
            .attr('width', x.bandwidth())
            .attr("y", function() { return y(binValArray[i]); })
            .attr("height", function() { return height - y(binValArray[i]); });

        d3.selectAll('.val')
            .remove()
    }

    function onClick() {
        chartType = 1;
        document.getElementById("mysvg").innerHTML = "";
        drawPieChart(data, noOfBins);
    }
}