
var RED = "#FF0000",
    YELLOW = "#FFA000" //"#FFCC00",
    GREEN = "#228B22";

var povertySpec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.0.json",
      "description": "A simple bar chart to show poverty rate.",
      "width": 860,
      "height": 240,
      "data": {
        "values": [
          {"State": "AK", "StateName": "Alaska", "Overall Poverty (%)": 10.4},
          {"State": "AR", "StateName": "Arkansas", "Overall Poverty (%)": 18.7},
          {"State": "AL", "StateName": "Alabama", "Overall Poverty (%)": 18.5},
          {"State": "AZ", "StateName": "Arizona", "Overall Poverty (%)": 17.4},
          {"State": "CA", "StateName": "California", "Overall Poverty (%)": 15.4},
          {"State": "CO", "StateName": "Colorado", "Overall Poverty (%)": 11.5},
          {"State": "CT", "StateName": "Connecticut", "Overall Poverty (%)": 10.6},
          {"State": "DE", "StateName": "Delaware", "Overall Poverty (%)": 12.6},
          {"State": "FL", "StateName": "Florida", "Overall Poverty (%)": 15.8},
          {"State": "GA", "StateName": "Georgia", "Overall Poverty (%)": 17.2},
          {"State": "HI", "StateName": "Hawaii", "Overall Poverty (%)": 10.7},
          {"State": "ID", "StateName": "Idaho", "Overall Poverty (%)": 14.7},
          {"State": "IL", "StateName": "Illinois", "Overall Poverty (%)": 13.6},
          {"State": "IN", "StateName": "Indiana", "Overall Poverty (%)": 14.4},
          {"State": "IA", "StateName": "Iowa", "Overall Poverty (%)": 12.1},
          {"State": "KS", "StateName": "Kansas", "Overall Poverty (%)": 12.9},
          {"State": "KY", "StateName": "Kentucky", "Overall Poverty (%)": 18.3},
          {"State": "LA", "StateName": "Louisiana", "Overall Poverty (%)": 19.5},
          {"State": "ME", "StateName": "Maine", "Overall Poverty (%)": 13.5},
          {"State": "MD", "StateName": "Maryland", "Overall Poverty (%)": 9.9},
          {"State": "MA", "StateName": "Massachusetts", "Overall Poverty (%)": 11.5},
          {"State": "MI", "StateName": "Michigan", "Overall Poverty (%)": 15.7},
          {"State": "MN", "StateName": "Minnesota", "Overall Poverty (%)": 10.2},
          {"State": "MS", "StateName": "Mississippi", "Overall Poverty (%)": 22.1},
          {"State": "MO", "StateName": "Missouri", "Overall Poverty (%)": 14.8},
          {"State": "MT", "StateName": "Montana", "Overall Poverty (%)": 14.4},
          {"State": "NE", "StateName": "Nebraska", "Overall Poverty (%)": 12.2},
          {"State": "NV", "StateName": "Nevada", "Overall Poverty (%)": 14.9},
          {"State": "NM", "StateName": "New Mexico", "Overall Poverty (%)": 19.8},
          {"State": "NH", "StateName": "New Hampshire", "Overall Poverty (%)": 8.4},
          {"State": "NJ", "StateName": "New Jersey", "Overall Poverty (%)": 10.8},
          {"State": "NY", "StateName": "New York", "Overall Poverty (%)": 15.5},
          {"State": "NC", "StateName": "North Carolina", "Overall Poverty (%)": 16.4},
          {"State": "ND", "StateName": "North Dakota", "Overall Poverty (%)": 10.7},
          {"State": "OH", "StateName": "Ohio", "Overall Poverty (%)": 14.8},
          {"State": "OK", "StateName": "Oklahoma", "Overall Poverty (%)": 16.0},
          {"State": "OR", "StateName": "Oregon", "Overall Poverty (%)": 15.2},
          {"State": "PA", "StateName": "Pennsylvania", "Overall Poverty (%)": 13.1},
          {"State": "RI", "StateName": "Rhode Island", "Overall Poverty (%)": 14.1},
          {"State": "SC", "StateName": "South Carolina", "Overall Poverty (%)": 16.8},
           {"State": "SD", "StateName": "South Dakota", "Overall Poverty (%)": 13.5},
           {"State": "TN", "StateName": "Tennessee", "Overall Poverty (%)": 16.7},
           {"State": "TX", "StateName": "Texas", "Overall Poverty (%)": 15.9},
           {"State": "UT", "StateName": "Utah", "Overall Poverty (%)": 11.2},
           {"State": "VT", "StateName": "Vermont", "Overall Poverty (%)": 10.4},
           {"State": "VA", "StateName": "Virginia", "Overall Poverty (%)": 11.2},
           {"State": "WA", "StateName": "Washington", "Overall Poverty (%)": 12.2},
           {"State": "WV", "StateName": "West Virginia", "Overall Poverty (%)": 18.0},
           {"State": "WI", "StateName": "Wisconsin", "Overall Poverty (%)": 12.1},
           {"State": "WY", "StateName": "Wyoming", "Overall Poverty (%)": 10.6}
         ]
       },
       "mark": "bar",
       "encoding": {
         "x": {
               "field": "State",
               "type": "ordinal",
               "sort": "ascending"
         },
         "y": {"field": "Overall Poverty (%)",
               "type": "quantitative"
             },
         "color": {
           "field": "Overall Poverty (%)",
           "scale": {
              "domain": [8.4,13.1,22.1],
              "type" : "threshold",
              "range": [GREEN,GREEN,YELLOW,YELLOW,RED,RED]

            },
           "type": "quantitative",
           "legend": {
             "title" : "Poverty Rate"
            },
            "legend": {
              "title" : "Poverty Rate in USA"
             }
          }
       },

       "config": {
            "mark": {
               "filled": true
            },
            "axis" : {
              "labelFontSize": 13,
              "titleFontSize": 16
            }
       }
}

var opt = {
  "renderer": "canvas",
  "actions": {
    "export": false,
    "source": false,
    "editor": false
  }
}

var opt2 = {
  mode: "vega-lite",
  actions: false
};


vega.embed('#stemVis', povertySpec, opt2, function(error, result) {
  // result.view is the Vega View, vlSpec is the original Vega-Lite specification
  var tooltipOption = {
    		showAllFields: false,
    		fields: [
          {
            field: "StateName",
            title: "State",
            formatType : "string"
          },
      		{ field: "Overall Poverty (%)",
            title: "Poverty Rate (%)",
            formatType: "number",
            format: "4.4"
          }
    		],
        delay: 50,
        colorTheme: "light"
  		};
      vegaTooltip.vegaLite(result.view, povertySpec,tooltipOption);
  });



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
