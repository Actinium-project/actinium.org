$(function() {
  $.getJSON('https://api.actinium.org/v1/acm/price', function(price) {

$('#price').countTo({
  from: 0,
  to: price.price*100000000 ,
  speed: 3000,
  refreshInterval: 80,
  formatter: function (value, options) {
    return value.toFixed(options.decimals);
  },
  onUpdate: function (value) {
    console.debug(this);
  },
  onComplete: function (value) {
    console.debug(this);
  }
});

})
});

$(function() {
  $.getJSON('https://api.actinium.org/v1/acm/fiatprice', function(fiatprice) {

$('#fiatprice').countTo({
  from: 0,
  to: fiatprice.USD ,
  speed: 3000,
  refreshInterval: 80,
  decimals: 2,
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  },
  onUpdate: function (value) {
    console.debug(this);
  },
  onComplete: function (value) {
    console.debug(this);
  }
});

})
});

$(function() {
  $.getJSON('https://api.actinium.org/v1/acm/marketcap', function(marketcap) {

$('#marketcap').countTo({
  from: 0,
  to: marketcap.USD,
  speed: 3000,
  refreshInterval: 80,
  decimals: 0,
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  },
  onUpdate: function (value) {
    console.debug(this);
  },
  onComplete: function (value) {
    console.debug(this);
  }
});

})
});

$(function() {
  $.getJSON('https://api.actinium.org/v1/acm/supply', function(supply) {

$('#supply').countTo({
  from: 0,
  to: supply.total,
  speed: 3000,
  refreshInterval: 80,
  decimals: 0,
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  },
  onUpdate: function (value) {
    console.debug(this);
  },
  onComplete: function (value) {
    console.debug(this);
  }
});


})
});

$(function() {
$.getJSON('https://api.actinium.org/v1/acm/hashrate', function(hashrate) {

$('#hashrate').countTo({
  from: 0,
  to: hashrate.gh*1000 ,
  speed: 3000,
  refreshInterval: 80,
  decimals: 2,
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  },
  onUpdate: function (value) {
    console.debug(this);
  },
  onComplete: function (value) {
    console.debug(this);
  }
});

})
});


$(function() {
$.getJSON('https://api.actinium.org/v1/acm/blockcount', function(blockcount) {



$( "#blocks_left" ).append( 55000 - blockcount.blockcount );
})
});
