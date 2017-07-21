
var RED = "#FF0000",
    YELLOW = "#FFA000" //"#FFCC00",
    GREEN = "#228B22";


var heartDiseaseSpec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.0.json",
      "description": "A simple bar chart to show poverty rate.",
      "width": 860,
      "height": 240,
      "data": {
        "values": [
          {"State": "AK", "StateName": "Alaska", "Heart Disease Mortality Rate ": 269.3},
          {"State": "AR", "StateName": "Arkansas", "Heart Disease Mortality Rate ": 418.1},
          {"State": "AL", "StateName": "Alabama", "Heart Disease Mortality Rate ": 435.3},
          {"State": "AZ", "StateName": "Arizona", "Heart Disease Mortality Rate ": 273.1},
          {"State": "CA", "StateName": "California", "Heart Disease Mortality Rate ": 289.5},
          {"State": "CO", "StateName": "Colorado", "Heart Disease Mortality Rate ": 247.7},
          {"State": "CT", "StateName": "Connecticut", "Heart Disease Mortality Rate ": 290.6},
          {"State": "DE", "StateName": "Delaware", "Heart Disease Mortality Rate ": 325.9},
          {"State": "FL", "StateName": "Florida", "Heart Disease Mortality Rate ": 293},
          {"State": "GA", "StateName": "Georgia", "Heart Disease Mortality Rate ": 345.9},
          {"State": "HI", "StateName": "Hawaii", "Heart Disease Mortality Rate ": 264.1},
          {"State": "ID", "StateName": "Idaho", "Heart Disease Mortality Rate ": 290.1},
          {"State": "IL", "StateName": "Illinois", "Heart Disease Mortality Rate ": 331.7},
          {"State": "IN", "StateName": "Indiana", "Heart Disease Mortality Rate ": 359.6},
          {"State": "IA", "StateName": "Iowa", "Heart Disease Mortality Rate ": 321.3},
          {"State": "KS", "StateName": "Kansas", "Heart Disease Mortality Rate ": 304.6},
          {"State": "KY", "StateName": "Kentucky", "Heart Disease Mortality Rate ": 394.8},
          {"State": "LA", "StateName": "Louisiana", "Heart Disease Mortality Rate ": 414.9},
          {"State": "ME", "StateName": "Maine", "Heart Disease Mortality Rate ": 288.2},
          {"State": "MD", "StateName": "Maryland", "Heart Disease Mortality Rate ": 331.6},
          {"State": "MA", "StateName": "Massachusetts", "Heart Disease Mortality Rate ": 270.8},
          {"State": "MI", "StateName": "Michigan", "Heart Disease Mortality Rate ": 387},
          {"State": "MN", "StateName": "Minnesota", "Heart Disease Mortality Rate ": 229.6},
          {"State": "MS", "StateName": "Mississippi", "Heart Disease Mortality Rate ": 450.8},
          {"State": "MO", "StateName": "Missouri", "Heart Disease Mortality Rate ": 376.2},
          {"State": "MT", "StateName": "Montana", "Heart Disease Mortality Rate ": 293.3},
          {"State": "NE", "StateName": "Nebraska", "Heart Disease Mortality Rate ": 283.2},
          {"State": "NV", "StateName": "Nevada", "Heart Disease Mortality Rate ": 378.5},
          {"State": "NM", "StateName": "New Mexico", "Heart Disease Mortality Rate ": 282.8},
          {"State": "NH", "StateName": "New Hampshire", "Heart Disease Mortality Rate ": 286.9},
          {"State": "NJ", "StateName": "New Jersey", "Heart Disease Mortality Rate ": 328.6},
          {"State": "NY", "StateName": "New York", "Heart Disease Mortality Rate ": 356.1},
          {"State": "NC", "StateName": "North Carolina", "Heart Disease Mortality Rate ": 316.2},
          {"State": "ND", "StateName": "North Dakota", "Heart Disease Mortality Rate ": 291.3},
          {"State": "OH", "StateName": "Ohio", "Heart Disease Mortality Rate ": 362.9},
          {"State": "OK", "StateName": "Oklahoma", "Heart Disease Mortality Rate ": 437.8},
          {"State": "OR", "StateName": "Oregon", "Heart Disease Mortality Rate ": 257.4},
          {"State": "PA", "StateName": "Pennsylvania", "Heart Disease Mortality Rate ": 344.4},
          {"State": "RI", "StateName": "Rhode Island", "Heart Disease Mortality Rate ": 317.5},
          {"State": "SC", "StateName": "South Carolina", "Heart Disease Mortality Rate ": 347.8},
           {"State": "SD", "StateName": "South Dakota", "Heart Disease Mortality Rate ": 296.6},
           {"State": "TN", "StateName": "Tennessee", "Heart Disease Mortality Rate ": 395.5},
           {"State": "TX", "StateName": "Texas", "Heart Disease Mortality Rate ": 330.7},
           {"State": "UT", "StateName": "Utah", "Heart Disease Mortality Rate ": 286.4},
           {"State": "VT", "StateName": "Vermont", "Heart Disease Mortality Rate ": 295.5},
           {"State": "VA", "StateName": "Virginia", "Heart Disease Mortality Rate ": 304.7},
           {"State": "WA", "StateName": "Washington", "Heart Disease Mortality Rate ": 268.4},
           {"State": "WV", "StateName": "West Virginia", "Heart Disease Mortality Rate ": 382.7},
           {"State": "WI", "StateName": "Wisconsin", "Heart Disease Mortality Rate ": 307.7},
           {"State": "WY", "StateName": "Wyoming", "Heart Disease Mortality Rate ": 311.1}
         ]
       },
       "mark": "bar",
       "encoding": {
         "x": {
               "field": "State",
               "type": "ordinal",
               "sort": "ascending"
         },
         "y": {"field": "Heart Disease Mortality Rate ",
               "type": "quantitative",
               "axis" : {
                 "title": "Heart Disease Mortality Rate"
               }
             },
         "color": {
           "field": "Heart Disease Mortality Rate ",
           "scale": {
              "field": "Heart Disease Mortality Rate ",
              "domain": [220,320,460],
              "type" : "threshold",
              "range": [GREEN,GREEN,YELLOW,YELLOW,RED,RED]

            },
           "type": "quantitative",
            "legend": {
              "title" : "Mortality Rate per 100K Adults"
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


vega.embed('#secondVis', heartDiseaseSpec, opt2, function(error, result) {
  // result.view is the Vega View, vlSpec is the original Vega-Lite specification
  var tooltipOption = {
    showAllFields: false,
    fields: [
      {
        field: "StateName",
        title: "State",
        formatType : "string"
      },
      {
        field: "Heart Disease Mortality Rate ",
        title: "Mortality Rate",
        formatType : "number"
      }
    ],
    delay: 50,
    colorTheme: "light"
  };
  vegaTooltip.vegaLite(result.view, heartDiseaseSpec,tooltipOption);
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
