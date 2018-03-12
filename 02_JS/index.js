"use strict";
(function getSum(str){
  var regexp = /([+-]?[\d]+[.]?[\d]*|[*/+-])/gi;
  var arr = str.match(regexp);
  return console.log(arr.reduce((acc, el, i, arr)=>{
    if(el === '+'){
      return +acc + +arr[i+1];
    } else if(el === '-'){
      return +acc - arr[i+1];
    } else if(el === '/'){
      return acc / arr[i+1]
    } else if(el === '*') {
      return acc * arr[i+1]
    } else {
      return acc;
    }
  }));

})("12gdsajh + 1dhsag - 3jasdasf * -1dahjsh / 2hasdk");
