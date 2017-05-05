var myNumberArray = [ 1, 3, 5, 7, 9];

function map (arr, addTwo) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];
    result.push(addTwo(currentNumber));
  }
  return result;
}

console.log(map(myNumberArray, function(currentNumber) {
  return currentNumber + 2;
}));