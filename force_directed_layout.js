function drawForceDirectedLayout(data, noOfBins) {
    var nodes = [];
    var links = [];
    var count = 0;
    var flag = true;
    for (var i = 0; i < 5000; i+= 500) {
        nodes.push({id: count,
                    overall: overall[i],
                    balance: balance[i],
                    stamina: stamina[i],
                    strength: strength[i]});
        for (var j = 0; j < 5000; j+= 500) {
            if (i === j) {
                break;
            }
            if (flag) {
                links.push({
                    id: count,
                    source: i / 500,
                    target: j / 500,
                    distance: 4 * Math.sqrt(Math.pow((overall[j] - overall[i]), 2) + Math.pow((balance[j] - balance[i]), 2) + Math.pow((stamina[j] - stamina[i]), 2) + Math.pow((strength[j] - strength[i]), 2))
                });
                count++;
            }
            flag = !flag;
        }
    }

    var svg = d3.select("svg"),
        margin = 0,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;

    svg.append("text")
        .attr("transform", "translate(300,0)")
        .attr("x", 50)
        .attr("y", 50)
        .attr("font-size", "24px")

    var color = d3.scaleOrdinal().range(d3.schemeCategory10);

    var simulation = d3.forceSimulation()
        .nodes(nodes);

    var link_force =  d3.forceLink(links).distance(function (d) {
        return d.distance;
     });

    var charge_force = d3.forceManyBody()
        .strength(-100);

    var center_force = d3.forceCenter(width / 2, height / 2 + 50);

    simulation
        .force("charge_force", charge_force)
        .force("center_force", center_force)
        .force("links",link_force)
    ;

    simulation.on("tick", tickActions );

    var g = svg.append("g")
        .attr("class", "everything");

    var link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("stroke-width", 2)
        .style("stroke", linkColour);

    var node = g.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", 10)
        .attr("fill", circleColour)
        .on("click", function () {
            chartType = 0;
            document.getElementById("mysvg").innerHTML = "";
            document.getElementById("mySliderContainer").style.visibility = "visible";
            drawBarChart(data, noOfBins)
        });


    var drag_handler = d3.drag()
        .on("start", drag_start)
        .on("drag", drag_drag)
        .on("end", drag_end);

    drag_handler(node);

    var zoom_handler = d3.zoom()
        .on("zoom", zoom_actions);

    zoom_handler(svg);

    function circleColour(d){
        return color(d.id);
    }

    function linkColour(d){
        return color(d.id);
    }

    function drag_start(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function drag_drag(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function drag_end(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    function zoom_actions(){
        g.attr("transform", d3.event.transform)
    }

    function tickActions() {
        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
    }
}