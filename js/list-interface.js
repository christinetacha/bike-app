var List = require('./../js/list.js').listModule;

$(document).ready(function() {
  var listObject = new List();
  $('#listBikes').click(function(event){
    listObject.getList();
  });
});
