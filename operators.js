//arthemic operators

let x=7,y=3;

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//assignment operators
let z=10;
z+=2;
console.log(z)
z*=2;
console.log(z)
z/=3;
console.log(z)
z%=5;
console.log(z)

//comparision operators
let a=10,b='10';
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a<b)
console.log(a>b)

//logical opertors
let age=70;
console.log(age>=30 && age<=50)
console.log(age>=30 || age<=50)
console.log(!(age<36))

//string operators
let firstname='KOLLI'
let lastname='DINESH'
let fullname=firstname+" "+lastname;
console.log(fullname)
let correctname=`HELLO ${firstname} ${lastname}, WELCOME TO DEVASTRA`
console.log(correctname)

//ternary operators
let myage=12;
if (myage>=17){
    console.log('ELIGIBLE TO VOTE')
}
else{
    console.log('YOU CANNOT VOTE')
}

let result=myage>=17 ? 'ELIGIBLE TO VOTE':'YOU CANNOT VOTE'
console.log(result)

//increment and decrement operators
let count = 10;
console.log(count++)
console.log(count)
console.log(++count)
 
//typeof operators
console.log(typeof count)
console.log(typeof 'DINU')
console.log(typeof 19)
