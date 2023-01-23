

// window.alert("Hello From JS File");

// document.write("<h1>Hello <span>Page</span></h1>");

// console.log("Hello From JS File");

// console.log("Log");
// console.error("Error");
// console.table(["Osama", "Ahmed", "Sayed"]);

// console.log("Hello From %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px")

// console.log("Mohanad Maher");
// console.log(typeof "Mohanad Maher");
// console.log(typeof 5000 );
// console.log(typeof [10, 15, 20]);
// console.log(typeof ["sc","df","sd"]);
// console.log(typeof {name:'Mohanad', age:25, country: 'Eg'});
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);

// var user = "Mohanad" , age=17;
// console.log(user);
// console.log(age);

// console.log(hello);
// hello.innerHTML="Option";


// console.log("Mohanad\nMaher");
// let a= "I Love";
// let b= "Barcelona";
// console.log(a+b);
// document.write(a + " " + b);

// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";

// console.log(a + " " + b + 
// "\n" + c + " " + d);

// console.log(`${a} ${b}
// ${c} ${d}`)

// let title = "Elzero";
// let desc= "Elzero Web School";

// let markup = `
//   <div class="card">
//     <div class="child">
//         <h2>${title}</h2>
//         <p>${desc}</p>
//     </div>
//   </div>
// `;

// document.write(markup);




// let theTitle="Elzero" , 
//     theDesc= "Elzero Web School" , 
//     theDate="25/10";

// let markup = `
//     <div class="card">
//         <div class="child">
//             <h3>${theTitle}</h3>
//             <p>${theDesc}</p>
//             <span>${theDate}</span>
//         </div>    
//     </div>
// `;

// document.write(`${markup.repeat(4)}`);

// console.log(34 % 2);

// console.log(+100);
// console.log(+"100");
// console.log(-"-100");

// let a = "10";
// let b = 20;
// let c = true;

// console.log(+a + b);

// let a = 10;
// a += 90;

// console.log(a);

// let a = "-100";
// let b = "20";
// let c = 30;
// let d = true;

// console.log(-a * +b); //2000
// console.log(-a + +b*2 + c + d); //173


// console.log(100.55555.toFixed(2));

// console.log(Math.floor(100.5));


// console.log(theName.toUpperCase());
// console.log(theName.trim().length);

// let theName="mohanad";
// let theName2= theName.slice(1);
// console.log(theName.charAt(0).toUpperCase());

// console.log(theName.charAt(0).toUpperCase()+theName2);

// console.log(typeof console.log);

// function sayHello(userName){
//     // console.log(`Hello ${userName}`);
//     return `Hello ${userName}`;
// }

// let result = sayHello("Mohanad");
// console.log(result);

// function generateYear(start , end , exlude){
//     for(let i=start; i<=end; i++){
//         if(i === exlude){
//             continue;
//         }
//         console.log(i);
//     }
// }

// generateYear(1982,2021,2009);

// function calc(...numbers){
//     // console.log(Array.isArray(numbers));
//     let result=0;
//     for(let i = 0 ; i<numbers.length; i++)
//     {

//         // console.log(numbers[i]);
//         result += numbers[i];
        
//     }
//     console.log(result)
// }

// console.log(calc(10,20,10,30,50));


// function showDetails(a, b, c){
//     // console.log(typeof a);
//     // console.log(typeof b);
//     // console.log(typeof c);
//     let A,B,C,Hire;
//     if(typeof(a) === 'string'){
//         A=a;

//         if(typeof(b) === 'number'){
//             B=b;
//             C=c;
//         }
//         else if(typeof(c) === 'number'){
//             B=c;
//             C=b;
//         }

//         if(C === true)
//         {
//             Hire= "Available";
//         }
//         else{
//             Hire="Not Available";
//         }
//     }
// // ------------------------------------
//     else if(typeof(b) === 'string')
//     {
//         A=b;

//         if(typeof(a) === 'number'){
//             B=a;
//             C=c;
//         }
//         else if(typeof(c) === 'number'){
//             B=c;
//             C=a;
//         }

//         if(C === true)
//         {
//             Hire= "Available";
//         }
//         else{
//             Hire="Not Available";
//         }
//     }
// // ------------------------------------
//     else if(typeof(c) === 'string')
//     {
//         A=c;

//         if(typeof(b) === 'number'){
//             B=b;
//             C=a;
//         }
//         else if(typeof(c) === 'number'){
//             B=a;
//             C=b;
//         }

//         if(C === true)
//         {
//             Hire= "Available";
//         }
//         else{
//             Hire="Not Available";
//         }
//     }
//     // -----------------------------------
//     console.log(`Hello ${A} , Your Age Is ${B}, You Are ${Hire} For Hire`);
// }


// showDetails("Osama", 38, false);
// showDetails(38, "Osama", false);
// showDetails(true, 38, "Osama");
// showDetails(true,"Osama", 38);


// let names = function(...theNames){
//     for(let i=0; i<theNames.length; i++)
//     {
//         // console.log(theNames[i]);
//         return theNames[i];
//     }
    
// };

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// let myNums = [1, 2, 3, 4, 5, 6];
// let newArray= [];

// for(let i = 0; i < myNums.length; i++)
// {
//     newArray.push(myNums[i]*2);
// }


// console.log(newArray);

// let addSelf = myNums.map(function(element, index, arr) {
    // return element + element;
// }, 10)
// 
// console.log(addSelf);


// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

// function addition(ele)
// {
//     return ele + ele;
// }

// let add = myNums.map(addition);
// console.log(add);


// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases.split("").map(function (ele){
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
// }).join("");

// console.log(sw);

// let inv = invertedNumbers.map(function(ele) {
//     return -ele;
// });

// console.log(inv);


// let ig = ignoreNumbers.split("").map(function(ele){
//     return isNaN(parseInt(ele)) ? ele : "" ;
// }).join("");

// console.log(ig);

//Reduce : bt2bl 7agten (call back function, initial value)
// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function(acc, current, index, arr){
//     return acc + current;
// }, 5);

// console.log(add);


// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

// let check = theBiggest.reduce(function(acc, current){
//     return acc.length > current.length ? acc : current;
// });

// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O",];

// let finalString = removeChars.filter(function(ele){
//     return !ele.startsWith("@");
// }).reduce(function(acc, current){
//     return `${acc}${current}`
// });

// console.log(finalString);


// let myString= "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let finalString = myString.split("").map(function(ele){
//     return isNaN(parseInt(ele))? ele : ""
// }).map(function(ele){
//     return ele === "," ? "" : ele
// }).join("");
// console.log(finalString);



// let user = {
//     // Properties
//     theName: "Mohanad",
//     theAge: 25,
//     // Methods
//     sayHello: function () {
//         return `Hello`;
//     }
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());

let myVar = "country";

let user = {
    theName: "Mohanad",
    country: "Egypt",
};

console.log(user.theName);
console.log(user.country);
console.log(user[myVar]);
