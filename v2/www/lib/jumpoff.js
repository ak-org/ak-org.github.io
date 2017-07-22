var RED = "#FF0000",
    YELLOW = "#FFA000" //"#FFCC00",
    GREEN = "#228B22";

var heartDiseaseOverallSpec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.0.json",
      "description": "A simple bar chart to show poverty rate.",
      "width": 860,
      "height": 220,
      "data": {
        "values": [
          {"State": "AK", "StateName": "Alaska", "Heart Disease Mortality Rate ": 350.9},
          {"State": "AR", "StateName": "Arkansas", "Heart Disease Mortality Rate ": 518.5},
          {"State": "AL", "StateName": "Alabama", "Heart Disease Mortality Rate ": 540.9},
          {"State": "AZ", "StateName": "Arizona", "Heart Disease Mortality Rate ": 344.9},
          {"State": "CA", "StateName": "California", "Heart Disease Mortality Rate ": 367.0},
          {"State": "CO", "StateName": "Colorado", "Heart Disease Mortality Rate ": 309.4},
          {"State": "CT", "StateName": "Connecticut", "Heart Disease Mortality Rate ": 369.4},
          {"State": "DE", "StateName": "Delaware", "Heart Disease Mortality Rate ": 401.8},
          {"State": "FL", "StateName": "Florida", "Heart Disease Mortality Rate ": 373},
          {"State": "GA", "StateName": "Georgia", "Heart Disease Mortality Rate ": 435.5},
          {"State": "HI", "StateName": "Hawaii", "Heart Disease Mortality Rate ": 354.3},
          {"State": "ID", "StateName": "Idaho", "Heart Disease Mortality Rate ": 363.1},
          {"State": "IL", "StateName": "Illinois", "Heart Disease Mortality Rate ": 423.3},
          {"State": "IN", "StateName": "Indiana", "Heart Disease Mortality Rate ": 456.5},
          {"State": "IA", "StateName": "Iowa", "Heart Disease Mortality Rate ": 410.4},
          {"State": "KS", "StateName": "Kansas", "Heart Disease Mortality Rate ": 391.2},
          {"State": "KY", "StateName": "Kentucky", "Heart Disease Mortality Rate ": 500.1},
          {"State": "LA", "StateName": "Louisiana", "Heart Disease Mortality Rate ": 522.2},
          {"State": "ME", "StateName": "Maine", "Heart Disease Mortality Rate ": 363.6},
          {"State": "MD", "StateName": "Maryland", "Heart Disease Mortality Rate ": 420.8},
          {"State": "MA", "StateName": "Massachusetts", "Heart Disease Mortality Rate ": 350.4},
          {"State": "MI", "StateName": "Michigan", "Heart Disease Mortality Rate ": 482.1},
          {"State": "MN", "StateName": "Minnesota", "Heart Disease Mortality Rate ": 301.3},
          {"State": "MS", "StateName": "Mississippi", "Heart Disease Mortality Rate ": 564.3},
          {"State": "MO", "StateName": "Missouri", "Heart Disease Mortality Rate ": 473.3},
          {"State": "MT", "StateName": "Montana", "Heart Disease Mortality Rate ": 369.8},
          {"State": "NE", "StateName": "Nebraska", "Heart Disease Mortality Rate ": 361.1},
          {"State": "NV", "StateName": "Nevada", "Heart Disease Mortality Rate ": 484.4},
          {"State": "NM", "StateName": "New Mexico", "Heart Disease Mortality Rate ": 352},
          {"State": "NH", "StateName": "New Hampshire", "Heart Disease Mortality Rate ": 358.2},
          {"State": "NJ", "StateName": "New Jersey", "Heart Disease Mortality Rate ": 417.4},
          {"State": "NY", "StateName": "New York", "Heart Disease Mortality Rate ": 442},
          {"State": "NC", "StateName": "North Carolina", "Heart Disease Mortality Rate ": 404.6},
          {"State": "ND", "StateName": "North Dakota", "Heart Disease Mortality Rate ": 361.2},
          {"State": "OH", "StateName": "Ohio", "Heart Disease Mortality Rate ": 459.2},
          {"State": "OK", "StateName": "Oklahoma", "Heart Disease Mortality Rate ": 537.4},
          {"State": "OR", "StateName": "Oregon", "Heart Disease Mortality Rate ": 330},
          {"State": "PA", "StateName": "Pennsylvania", "Heart Disease Mortality Rate ": 437.5},
          {"State": "RI", "StateName": "Rhode Island", "Heart Disease Mortality Rate ": 413.1},
          {"State": "SC", "StateName": "South Carolina", "Heart Disease Mortality Rate ": 447},
           {"State": "SD", "StateName": "South Dakota", "Heart Disease Mortality Rate ": 387.1},
           {"State": "TN", "StateName": "Tennessee", "Heart Disease Mortality Rate ": 495.8},
           {"State": "TX", "StateName": "Texas", "Heart Disease Mortality Rate ": 415.5},
           {"State": "UT", "StateName": "Utah", "Heart Disease Mortality Rate ": 338},
           {"State": "VT", "StateName": "Vermont", "Heart Disease Mortality Rate ": 374.3},
           {"State": "VA", "StateName": "Virginia", "Heart Disease Mortality Rate ": 382.3},
           {"State": "WA", "StateName": "Washington", "Heart Disease Mortality Rate ": 348},
           {"State": "WV", "StateName": "West Virginia", "Heart Disease Mortality Rate ": 469.9},
           {"State": "WI", "StateName": "Wisconsin", "Heart Disease Mortality Rate ": 395.1},
           {"State": "WY", "StateName": "Wyoming", "Heart Disease Mortality Rate ": 400.7}
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
               "title": "Heart Disease Mortality Rate (Male)"
             }
           },
       "color": {
         "field": "Heart Disease Mortality Rate ",
         "scale": {
            "field": "Heart Disease Mortality Rate ",
            "domain": [301,430,565],
            "type" : "threshold",
            "range": [GREEN,GREEN,YELLOW,YELLOW,RED,RED]

          },
         "type": "quantitative",
          "legend": {
            "title" : "Mortality Rate per 100K Males"

           }
        }
     },

     "config": {
          "mark": {
             "filled": true
          },
          "axis" : {
            "labelFont": "Georgia",
            "labelFontSize": 13,
            "titleFontSize": 13
          }
     }
}


var heartDiseaseOverallSpec2 = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.0.json",
      "description": "A simple bar chart to show poverty rate.",
      "width": 860,
      "height": 220,
      "data": {
        "values": [
          {"State": "AK", "StateName": "Alaska", "Heart Disease Mortality Rate ": 196.7},
          {"State": "AR", "StateName": "Arkansas", "Heart Disease Mortality Rate ": 334.1},
          {"State": "AL", "StateName": "Alabama", "Heart Disease Mortality Rate ": 352.6},
          {"State": "AZ", "StateName": "Arizona", "Heart Disease Mortality Rate ": 211.5},
          {"State": "CA", "StateName": "California", "Heart Disease Mortality Rate ": 227.5},
          {"State": "CO", "StateName": "Colorado", "Heart Disease Mortality Rate ": 197.1},
          {"State": "CT", "StateName": "Connecticut", "Heart Disease Mortality Rate ": 230.8},
          {"State": "DE", "StateName": "Delaware", "Heart Disease Mortality Rate ": 265.8},
          {"State": "FL", "StateName": "Florida", "Heart Disease Mortality Rate ": 227},
          {"State": "GA", "StateName": "Georgia", "Heart Disease Mortality Rate ": 276.8},
          {"State": "HI", "StateName": "Hawaii", "Heart Disease Mortality Rate ": 190.2},
          {"State": "ID", "StateName": "Idaho", "Heart Disease Mortality Rate ": 228.5},
          {"State": "IL", "StateName": "Illinois", "Heart Disease Mortality Rate ": 261},
          {"State": "IN", "StateName": "Indiana", "Heart Disease Mortality Rate ": 284.6},
          {"State": "IA", "StateName": "Iowa", "Heart Disease Mortality Rate ": 251.7},
          {"State": "KS", "StateName": "Kansas", "Heart Disease Mortality Rate ": 236.5},
          {"State": "KY", "StateName": "Kentucky", "Heart Disease Mortality Rate ": 310.4},
          {"State": "LA", "StateName": "Louisiana", "Heart Disease Mortality Rate ": 330.4},
          {"State": "ME", "StateName": "Maine", "Heart Disease Mortality Rate ": 227.5},
          {"State": "MD", "StateName": "Maryland", "Heart Disease Mortality Rate ": 264.7},
          {"State": "MA", "StateName": "Massachusetts", "Heart Disease Mortality Rate ": 211.8},
          {"State": "MI", "StateName": "Michigan", "Heart Disease Mortality Rate ": 311.3},
          {"State": "MN", "StateName": "Minnesota", "Heart Disease Mortality Rate ": 173.1},
          {"State": "MS", "StateName": "Mississippi", "Heart Disease Mortality Rate ": 361.9},
          {"State": "MO", "StateName": "Missouri", "Heart Disease Mortality Rate ": 298.7},
          {"State": "MT", "StateName": "Montana", "Heart Disease Mortality Rate ": 224},
          {"State": "NE", "StateName": "Nebraska", "Heart Disease Mortality Rate ": 222},
          {"State": "NV", "StateName": "Nevada", "Heart Disease Mortality Rate ": 284.2},
          {"State": "NM", "StateName": "New Mexico", "Heart Disease Mortality Rate ": 223.6},
          {"State": "NH", "StateName": "New Hampshire", "Heart Disease Mortality Rate ": 229.7},
          {"State": "NJ", "StateName": "New Jersey", "Heart Disease Mortality Rate ": 262.4},
          {"State": "NY", "StateName": "New York", "Heart Disease Mortality Rate ": 291},
          {"State": "NC", "StateName": "North Carolina", "Heart Disease Mortality Rate ": 248.6},
          {"State": "ND", "StateName": "North Dakota", "Heart Disease Mortality Rate ": 231.6},
          {"State": "OH", "StateName": "Ohio", "Heart Disease Mortality Rate ": 291},
          {"State": "OK", "StateName": "Oklahoma", "Heart Disease Mortality Rate ": 355.7},
          {"State": "OR", "StateName": "Oregon", "Heart Disease Mortality Rate ": 199.2},
          {"State": "PA", "StateName": "Pennsylvania", "Heart Disease Mortality Rate ": 273.4},
          {"State": "RI", "StateName": "Rhode Island", "Heart Disease Mortality Rate ": 247.2},
          {"State": "SC", "StateName": "South Carolina", "Heart Disease Mortality Rate ": 269.8},
           {"State": "SD", "StateName": "South Dakota", "Heart Disease Mortality Rate ": 222.2},
           {"State": "TN", "StateName": "Tennessee", "Heart Disease Mortality Rate ": 315.8},
           {"State": "TX", "StateName": "Texas", "Heart Disease Mortality Rate ": 262.2},
           {"State": "UT", "StateName": "Utah", "Heart Disease Mortality Rate ": 241.8},
           {"State": "VT", "StateName": "Vermont", "Heart Disease Mortality Rate ": 232.7},
           {"State": "VA", "StateName": "Virginia", "Heart Disease Mortality Rate ": 244.3},
           {"State": "WA", "StateName": "Washington", "Heart Disease Mortality Rate ": 205.1},
           {"State": "WV", "StateName": "West Virginia", "Heart Disease Mortality Rate ": 311.2},
           {"State": "WI", "StateName": "Wisconsin", "Heart Disease Mortality Rate ": 239.2},
           {"State": "WY", "StateName": "Wyoming", "Heart Disease Mortality Rate ": 233}
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
               "title": "Heart Disease Mortality Rate (Female)"
             }
           },
       "color": {
         "field": "Heart Disease Mortality Rate ",
         "scale": {
            "field": "Heart Disease Mortality Rate ",
            "domain": [301,430,565],
            "type" : "threshold",
            "range": [GREEN,GREEN,YELLOW,YELLOW,RED,RED]

          },
         "type": "quantitative",
          "legend": {
            "title" : "Mortality Rate per 100K Females"

           }
        }
     },

     "config": {
          "mark": {
             "filled": true
          },
          "axis" : {
            "labelFont": "Georgia",
            "labelFontSize": 13,
            "titleFontSize": 13
          }
     }
}


var opt2 = {
  mode: "vega-lite",
  actions: false
};


vega.embed('#jumpoffchart', heartDiseaseOverallSpec, opt2, function(error, result) {
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
        title: "Mortality Rate ",
        formatType : "number"


      }
    ],
    delay: 50,
    colorTheme: "light"
  };
  vegaTooltip.vegaLite(result.view, heartDiseaseOverallSpec,tooltipOption);
  });

vega.embed('#jumpoffchart2', heartDiseaseOverallSpec2, opt2, function(error, result) {
  // result.view is the Vega View, vlSpec is the original Vega-Lite specification
  var tooltipOption2 = {
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
  vegaTooltip.vegaLite(result.view, heartDiseaseOverallSpec2,tooltipOption2);
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
