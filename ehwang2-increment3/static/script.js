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

function randomInt(length){
    return Math.floor(Math.random() * length);
}

function randomMessage(){
    var messages = ["The first digital artwork ever sold at auction dates back to the 1960s—long before personal computers were common.",
    "Some modern AI-generated artworks are trained on millions of images, meaning a single piece can contain influences from centuries of art history.", 
    "The average museum visitor spends less than 30 seconds looking at a single artwork—interactive exhibits can increase that time dramatically.",
    "Early computer artists had to write code by hand to “draw” images—every line and shape was mathematically defined.",
    "Virtual reality art installations can track your movement in real time, making every visitor’s experience slightly different.",
    "The term “glitch art” comes from unexpected digital errors—what was once a bug is now an artistic style.",
    "Some museums now preserve not just digital art, but also the software and hardware needed to run it.",
    "Interactive exhibits can collect anonymous engagement data, helping curators design more immersive future experiences.",
    "Generative art means no two versions of the same artwork are ever exactly identical—even the artist may not know the final outcome.",
    "Sound, motion, and touch are increasingly part of modern exhibitions—expanding art beyond just what we see."]

    var length = messages.length;

    var msg = messages[randomInt(length)];

    document.getElementById("randomMessage").innerHTML = msg;
}

randomMessage();