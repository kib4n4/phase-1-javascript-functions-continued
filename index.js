// code your solution here
// implementing a function called saturdayFun

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
//implementing a function expression calledMonday work
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  //implemnting a function called wrapAdjective
  function wrapAdjective(flair = "*") {
    return function(adjective="special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  };
  