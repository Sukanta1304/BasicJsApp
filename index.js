// This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

// Information should be retrieved from localstorage only, avoid hard coding data.
let information=[
    {
     topic:"Scope",
     point1: "The context in which values and expressions are visible or can be referenced.",
     point2: "3types of scope are there in Advance JS. =>1.Global Scope, 2.Local Scope, 3. Block Scope ",
     point3: "Global Scope can be access from anywhere(inside or outside the function)",
     point4: "Variable that you declared inside a function , only can accessible inside the function ",
     point5: "Variable that you declared inside a block {} using let or const ,are accessible only to that block",
    },
    {
     topic:"Hoisting",
     point1: "Hoisting is a default behaviour of Javascript, where a variable can be used before declaring.",
     point2: "Hoisting helps to keep the attandance sheet of Javascript programme",
     point3: "Hoisting Doesn't care about variable value .It just wants to know what variable present in a programme ",
     point4: "Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.",
     point5: "Variables declared with 'let' and 'const' are also hoisted but, unlike var",
    },
    {
    topic:"Constractor Function",
    point1: "In Javascript ,when a function is used for creating object , called Constractor Function ",
    point2: "Constractor Function returns output by 'new' keyword .",
    point3: "In Contractor Function 'this' keyword refers to different objects depending on how it is used",
    point4: "To add a new property to a constructor(Object Constructor), you must add it to the constructor function",
    point5: "Adding methods to an object constructor must be done inside the constructor function",
    },
    {
    topic:"Prototype",
    point1: "Prototype is an object that is associated with every function and object by default.",
    point2: "To add new property later stages to a function 'prototype' is used.",
    point3: "Function's prototype property is accessible and modifidable and object's prototype property is not visible",
    point4: "Function's prototype property can be accessed using <function-name>.prototype.",
    point5: "You can debug and see object's or function's prototype property in chrome or firefox's developer tool.(console.log(objname.__proto__))",
    },

]

localStorage.setItem("Scope",JSON.stringify(information[0])) ;
localStorage.setItem("Hoisting",JSON.stringify(information[1])) ;
localStorage.setItem("Constructor Function",JSON.stringify(information[2]));
localStorage.setItem("Prototype",JSON.stringify(information[3])) ;

let scopedata=[];
scopedata.push(JSON.parse(localStorage.getItem("Scope")));

function scopepage(){

document.querySelector("#display").innerHTML="";

    scopedata.map(function(el){

        let box =document.createElement("div");

        let heading = document.createElement("h2");
        heading.setAttribute("class","heading");
        heading.innerText=el.topic;
        let list= document.createElement("ul") ;
        let point1= document.createElement("li") 
        point1.innerText= el.point1 ;
        let point2= document.createElement("li") ;
        point2.innerText= el.point2;
        let point3= document.createElement("li") ;
        point3.innerText= el.point3 ;
        let point4= document.createElement("li") ;
        point4.innerText= el.point4 ;
        let point5= document.createElement("li") ;
        point5.innerText= el.point5;

        let videobox= document.createElement("iframe") ;
        videobox.setAttribute("class","video") ;
        videobox.src= "scope.mp4" 
        videobox.allowFullscreen= true ;

        list.append(point1,point2,point3,point4,point5)
        box.append(heading,list,videobox)
        document.getElementById("display").append(box)
        
    });
}
// Hoisting-------->

let hoisting=[];
hoisting.push(JSON.parse(localStorage.getItem("Hoisting")));

function gotohost(){

document.querySelector("#display").innerHTML="";

    hoisting.map(function(el){

        let box =document.createElement("div");

        let heading = document.createElement("h2");
        heading.setAttribute("class","heading");
        heading.innerText=el.topic;
        let list= document.createElement("ul") ;
        let point1= document.createElement("li") 
        point1.innerText= el.point1 ;
        let point2= document.createElement("li") ;
        point2.innerText= el.point2;
        let point3= document.createElement("li") ;
        point3.innerText= el.point3 ;
        let point4= document.createElement("li") ;
        point4.innerText= el.point4 ;
        let point5= document.createElement("li") ;
        point5.innerText= el.point5;

        let videobox= document.createElement("iframe") ;
        videobox.setAttribute("class","video") ;
        videobox.src= "hoisting.mp4" 
        videobox.allowFullscreen= true ;

        list.append(point1,point2,point3,point4,point5)
        box.append(heading,list,videobox)
        document.getElementById("display").append(box)
        
    });
}

// constructor function----------->
let constructor=[];
constructor.push(JSON.parse(localStorage.getItem("Constructor Function")));

function gotocf(){

document.querySelector("#display").innerHTML="";

    constructor.map(function(el){

        let box =document.createElement("div");

        let heading = document.createElement("h2");
        heading.setAttribute("class","heading");
        heading.innerText=el.topic;
        let list= document.createElement("ul") ;
        let point1= document.createElement("li") 
        point1.innerText= el.point1 ;
        let point2= document.createElement("li") ;
        point2.innerText= el.point2;
        let point3= document.createElement("li") ;
        point3.innerText= el.point3 ;
        let point4= document.createElement("li") ;
        point4.innerText= el.point4 ;
        let point5= document.createElement("li") ;
        point5.innerText= el.point5;

        let videobox= document.createElement("iframe") ;
        videobox.setAttribute("class","video") ;
        videobox.src= "constractor function.mp4" 
        videobox.allowFullscreen= true ;

        list.append(point1,point2,point3,point4,point5)
        box.append(heading,list,videobox)
        document.getElementById("display").append(box)
        
    });
}

//  prototype--------->

let prototype=[];
prototype.push(JSON.parse(localStorage.getItem("Prototype")));

function gotopro(){

document.querySelector("#display").innerHTML="";

    prototype.map(function(el){

        let box =document.createElement("div");

        let heading = document.createElement("h2");
        heading.setAttribute("class","heading");
        heading.innerText=el.topic;
        let list= document.createElement("ul") ;
        let point1= document.createElement("li") 
        point1.innerText= el.point1 ;
        let point2= document.createElement("li") ;
        point2.innerText= el.point2;
        let point3= document.createElement("li") ;
        point3.innerText= el.point3 ;
        let point4= document.createElement("li") ;
        point4.innerText= el.point4 ;
        let point5= document.createElement("li") ;
        point5.innerText= el.point5;

        let videobox= document.createElement("iframe") ;
        videobox.setAttribute("class","video") ;
        videobox.src= "prototype.mp4" 
        // videobox.allowFullscreen= true ;

        list.append(point1,point2,point3,point4,point5)
        box.append(heading,list,videobox)
        document.getElementById("display").append(box)
        
    });
}