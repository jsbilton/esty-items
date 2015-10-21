console.log("Your code goes in this document.");

// _.times(100, function() {
//   console.log("hi");
// });




//   #1   PRICE AVERAGE from items find price
var howMuch = items.length;
var sum = 0;
items.forEach(function(elem,idx,arr){
  // console.log(elem.price);
  sum += elem.price
});
console.log(sum/howMuch);

var averagePriceOfItems = sum/howMuch;
var finalPrice = Math.floor(averagePriceOfItems);


  $('#answer1').text(finalPrice);


//  #2  Array Price 14-18 USD



// var arrPrices = _.pluck(items, "USD");
// _.map(items, "price", ["USD"])
// this outputs all the prices including the GBP





// #3  GBP currency_code title and price


//from items: GBP, currency_code, title, price

var kindaMoney = items.filter(function(currItem) {
  return currItem.currency_code === "GBP";
});
var typaMoney = kindaMoney.map(function(currItem){
  return[currItem.title, currItem.price]
});

// var kindaMoney = _.filter(items, function(currItem){
//    return currItem.currency_code === "GBP";
//   });
//
// var typaMoney = _.map(kindaMoney), function(currItem){
//     return [currItem.title,currItem.price];
//   });

document.querySelectorAll('#answer3').innerHTML += typaMoney;
// $("answer3").text(typaMoney);


// #4  Wood and Materials

var jamesDean = items.filter(function(cool){
  return _.contains[cool.materials, "wood"];
});

var dennisHopper = jamesDean.map(function(cool){
  return 

})
// #5  8 materials title


// #6 items made by seller, who made them, seller made them

var ozzyTheDog = items.filter(function(woof) {
  return woof.who_made === "i_did";
});

var luluTheDog = items.map(function(woof){
  return [woof.who_made,woof.i_did]
});
