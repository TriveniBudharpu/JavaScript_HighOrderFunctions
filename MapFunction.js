function isEven(x)
{
  return x%2==0;
}
function isOdd(x)
{
  return x%2==1;
}
function sqrt(x)
{
  return Math.sqrt(x);
}
function square(x)
{
  return x*x;
}
function incrementBy2(x)
{
  return x+2;
}
function map(arr,fun)
{
  let res=[]
  for (var i = 0; i < arr.length; i++) {
    res.push(fun(arr[i]));
  }
  return res;
}
let inp=[1,2,3,4,5];
let isEvenResult=map(inp,isEven);
let isOddResult=map(inp,isOdd);
let sqrtResult=map(inp,sqrt);
let squareResult=map(inp,square);
let incrementBy2Result=map(inp,incrementBy2);
console.log("The original list is :");
console.log(inp);
console.log("The Even Result of list is :");
console.log(isEvenResult);
console.log("The Odd Result of list is :");
console.log(isOddResult);
console.log("The Sqrt Result of list is :");
console.log(sqrtResult);
console.log("The Square Result of list is :");
console.log(squareResult);
console.log("The Increment BY 2 Result of list is :");
console.log(incrementBy2Result);
