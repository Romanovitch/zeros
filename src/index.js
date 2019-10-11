module.exports = function zeros(expression) {
  // your solution
  function divideToBase(iNumber, base, counter){
      return (!(iNumber % base)) 
          ? divideToBase(iNumber / base, base, ++counter) 
          : counter;
  }
  function browseNumbers(factNumber, onceOrDuble, fiveCounter, twoCounter){

      fiveCounter += divideToBase(factNumber, 5, 0);
      twoCounter += divideToBase(factNumber, 2, 0);
      return (factNumber > 1 && (factNumber - onceOrDuble) > 0) 
          ? browseNumbers(factNumber - onceOrDuble, onceOrDuble, fiveCounter, twoCounter) 
          : {
              five: fiveCounter, 
              two: twoCounter
          };   
  }
  function reducer(sum, iArr){
           return [
            sum[0] = (sum[0]) ? sum[0] += iArr.five : iArr.five, 
            sum[1] = (sum[1]) ? sum[1] += iArr.two : iArr.two
           ]
  }
  function compare(){
    return 
  }
  return expression.split(/[\*]/)
    .map((el) => el.match(/(\d+)(!+)/))
    .map(iArr => iArr = browseNumbers(iArr[1], iArr[2].length, 0, 0) )  
    .reduce(reducer, 0)
    .reduce((res, iElem) => (res === false || res > iElem) ? iElem : res, false)
}
