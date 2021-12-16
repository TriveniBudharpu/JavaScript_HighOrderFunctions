function printItemIndex(item,index,arr)
{
  console.log("Index-"+index+"  Item-"+item);
}
function calculateSum(item,index,arr)
{
  sum+=item;
}
function incrementElementsBy2(item,index,arr)
{
  arr[index]=item+2;
}
function forEach(arr,fun)
{
  for (var i = 0; i < arr.length; i++) {
    fun(arr[i],i,arr);
  }
}
let inp=[100,45,3,2,15];
let sum=0;
console.log("The list is:");
console.log(inp);
console.log("Print elements with indexes:")
forEach(inp,printItemIndex);
forEach(inp,calculateSum);
console.log("The sum is:"+sum);
forEach(inp,incrementElementsBy2);
console.log("Incrementing all elements by2 in same list:");
console.log(inp);
