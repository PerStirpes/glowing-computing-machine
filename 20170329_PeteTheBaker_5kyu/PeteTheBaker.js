function cakes(recipe, available) {
  /* need to loop through recipe and calc 
  available/recipe, then find min of all ratios */
  var cakes = {}; 
  for(var items in recipe) {
    if(items in available) {
        cakes[items] = Math.floor(available[items] / recipe[items]);
    } else {
    return 0;
    }
  }
  var minCakes = 1000000; // assume super high by default
  for(var items in recipe) {
    if(cakes[items] < minCakes) {
      minCakes = cakes[items]; // set to lowest value
    }
  }
  return minCakes;
}

/* best practices:

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}

-----or-----

function cakes(recipe, available) {
  var numCakes = [];
  
  for(var key in recipe){
    if(recipe.hasOwnProperty(key)){
      if(key in available){
        numCakes.push(Math.floor(available[key] / recipe[key]));
      }else{
        return 0;
      }
    }
  }
  
  return Math.min.apply(null, numCakes); 
  
}

*/