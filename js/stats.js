$(function() {
  $.getJSON('https://actinium.org:3000/v1/acm/price', function(price) {

$( "#price" ).attr( "data-to", price.price*100000000 );
$( "#volume" ).attr( "data-to", price.volume );

})
});

$(function() {
  $.getJSON('https://actinium.org:3000/v1/acm/price', function(volume) {

$( "#volume" ).attr( "data-to", volume.volume );

})
});

$(function() {
  $.getJSON('https://actinium.org:3000/v1/acm/marketcap', function(marketcap) {

$( "#marketcap" ).attr( "data-to", marketcap.USD );

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
