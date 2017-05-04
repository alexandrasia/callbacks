function findWaldo(arr, found) {
  arr.forEach(function (name, i) {
    if (name === "Waldo"){
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at index %d!", i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);