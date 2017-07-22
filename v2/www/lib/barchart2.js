
var opt = {
  mode: "vega",
  actions: false
};
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
