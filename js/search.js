Search = function(){
};

Search.prototype.doSearch = function(manufacturer) {
  $.get('https://bikeindex.org:443/api/v2/bikes_search/count?manufacturer=' + manufacturer + '&proximity=45.521728%2C-122.67326&proximity_square=100&stolen_before=1470297600&stolen_after=1438675200').then(function(response) {
    console.log(response);
    $('.results').text("Over the past year there were " + response.proximity + " " + manufacturer + " bikes stolen in Portland.");
  }).fail(function(error) {
    $('.results').text(error.response.message);
  });
};

exports.searchModule = Search;
