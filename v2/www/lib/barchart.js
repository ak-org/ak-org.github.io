/*
MIT License

Copyright (c) [2017] [DIGI-CORP]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var groupChartData = [
  { "male_rate": 350.9, "female_rate": 196.7, "over": "AK" },
  { "male_rate": 540.9, "female_rate": 352.6, "over": "AL" },
  { "male_rate": 518.5, "female_rate": 334.1, "over": "AR" },
  { "male_rate": 344.9, "female_rate": 211.5, "over": "AZ" },
  { "male_rate": 367.0, "female_rate": 227.5, "over": "CA" },
  { "male_rate": 309.4, "female_rate": 197.1, "over": "CO" },
  { "male_rate": 369.4, "female_rate": 230.8, "over": "CT" },
  { "male_rate": 401.8, "female_rate": 265.8, "over": "DE" },
  { "male_rate": 373, "female_rate": 227, "over": "FL" },
  { "male_rate": 435.5, "female_rate": 276.8, "over": "GA" },
  { "male_rate": 354.3, "female_rate": 190.2, "over": "HI" },
  { "male_rate": 410.4, "female_rate": 251.7, "over": "IA" },
  { "male_rate": 363.1, "female_rate": 228.5, "over": "ID" },
  { "male_rate": 423.3, "female_rate": 261, "over": "IL" },
  { "male_rate": 456.5, "female_rate": 284.6, "over": "IN" },
  { "male_rate": 391.2, "female_rate": 236.5, "over": "KS" },
  { "male_rate": 500.1, "female_rate": 310.4, "over": "KY" },
  { "male_rate": 522.2, "female_rate": 330.4, "over": "LA" },
  { "male_rate": 350.4, "female_rate": 211.8, "over": "MA" },
  { "male_rate": 420.8, "female_rate": 264.7, "over": "MD" },
  { "male_rate": 363.6, "female_rate": 227.5, "over": "ME" },
  { "male_rate": 482.1, "female_rate": 311.3, "over": "MI" },
  { "male_rate": 301.3, "female_rate": 173.1, "over": "MN" },
  { "male_rate": 473.3, "female_rate": 298.7, "over": "MO" },
  { "male_rate": 564.3, "female_rate": 361.9, "over": "MS" },
  { "male_rate": 369.8, "female_rate": 224, "over": "MT" },
  { "male_rate": 404.6, "female_rate": 248.6, "over": "NC" },
  { "male_rate": 361.2, "female_rate": 231.6, "over": "ND" },
  { "male_rate": 361.1, "female_rate": 222, "over": "NE" },
  { "male_rate": 358.2, "female_rate": 229.7, "over": "NH" },
  { "male_rate": 417.4, "female_rate": 262.4, "over": "NJ" },
  { "male_rate": 352, "female_rate": 223.6, "over": "NM" },
  { "male_rate": 484.4, "female_rate": 284.2, "over": "NV" },
  { "male_rate": 442, "female_rate": 291, "over": "NY" },
  { "male_rate": 459.2, "female_rate": 291, "over": "OH" },
  { "male_rate": 537.4, "female_rate": 355.7, "over": "OK" },
  { "male_rate": 330, "female_rate": 199.2, "over": "OR" },
  { "male_rate": 437.5, "female_rate": 273.4, "over": "PA" },
  { "male_rate": 413.1, "female_rate": 247.2, "over": "RI" },
  { "male_rate": 447, "female_rate": 269.8, "over": "SC" },
  { "male_rate": 387.1, "female_rate": 222.2, "over": "SD" },
  { "male_rate": 495.8, "female_rate": 315.8, "over": "TN" },
  { "male_rate": 415.5, "female_rate": 262.2, "over": "TX" },
  { "male_rate": 338, "female_rate": 241.8, "over": "UT" },
  { "male_rate": 382.3, "female_rate": 244.3, "over": "VA" },
  { "male_rate": 374.3, "female_rate": 232.7, "over": "VT" },
  { "male_rate": 348, "female_rate": 205.1, "over": "WA" },
  { "male_rate": 395.1, "female_rate": 239.2, "over": "WI" },
  { "male_rate": 469.9, "female_rate": 311.2, "over": "WV" },
  { "male_rate": 400.7, "female_rate": 233, "over": "WY" }
];

var columnsInfo = { "male_rate": "Male", "female_rate": "Female" };
$("#chart").empty();
var barChartConfig = {
  mainDiv: "#chart",
  colorRange: ["#68a225", "#b64526"],
  data: groupChartData,
  columnsInfo: columnsInfo,
  xAxis: "over",
  yAxis: "runs",
  label: {
    xAxis: "State",
    yAxis: "Mortality Rate"
  },
  requireLegend: true
};





function groupBarChart(config) {
     function setReSizeEvent(data) {
       var resizeTimer;
       var interval = 500;
       window.removeEventListener('resize', function () {
       });
       window.addEventListener('resize', function (event) {

         if (resizeTimer !== false) {
           clearTimeout(resizeTimer);
         }
         resizeTimer = setTimeout(function () {
           $(data.mainDiv).empty();
           drawgroupBarChartChart(data);
           clearTimeout(resizeTimer);
         }, interval);
       });
     }

     drawgroupBarChartChart(config);
     setReSizeEvent(config);
   }
   function creategroupBarChartLegend(mainDiv, columnsInfo, colorRange) {
     var z = d3.scaleOrdinal()
       .range(colorRange);
     var mainDivName = mainDiv.substr(1, mainDiv.length);
     $(mainDiv).before("<div id='Legend_" + mainDivName + "' class='pmd-card-body' style='margin-top:0; margin-bottom:0;margin-left:350;'></div>");
     var keys = Object.keys(columnsInfo);
     keys.forEach(function (d) {
       var cloloCode = z(d);
       $("#Legend_" + mainDivName).append("<span class='team-graph team1' style='display: inline-block; margin-right:10px;'>\
       <span style='background:" + cloloCode + ";width: 10px;height: 10px;display: inline-block;vertical-align: middle;'>&nbsp;</span>\
       <span style='padding-top: 0;font-family:Source Sans Pro, sans-serif;font-size: 16px;display: inline;'>" + columnsInfo[d] + " </span>\
     </span>");
     });

   }

   function drawgroupBarChartChart(config) {
     var data = config.data;
     var columnsInfo = config.columnsInfo;
     var xAxis = config.xAxis;
     var yAxis = config.yAxis;
     var colorRange = config.colorRange;
     var mainDiv = config.mainDiv;
     var mainDivName = mainDiv.substr(1, mainDiv.length);
     var label = config.label;
     var requireLegend = config.requireLegend;
     d3.select(mainDiv).append("svg").attr("width", $(mainDiv).width()).attr("height", $(mainDiv).height()*0.9);
     var svg = d3.select(mainDiv + " svg"),
       margin = { top: 20, right: 20, bottom: 30, left: 40 },
       width = +svg.attr("width") - margin.left - margin.right,
       height = +svg.attr("height") - margin.top - margin.bottom;

     var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

     if (requireLegend != null && requireLegend != undefined && requireLegend != false) {
       $("#Legend_" + mainDivName).remove();
       creategroupBarChartLegend(mainDiv, columnsInfo, colorRange);

     }
     var x0 = d3.scaleBand()
       .rangeRound([0, width])
       .paddingInner(0.1);

     var x1 = d3.scaleBand()
       .padding(0.05);

     var y = d3.scaleLinear()
       .rangeRound([height, 0]);

     var z = d3.scaleOrdinal()
       .range(colorRange);

     var keys = Object.keys(columnsInfo);
     x0.domain(data.map(function (d) {
       return d[xAxis];
     }));
     x1.domain(keys).rangeRound([0, x0.bandwidth()]);
     y.domain([0, d3.max(data, function (d) {
       return d3.max(keys, function (key) {
         return d[key];
       });
     })]).nice();

     var element = g.append("g")
       .selectAll("g")
       .data(data)
       .enter().append("g")
       .attr("transform", function (d) {
         return "translate(" + x0(d[xAxis]) + ",0)";
       });

     var rect = element.selectAll("rect")
       .data(function (d, i) {
         return keys.map(function (key) {
           return { key: key, value: d[key], index: key + "_" + i + "_" + d[xAxis] };
         });
       })
       .enter().append("rect")
       .attr("x", function (d) {
         return x1(d.key);
       })
       .attr("y", function (d) {
         return y(d.value);
       })
       .attr("width", x1.bandwidth())
       .attr("data-index", function (d, i) {
         return d.index;
       })
       .attr("height", function (d) {
         return height - y(d.value);
       })
       .attr("fill", function (d) {
         return z(d.key);
       });
     //CBT:add tooltips
     var self = {};
     self.svg = svg;
     self.cssPrefix = "groupBar0_";
     self.data = data;
     self.keys = keys;
     self.height = height;
     self.width = width;
     self.label = label;
     self.yAxis = yAxis;
     self.xAxis = xAxis;
     barTooltip.addTooltips(self);

     rect.on("mouseover", function () {
       var currentEl = d3.select(this);
       var index = currentEl.attr("data-index");
       barTooltip.showTooltip(self, index);
     });

     rect.on("mouseout", function () {
       var currentEl = d3.select(this);
       var index = currentEl.attr("data-index");
       barTooltip.hideTooltip(self, index);
     });

     rect.on("mousemove", function () {
       barTooltip.moveTooltip(self);
     });

     g.append("g")
       .attr("class", "axis")
       .attr("transform", "translate(0," + height + ")")
       .call(d3.axisBottom(x0))
       .append("text")
       .attr("x", width / 2)
       .attr("y", margin.bottom * 0.9)
       .attr("dx", "0.32em")
       .attr("fill", "#000")
       .attr("font-weight", "bold")
       .attr("text-anchor", "start")
       .text(label.xAxis);

     g.append("g")
       .attr("class", "axis")
       .call(d3.axisLeft(y).ticks(null, "s"))
       .append("text")
       .attr("x", -30)
       .attr("y", -30)//y(y.ticks().pop()) + 0.5)
       .attr("dy", "0.31em")
       .attr("fill", "#000")
       .attr("transform", "rotate(-90)")
       .attr("font-weight", "bold")
       // .attr("text-anchor", "start")
       .text(label.yAxis);
   }
   var helpers = {
     getDimensions: function (id) {
       var el = document.getElementById(id);
       var w = 0, h = 0;
       if (el) {
         var dimensions = el.getBBox();
         w = dimensions.width;
         h = dimensions.height;
       } else {
         console.log("error: getDimensions() " + id + " not found.");
       }
       return { w: w, h: h };
     }
   }
   var barTooltip = {
     addTooltips: function (pie) {
       var keys = pie.keys;
       // group the label groups (label, percentage, value) into a single element for simpler positioning
       var element = pie.svg.append("g")
         .selectAll("g")
         .data(pie.data)
         .enter().append("g")
         .attr("class", function (d, i) {
           return pie.cssPrefix + "tooltips" + "_" + i
         });

       tooltips = element.selectAll("g")
         .data(function (d, i) {
           return keys.map(function (key) {
             return { key: key, value: d[key], index: key + "_" + i + "_" + d[pie.xAxis] };
           });
         })
         .enter()
         .append("g")
         .attr("class", pie.cssPrefix + "tooltip")
         .attr("id", function (d, i) {
           return pie.cssPrefix + "tooltip" + d.index;
         })
         .style("opacity", 0)
         .append("rect")
         .attr("rx", 2)
         .attr("ry", 2)
         .attr("x", -2)
         .attr("opacity", 0.71)
         .style("fill", "#000000");

       element.selectAll("g")
         .data(function (d, i) {
           return keys.map(function (key) {
             return { key: key, value: d[key], index: key + "_" + i + "_" + d[pie.xAxis] };
           });
         })
         .append("text")
         .attr("fill", function (d) {
           return "#efefef"
         })
         .style("font-size", function (d) {
           return 10;
         })
         .style("font-family", function (d) {
           return "arial";
         })
         .text(function (d, i) {
           var caption = "Rate:{runs}";
           return barTooltip.replacePlaceholders(pie, caption, i, {
             runs: d.value,
           });
         });

       element.selectAll("g rect")
         .attr("width", function (d, i) {
           var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + d.index);
           return dims.w + (2 * 4);
         })
         .attr("height", function (d, i) {
           var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + d.index);
           return dims.h + (2 * 4);
         })
         .attr("y", function (d, i) {
           var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + d.index);
           return -(dims.h / 2) + 1;
         });
     },

     showTooltip: function (pie, index) {
       var fadeInSpeed = 250;
       if (barTooltip.currentTooltip === index) {
         fadeInSpeed = 1;
       }

       barTooltip.currentTooltip = index;
       d3.select("#" + pie.cssPrefix + "tooltip" + index)
         .transition()
         .duration(fadeInSpeed)
         .style("opacity", function () {
           return 1;
         });

       barTooltip.moveTooltip(pie);
     },

     moveTooltip: function (pie) {
       d3.selectAll("#" + pie.cssPrefix + "tooltip" + barTooltip.currentTooltip)
         .attr("transform", function (d) {
           var mouseCoords = d3.mouse(this.parentNode);
           var x = mouseCoords[0] + 4 + 2;
           var y = mouseCoords[1] - (2 * 4) - 2;
           return "translate(" + x + "," + y + ")";
         });
     },

     hideTooltip: function (pie, index) {
       d3.select("#" + pie.cssPrefix + "tooltip" + index)
         .style("opacity", function () {
           return 0;
         });

       // move the tooltip offscreen. This ensures that when the user next mouseovers the segment the hidden
       // element won't interfere
       d3.select("#" + pie.cssPrefix + "tooltip" + barTooltip.currentTooltip)
         .attr("transform", function (d, i) {
           // klutzy, but it accounts for tooltip padding which could push it onscreen
           var x = pie.width + 1000;
           var y = pie.height + 1000;
           return "translate(" + x + "," + y + ")";
         });
     },

     replacePlaceholders: function (pie, str, index, replacements) {
       var replacer = function () {
         return function (match) {
           var placeholder = arguments[1];
           if (replacements.hasOwnProperty(placeholder)) {
             return replacements[arguments[1]];
           } else {
             return arguments[0];
           }
         };
       };
       return str.replace(/\{(\w+)\}/g, replacer(replacements));
     }
   };


var groupChart = new groupBarChart(barChartConfig);
