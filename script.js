//function syntax
//parameter are set during function creation and used in the function body
// function functionName(parameters or no parameters which is leaveing it empty){ 
//     //function body nothing but instructions or logics in the function
//     return value // optional
// }
//arguments are passed during the function call for the parameters that were set during the function creation 
// functionName(arguments or no arguments which is leaveing it empty) this is how you call a function

//function declaration
function greet(name){
    console.log(`hello ${name}`)
}
greet("babypizza")


//function expreession
let greet2 = function(name){
    console.log(`hello ${name}`)
}
greet2("max")

//arrow function
//syntax for function with only one parameter
//const functioname = parameters => instructions/ block of code / logic ;
//syntax for function with more than one parameter
//const functioname = (parameters) => {instructions/ block of code / logic} ;
// =>
const greet3 = name => console.log(`hello ${name}`);
greet3("papamama")

//add function

//function expression
let add = function(x,y){
    let result = x+y;
    console.log(result)
}
add(978654,465847362)
//function decleration
function add2(x,y){
    let result = x+y;
    console.log(result)
}
add(24,53)
//arrow function
const add3 = (x,y)=>{ let result = x+y; console.log(result)}
add3(43,66)