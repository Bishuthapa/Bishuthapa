let gameNum=25;
let userNum=prompt("Guss the gameNum:");
while (userNum!=gameNum)
{
    userNum=prompt("You gussed the wrong number, Plese try another number.");

}
console.log("Congrulaton, you entered the right number.");

let cities =  ["KTM", "POkHERA", "BRT"];
for (let city of cities){
    console.log(city);

let number= [20,45,65,89,81,64];
let sum=0,i;
for(let val of number)
{
    sum=sum+val;
}
console.log(sum);
let avg;
avg=sum/number.length;
console.log(`The average number of the class is ${avg}`);
}
let x=[50, 60,70,33,66,40,60];
let sum=0;
for(let val of x)
{
    sum=sum+val;
}
console.log(`The sum is: ${sum}`);
let avg;
avg=sum/x.length;
console.log(`The average of the sume : ${sum} is ${avg}.`);

let x=[78,89,56,45];
for(let i=0;i<x.length;i++)
{
    let offer =x[i]/10;
    x[i]-=offer;
}
console.log(x);

