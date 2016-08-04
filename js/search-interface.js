var Search = require('./../js/search.js').searchModule;

$(document).ready(function() {
  var searchObject = new Search();
  $('#bikeBrand').submit(function(event){
    event.preventDefault();
    var manufacturer = $("input[name=exampleRadios]:checked").val();
    console.log(manufacturer);
    searchObject.doSearch(manufacturer);
  });
});
