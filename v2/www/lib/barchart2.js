
var opt = {
  mode: "vega",
  actions: false
},
spec = "data/malechart2.json";

vega.embed('#jumpoffchart', spec, opt,function(error, result,opt) {
  // result.view is the Vega View
  vegaTooltip.vega(result.view, opt);
});


spec2 = "data/femalechart2.json";

vega.embed('#jumpoffchart2', spec2, opt,function(error, result,opt) {
  // result.view is the Vega View
  vegaTooltip.vega(result.view, opt);
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
