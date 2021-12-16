function byEven(x)
{
  return x%2==0;
}
function byOdd(x)
{
  return x%2==1;
}
function byGreaterThan3(x) {
  return x>3;
}
function byPrimes(x)
{
  let j=3;
  if(x<2)
  return false;
  if(x==2 || x==3)
  return true;
  if(x%2==0)
  return false;
  while(j<x)
  {
    if(x%j==0)
    return false;
    j=j+2;
  }
  return true;
}
function filter(arr,fun)
{
  let res=[]
  for (var i = 0; i < arr.length; i++) {
    if(fun(arr[i]))
    {
      res.push(arr[i]);
    }
  }
  return res;
}
let inp=[1,2,3,4,5,17,19,6];
let evenResult=filter(inp,byEven);
let oddResult=filter(inp,byOdd);
let greaterThan3Result=filter(inp,byGreaterThan3);
let primeResult=filter(inp,byPrimes);
console.log("The original list is :");
console.log(inp);
console.log("The filter of even numbers in list is :");
console.log(evenResult);
console.log("The filter of odd numbers in list is :");
console.log(oddResult);
console.log("The filter of  numbers greater than 3 in list is :");
console.log(greaterThan3Result);
console.log("The filter of  prime numbers in list is :");
console.log(primeResult);
