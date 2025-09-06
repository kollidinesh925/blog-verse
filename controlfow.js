let marks = 90;
if (marks>=100){
    console.log('A+')
}
else if (marks>=80){
    console.log('A grade')
}
else if (marks>=70){
    console.log(' B grade')
}
else{
    console.log('fail')
}
let day=5;
switch(day){
    case 1:
        console.log('MONDAY') 
    case 2:
        console.log('TUESDAY')
    case 3:
        console.log('WEDNESDAY')
    case 4:
        console.log('THURSDAY')
    case 5:
        console.log('FRIDAY')
    case 6:
        console.log('SATURDAY')
    case 7:
        console.log('SUNDAY')
}
 
let colors = ['red','blue','green'];
for (let i=0;i<colors.length;i++){
    console.log(colors[i])
}
let person={
    name:'DINESH',
    age:20,
    city:'VIZIANAGARAM'
}
for (let key in person){
    console.log(`${key}:${person[key]}`)
}
for (let i=5;i>=0;i--){
    if (i===2){
        countinue;
    }else if(i===2){
        break;
    }
    console.log(i)
}
