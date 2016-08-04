List = function(){
};

List.prototype.getList = function() {
  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=1000&proximity=45.521728%2C-122.67326&proximity_square=100&stolen_before=1470297600&stolen_after=1467619200').then(function(response) {
    response.bikes.forEach(function(bike){
      $('#bikeList').append("<li>" + bike.title + "</li>");
    });
  }).fail(function(error) {
    $('#bikeList').text(error.response.message);
  });
};

exports.listModule = List;
