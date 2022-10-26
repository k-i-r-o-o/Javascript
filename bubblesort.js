sort = () =>
{
    var arr=[1,2,3,4,5];
    for(let i in arr) // fro each index deta hai
    console.log(i);
}
sort();
sort1 = () =>
{
    var arr=[1,2,3,4,5];
    for(let i of arr) // fro each index deta hai
    console.log(i);
}
sort1();

var arr=["raunak","vinod","tuktuk","surya"];
arr.forEach(function(element,index,array){
console.log(element+"  index :  " +index+" "+array);
});