
var RED = "#FF0000",
    YELLOW = "#FFA000" //"#FFCC00",
    GREEN = "#228B22";


var opt = {
  "renderer": "canvas",
  "actions": {
    "export": false,
    "source": false,
    "editor": false
  }
}

var opt2 = {
  mode: "vega",
  actions: false
};

var tooltipOptions = {
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
  colorTheme: "dark"
};


var povertySpec = "data/overallpoverty.json";

vega.embed('#stemVis', povertySpec, opt2,function(error, result,tooltipOptions) {
  // result.view is the Vega View
  vegaTooltip.vega(result.view, tooltipOptions);
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
