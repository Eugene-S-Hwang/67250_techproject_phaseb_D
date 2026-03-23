// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);

// var A = "Hello ";
// var B = "World";
// var C = A + B;
// console.log(C);

// function sumnPrint(x1, x2) {
//     console.log(x1 + x2);
// }

// sumnPrint(x, y);
// sumnPrint(A, B);

// if (C.length > z) {
//     console.log(C);
//     if(C.length < z){
//         console.log(z);
//     }
// } else {
//     console.log("good job!");
// }

// var L1 = ["Watermelon","Pineapple","Pear","Banana"];
// var L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana(lst) {
//     lst.forEach(element => {
//         if(element == "Banana"){
//             alert("Banana found");
//         }
//     });
// }

// findTheBanana(L1);
// findTheBanana(L2);

var now = new Date();
var hour = now.getHours();

function greeting(hr){
    if(!document.getElementById("greeting")){
        return;
    }
    if(hr < 5 || hr >= 20){
        document.getElementById("greeting").innerHTML = "Good night.";
    }
    else if(hr < 12){
        document.getElementById("greeting").innerHTML = "Good morning.";
    }
    else if(hr < 18){
        document.getElementById("greeting").innerHTML = "Good afternoon.";
    }
    else{
        document.getElementById("greeting").innerHTML = "Good evening."
    }
}

greeting(hour);

function addYear(){
    if(!document.getElementById("copyYear")){
        return;
    }

    var year = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = String(year) + " Monomuse. All rights reserved."
}