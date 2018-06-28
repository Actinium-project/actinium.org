$(function() {
  $.getJSON('https://actinium.org:3000/v1/acm/price', function(price) {

$( "#price" ).attr( "data-to", price.buy*100000000 );

})
});

$(function() {
	$.getJSON('https://actinium.org:3000/v1/acm/supply', function(supply) {

$( "#supply" ).attr( "data-to", supply.total );

})
});

$(function() {
$.getJSON('https://actinium.org:3000/v1/acm/hashrate', function(hashrate) {

$( "#hashrate" ).attr( "data-to", hashrate.gh );

})
});
