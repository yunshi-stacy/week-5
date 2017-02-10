/* =====================
   You should NOT need to change this file (though you are not forbidden from doing so)
===================== */

/* =====================
  Call getAndParseData to grab our dataset through a jQuery.ajax call ($.ajax)
===================== */
var dataset;
dataset = $.ajax('https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-solar-installations.json')
  .done(function(data){
    dataset = JSON.parse(data);
  });


/* =====================
  The code here is triggered when you click on the button with ID #my-button
  ALL functions called here will be called EVERY time a click event fires
===================== */
$('button#my-button').click(function(e) {
  numericField1 = $('#num1').val();
  console.log("numericField1", numericField1);

  numericField2 = $('#num2').val();
  console.log("numericField2", numericField2);

  booleanField = $('#boolean')[0].checked;
  console.log("booleanField", booleanField);

  stringField = $('#string').val();
  console.log("stringField(unused)", stringField);


  /* =====================
    Call our resetMap function to remove markers from the map and clear out the array of marker
    objects
  ===================== */
  resetMap();
  /* =====================
    Call our plotData function. It should plot all the markers that meet our criteria
  ===================== */
  plotData(dataset);

});
