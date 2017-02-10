/* =====================
Lab 2, part3: a full application

We're going to use the skills we've just been practicing to write a full application
which is responsive to user input.
At your disposal are a set of global variables which track user input (see
part3-main.js and part3-setup.js for more details on how this is done — we'll
cover this topic at a later date). Their values will be logged to console to
aid in debugging.

In this lab, which is very much open-ended, your task is to use the value of
these variables to define the functions below. Try to come up with interesting
uses of the provided user input.

Some ideas:
There are two numeric fields: can you write this application so as to filter
using both minimum and maximum?
There is a boolean field: can you write your code to filter according to this
boolean? (Try to think about how you could chop your data to make this meaningful.)
There is a string field: can you write your code to filter/search based on user
input?

Remember, this is open-ended. Try to see what you can produce.
===================== */

/* =====================
Define a resetMap function to remove markers from the map and clear the array of markers
===================== */
var resetMap = function() {
  map.eachLayer(function (layer) {
    if(layer !== Stamen_TonerLite){
      map.removeLayer(layer);
    }
  });
  /* =====================
  Fill out this function definition
  ===================== */
};


/* =====================
Define a getAndParseData function to grab our dataset through a jQuery.ajax call ($.ajax). It
will be called as soon as the application starts. Be sure to parse your data once you've pulled
it down!
===================== */
var getAndParseData = function() {
  $.ajax('https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-solar-installations.json')
  .done(function(data){
    return JSON.parse(data);
  });
};


/* =====================
Call our plotData function. It should plot all the markers that meet our criteria (whatever that
criteria happens to be — that's entirely up to you)
===================== */
//Criteria: filter the zipcode by user input
var filterZIPCODE = function(data){
  data = _.filter(data, function(item){
    return (item.ZIPCODE <= numericField2 && item.ZIPCODE >=numericField1);
  });
  console.log(data);
  return data;
};

//Criteria: filter the building by YEARBUILT
var filterYEARBUILT = function(data){
  data = _.filter(data, function(item){
    if ( booleanField === true){
      return (item.YEARBUILT > 2005);
    } else {return true;}
  });
  return data;
};

var plotData = function(data){
  var filtered =filterZIPCODE(data);
  filtered = filterYEARBUILT(data);
  _.each(data, function(item){
    L.marker([item.LAT,item.LONG_]).addTo(map);
  });
};
