function getSum(total,x)
{
  return total+ Math.round(x);
}
function reduce(arr,fun,initialValue)
{
  if(arr.length==0)
  {
    if(typeof(initialValue)=="undefined")
    return;
    return initialValue;
  }
  let total =initialValue || 0;
  for (var i = 0; i < arr.length; i++) {
    total = fun(total,arr[i]);
  }
  return total;
}
let inp=[2,3,4,5,5.7,2.2];
console.log("The list is:");
console.log(inp);
console.log("The sum with initialValue 0 is "+reduce(inp,getSum,0));
console.log("The sum with initialValue 100 is "+reduce(inp,getSum,100));
console.log("The sum without initialValue is "+reduce(inp,getSum));
let inp1=[];
console.log("the empty list is:");
console.log(inp1);
console.log("The sum with initialValue 0 is "+reduce(inp1,getSum,0));
console.log("The sum with initialValue 100 is "+reduce(inp1,getSum,100));
console.log("The sum without initialValue is "+reduce(inp1,getSum));
