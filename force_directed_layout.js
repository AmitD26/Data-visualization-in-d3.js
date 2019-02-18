function drawForceDirectedLayout(data, noOfBins) {
    // var binSize = (d3.max(data) - d3.min(data))/noOfBins;
    // console.log(binSize);
    //
    // var binValArray = Array.apply(null, Array(noOfBins)).map(Number.prototype.valueOf,0);
    // data.forEach(function (d) {
    //     binValArray[Math.floor((d - d3.min(data))/binSize)]++;
    // });
    // console.log(binValArray);
    //
    // var min = d3.min(data);
    // var binValues = [];
    // for(var i = 0; i < noOfBins; i++){
    //     var end = (+min + +binSize).toFixed(1);
    //     binValues.push(min + "-" + end);
    //     min = end;
    // }


    var nodes = [];
    var links = [];
    var count = 0
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
            links.push({id: count,
                        source: i/500,
                        target: j/500,
                        distance: 4*Math.sqrt(Math.pow((overall[j] - overall[i]), 2) + Math.pow((balance[j] - balance[i]), 2) + Math.pow((stamina[j] - stamina[i]), 2) + Math.pow((strength[j] - strength[i]), 2))})
            count++;
        }
    }

    // for (i = 0; i < data.length; i++) {
    //     nodes.push({
    //         name : data[i],
    //         value : data[i],
    //         target : [ 0 ]
    //     })
    // }
    //
    // for (i = 0; i < nodes.length; i++) {
    //     for (var j = 0; j < nodes[i].target.length; j++) {
    //         links.push({
    //             source : nodes[i],
    //             target : nodes[nodes[i].target[j]]
    //         })
    //     }
    // }

    var svg = d3.select("svg"),
        margin = 0,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;

    //
    // //Set background color of svg container or chart.
    // svg.append("rect")
    //     .attr("width", "100%")
    //     .attr("height", "100%")
    //     .attr("fill", "aliceblue");
    //
    var color = d3.scaleOrdinal().range(d3.schemeCategory10);
    //
    // var force = d3.force()
    //     .size([ width, height ])
    //     .nodes(nodes)
    //     .links([])
    //     .linkStrength(0.3).friction(0.9).linkDistance(100).charge(-120)
    //     .gravity(0.1).theta(0.8).alpha(0.1);
    //
    // var link = svg.selectAll('.link')
    //     .data(links)
    //     .enter().append('line')
    //     .attr('class', 'link')
    //     .style('stroke', 'black')
    //     .style("stroke-width", function(d) {
    //         return Math.sqrt(Math.sqrt(d.source.value));
    //     });
    //
    // var gnodes = svg.selectAll('.node')
    //     .data(nodes)
    //     .enter().append('g')
    //     .classed('gnode', true);
    //
    // var node = gnodes.append('circle')
    //     .attr("class", "node")
    //     .attr("r", 20)
    //     .attr("opacity", 0.5)
    //     .style("fill", function(d,i) { return color(i); })
    //     .call(force.drag);
    //
    // var labels = gnodes.append("text")
    //     .text(function(d) {
    //         return d.name;
    //     });
    //
    // force.on('tick', function() {
    //     gnodes.attr('transform', function(d) {
    //         return 'translate(' + d.x + ', ' + d.y + ')';
    //     })
    //     link.attr('x1', function(d) { return d.source.x; })
    //         .attr('y1', function(d) { return d.source.y; })
    //         .attr('x2', function(d) { return d.target.x; })
    //         .attr('y2', function(d) { return d.target.y; });
    // });
    //
    // force.start();
    //
    // svg.on("click", function() {
    //     chartType = 0;
    //     document.getElementById("mysvg").innerHTML = "";
    //     drawBarChart(data);
    // })

    // var color = d3.scaleOrdinal(d3.schemeCategory20);
    //
    // var force = d3.forceSimulation()
    //     .nodes(nodes)
    //     .force('link', d3.forceLink(links).distance(100))
    //     .force('charge', d3.forceManyBody().strength(-100))
    //     .force('collide', d3.forceCollide().radius(20).strength(5))
    //     .force('center', d3.forceCenter(width/2, height/2));
    //     // .force('x', d3.forceX(200).strength(0.1))
    //     // .force('y', d3.forceY(200).strength(0.1))
    //     // .force('collide', d3.forceCollide.radius(10).strength(0.1));
    //
    // var node = d3.select('svg')
    //     .selectAll('.node')
    //     .data(nodes)
    //     .enter()
    //     .append('g')
    //     .attr('class', 'node')
    //     .append('circle')
    //     .attr('r', 10)
    //     .attr('fill', '#000')
    //     .call(d3.drag()
    //     .on("start", dragstarted)
    //     .on("drag", dragged)
    //     .on("end", dragended));
    //
    // var link = d3.select('svg')
    //     .selectAll('.link')
    //     .data(links)
    //     .enter()
    //     .append('line')
    //     .attr("class", "link")
    //     .attr("style", "stroke:rgb(0,0,0);stroke-width:2");
    //     // .attr("stroke-width", function(d) { return Math.sqrt(d.value); });
    //
    // force.on('tick', function(){
    //     d3.select('svg')
    //         .selectAll('.node')
    //         .attr('transform', function(d){
    //             return 'translate(' + d.x + ',' + d.y + ')' });
    //     d3.select('svg').selectAll('.link')
    //         .attr('x1', function(d){ return d.source.x })
    //         .attr('x2', function(d){ return d.target.x })
    //         .attr('y1', function(d){ return d.source.y })
    //         .attr('y2', function(d){ return d.target.y })
    // });

    // var simulation = d3.forceSimulation()
    //     .force("link", d3.forceLink().id(function(d) { return d.id; }))
    //     .force("charge", d3.forceManyBody())
    //     .force("center", d3.forceCenter(width / 2, height / 2));
    //
    // d3.json("miserables.json", function(error, graph) {
    //     if (error) throw error;
    //
    //     var link = svg.append("g")
    //         .attr("class", "links")
    //         .selectAll("line")
    //         .data(graph.links)
    //         .enter().append("line")
    //         .attr("stroke-width", function(d) { return Math.sqrt(d.value); });
    //
    //     var node = svg.append("g")
    //         .attr("class", "nodes")
    //         .selectAll("g")
    //         .data(graph.nodes)
    //         .enter().append("g")
    //
    //     var circles = node.append("circle")
    //         .attr("r", 5)
    //         .attr("fill", function(d) { return color(d.group); })
    //         .call(d3.drag()
    //             .on("start", dragstarted)
    //             .on("drag", dragged)
    //             .on("end", dragended));
    //
    //     var lables = node.append("text")
    //         .text(function(d) {
    //             return d.id;
    //         })
    //         .attr('x', 6)
    //         .attr('y', 3);
    //
    //     node.append("title")
    //         .text(function(d) { return d.id; });
    //
    //     simulation
    //         .nodes(graph.nodes)
    //         .on("tick", ticked);
    //
    //     simulation.force("link")
    //         .links(graph.links);
    //
    //     function ticked() {
    //         link
    //             .attr("x1", function(d) { return d.source.x; })
    //             .attr("y1", function(d) { return d.source.y; })
    //             .attr("x2", function(d) { return d.target.x; })
    //             .attr("y2", function(d) { return d.target.y; });
    //
    //         node
    //             .attr("transform", function(d) {
    //                 return "translate(" + d.x + "," + d.y + ")";
    //             })
    //     }
    // });
    //
    // function dragstarted(d) {
    //     if (!d3.event.active) force.alphaTarget(0.3).restart();
    //     d.fx = d.x;
    //     d.fy = d.y;
    // }
    //
    // function dragged(d) {
    //     d.fx = d3.event.x;
    //     d.fy = d3.event.y;
    // }
    //
    // function dragended(d) {
    //     if (!d3.event.active) force.alphaTarget(0);
    //     d.fx = null;
    //     d.fy = null;
    // }


    //set up the simulation and add forces
    var simulation = d3.forceSimulation()
        .nodes(nodes);

    var link_force =  d3.forceLink(links).distance(function (d) {
        return d.distance;
     });
        // .id(function(d) { return d.name; });

    var charge_force = d3.forceManyBody()
        .strength(-100);

    var center_force = d3.forceCenter(width / 2, height / 2);

    simulation
        .force("charge_force", charge_force)
        .force("center_force", center_force)
        .force("links",link_force)
    ;


    //add tick instructions:
    simulation.on("tick", tickActions );

    //add encompassing group for the zoom
    var g = svg.append("g")
        .attr("class", "everything");

    //draw lines for the links
    var link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("stroke-width", 2)
        .style("stroke", linkColour);

    //draw circles for the nodes
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



    //add drag capabilities
    var drag_handler = d3.drag()
        .on("start", drag_start)
        .on("drag", drag_drag)
        .on("end", drag_end);

    drag_handler(node);


    //add zoom capabilities
    var zoom_handler = d3.zoom()
        .on("zoom", zoom_actions);

    zoom_handler(svg);

    /** Functions **/

//Function to choose what color circle we have
//Let's return blue for males and red for females
    function circleColour(d){
        // if(d.sex =="M"){
        //     return "blue";
        // } else {
        //     return "pink";
        // }
        return color(d.id);
    }

    //Function to choose the line colour and thickness
    //If the link type is "A" return green
    //If the link type is "E" return red
    function linkColour(d){
        // if(d.type == "A"){
        //     return "green";
        // } else {
        //     return "red";
        // }
        return color(d.id);
    }

    //Drag functions
    //d is the node
    function drag_start(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    //make sure you can't drag the circle outside the box
    function drag_drag(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function drag_end(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    //Zoom functions
    function zoom_actions(){
        g.attr("transform", d3.event.transform)
    }

    function tickActions() {
        //update circle positions each tick of the simulation
        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

        //update link positions
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
    }

// }
// }());
}