//non parameterize function 
///....................................

// function fname(){
// var a =10;
// var b = 20;
// let c = a+b;

// console.log(c)
// }
// fname();
//.......................................
//parameterize function


// function product(a , b ){
//     let c = a*b;
//     console.log( c )
// } 
// product(10 , 20 );
//...............................
//Anonymous function

// var add = function( a,b, name){
//     let c = a+b ;
//     console.log(c, name)
// }
// add(12,14, "Mohita")
//.....................................

//arrow function 

// let divide = (a,b)=>{
//     console.log(a/b)
// }
// divide(10,5);

//................................

//there are three data types are used in nodejs
//1.) var 2.) let 3.) const
// var :- variables are declared with var are the function scope and value can be reasigned .for example 
// var a = 6;
// function show(){
//     var a = 7;
    
// console.log(a)
// };
// console.log(a)
// show();

//............................

//let :- it is cannot be redeclares . it must be declare before use . it is a block of scope.
// let a = 5;
// function display(){
//     let a = 6;
//    // let a = 8;
//     console.log(a)
// }
// console.log(a)
// display();

//...................................
//const :- const cannot be redeclared ,cannot be reassigned or have block of scope .
const a = 100;
function show1(){
    const a = 200;
    a= 300;
    console.log(a)
}
show1();



