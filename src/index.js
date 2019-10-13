function devideBy(number, divider){
  let divideRes = 0;
  let stepRes = number;

  while ((stepRes % divider) === 0 && stepRes > 0){
    divideRes++;
    stepRes /= divider;
  }
  return divideRes;
}

function findZeros(number, step){
  let divide5 = 0;
  let divide2 = 0;

  while(number > 0){
    divide5 += devideBy(number, 5);
    divide2 += devideBy(number, 2); 
    number -= step;
  }
  return {two: divide2, five: divide5};
}


function splitNumber(string, indexEnd){
  return +string.substring(0, indexEnd)
}


module.exports = function zeros(expression) {
  const parseArr = expression.split('*');
  let res = {two: 0, five: 0};
  parseArr.forEach(item => {
    const searchSign = item.indexOf('!!');
    const step = searchSign === -1 ? 1 : 2;
    const endPos = searchSign === -1 ? item.length-1 : searchSign;
    const number = splitNumber(item, endPos);
    const {two, five } = findZeros(number, step);
    res.two += two;
    res.five += five;
  });

  return Math.min(+res.five, +res.two);
  
}
