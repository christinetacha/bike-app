var List = require('./../js/list.js').listModule;

$(document).ready(function() {
  $('#seeList').click(function(event){
  var listObject = new List();
  listObject.getList();
  });
});
