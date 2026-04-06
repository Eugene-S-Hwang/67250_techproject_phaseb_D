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

var messages = [
    "New Amsterdam, the precursor to New York City, was founded by the Dutch in 1624 as a small trading post.",
    "Ellis Island opened in 1892 and processed over 12 million immigrants entering the United States.",
    "The first underground subway in NYC launched in 1904, transforming how the city moved and grew.",
    "Times Square was originally named Longacre Square and became the hub of theater and entertainment by the early 1900s.",
    "The Statue of Liberty was a gift from France in 1886 and quickly became a symbol of freedom for millions of newcomers.",
    "Central Park, completed in 1876, was the first landscaped public park in the U.S., designed to provide an urban oasis.",
    "Broadway is the oldest theater district in the U.S., with performances dating back to the 18th century.",
    "The Flatiron Building, completed in 1902, was one of the first skyscrapers to use a steel skeleton structure.",
    "New York City was the first capital of the United States in 1789, where George Washington was inaugurated.",
    "The Brooklyn Bridge, completed in 1883, was the longest suspension bridge in the world at the time of its opening."
];

var exhibitions = [
    {
        title: "Exhibition 1: Streets of Arrival: Immigration and the Making of New York",
        description: "Step into the lives of newcomers who transformed New York City into a global crossroads. Through personal artifacts, recreated tenement rooms, and interactive maps tracing journeys from Ellis Island, this exhibition explores how waves of immigrants reshaped neighborhoods, culture, and identity. Visitors can listen to oral histories, examine evolving city demographics, and reflect on the ongoing story of migration in the city.",
        image: "Ellis_Island.jpg"
    },
    
    {
        title: "Exhibition 2: Bridges and Subways: Building the Modern City",
        description: "Explore how iconic engineering feats—like the Brooklyn Bridge, the subway system, and the water supply networks—transformed New York into a 24/7 metropolis. Visitors can interact with digital models of construction, see archival blueprints, and experience immersive simulations of historic city planning decisions.",
        image: "old_george_washington_bridge.jpg"
    }
];

var exhibitionIndex = 0;

function nextExhibition(indx){
    indx = ((indx % 2) + 2) % 2;
    document.getElementById("exhibition-title").innerHTML = exhibitions[indx].title;
    document.getElementById("exhibition-description").innerHTML = exhibitions[indx].description;
    document.getElementById("exhibition-image").src = "../static/" + exhibitions[indx].image;
}

function greeting(hr){
    if(!document.getElementById("greeting")){
        return;
    }
    if(hr < 5 || hr >= 20){
        document.getElementById("greeting").innerHTML = "Good night and welcome to MonoMuse.";
    }
    else if(hr < 12){
        document.getElementById("greeting").innerHTML = "Good morning and welcome to MonoMuse.";
    }
    else if(hr < 18){
        document.getElementById("greeting").innerHTML = "Good afternoon and welcome to MonoMuse.";
    }
    else{
        document.getElementById("greeting").innerHTML = "Good evening and welcome to MonoMuse.";
    }
}

function activeNav(){
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });

}


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
    if(!document.getElementById("randomMessage")){
        return;
    }
    var length = messages.length;

    var msg = messages[randomInt(length)];

    document.getElementById("randomMessage").innerHTML = "Did you know? " + msg;
}

randomMessage();
greeting(hour);
activeNav();

//MAP:

if(document.getElementById("map")){
    var map = L.map('map').setView([40.7236, -73.9967], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([40.7236, -73.9967]).addTo(map);
    marker.bindPopup("<b>MonoMuse</b><br>275 Lafayette Street, New York, NY 10012").openPopup();
}

//JQUERY:

$("#readLess").click(function(){ 
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});
  
$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

$("#homeButton").click(function(){
    window.location.href = "views/tickets.html";
});

$("#nav-button").click(function(){
    $(".nav_bar").toggle();
});

$(window).on("resize", function () {
    if (window.innerWidth > 768) {
        $(".nav_bar").css("display", "");
    }
});

$("#left-arrow").click(function(){
    exhibitionIndex--;
    nextExhibition(exhibitionIndex);
});

$("#right-arrow").click(function(){
    exhibitionIndex++;
    nextExhibition(exhibitionIndex);
});

$("#purchase-date-button").click(function(){
    var date = $("#purchase-date").val();
    if(date){
        $(".ticket-purchase-form").show();
        $("#Decrease-Adult-tickets").prop("disabled", false);
        $("#Increase-Adult-tickets").prop("disabled", false);
        $("#Decrease-Member-tickets").prop("disabled", false);
        $("#Increase-Member-tickets").prop("disabled", false);
        $("#Decrease-Student-tickets").prop("disabled", false);
        $("#Increase-Student-tickets").prop("disabled", false);
    }
});

var ticketCounts = { adult: 0, member: 0, student: 0 };
var ticketPrices = { adult: 18, member: 15, student: 10 };

function ticketCountLabel(n) {
    return n + " ticket" + (n === 1 ? "" : "s") + " selected";
}

function countCellForType(type) {
    var id = { adult: "Increase-Adult-tickets", member: "Increase-Member-tickets", student: "Increase-Student-tickets" }[type];
    return $("#" + id).closest("tr").prev().prev().find(".tickets-picker__count-cell");
}

function syncTicketFormTotals() {
    var total = ticketCounts.adult + ticketCounts.member + ticketCounts.student;
    var price = ticketCounts.adult * ticketPrices.adult + ticketCounts.member * ticketPrices.member + ticketCounts.student * ticketPrices.student;
    if ($("#purchase-total-tickets").length) {
        $("#purchase-total-tickets").val(String(total));
    }
    if ($("#purchase-price").length) {
        $("#purchase-price").val("$" + price);
    }
}

function updateTicketRow(type) {
    countCellForType(type).text(ticketCountLabel(ticketCounts[type]));
    syncTicketFormTotals();
}

function bindTicketStepper(increaseId, decreaseId, type) {
    $("#" + increaseId).click(function () {
        ticketCounts[type]++;
        updateTicketRow(type);
    });
    $("#" + decreaseId).click(function () {
        if (ticketCounts[type] > 0) {
            ticketCounts[type]--;
            updateTicketRow(type);
        }
    });
}

bindTicketStepper("Increase-Adult-tickets", "Decrease-Adult-tickets", "adult");
bindTicketStepper("Increase-Member-tickets", "Decrease-Member-tickets", "member");
bindTicketStepper("Increase-Student-tickets", "Decrease-Student-tickets", "student");

$(".ticket-purchase-form").on("submit", function (e) {
    if (this.id === "checkout-form") {
        e.preventDefault();

        alert("Checkout form submitted");
        window.location.href = "tickets.html";
        return;
    }
    e.preventDefault();
    var dateVal = $("#purchase-date").val();
    sessionStorage.setItem(
        "monoMuseCheckout",
        JSON.stringify({
            date: dateVal || "",
            name: $("#purchase-name").val() || "",
            email: $("#purchase-email").val() || "",
            totalTickets: $("#purchase-total-tickets").val() || "0",
            price: $("#purchase-price").val() || "$0",
            adult: ticketCounts.adult,
            member: ticketCounts.member,
            student: ticketCounts.student
        })
    );
    window.location.href = "checkout.html";
});

function populateCheckout() {
    var form = document.getElementById("checkout-form");
    if (!form) {
        return;
    }
    var raw = sessionStorage.getItem("monoMuseCheckout");
    if (!raw) {
        window.location.href = "tickets.html";
        return;
    }
    var d = JSON.parse(raw);
    $("#checkout-date").val(d.date || "");
    $("#checkout-name").val(d.name || "");
    $("#checkout-email").val(d.email || "");
    $("#checkout-adult").val(String(d.adult != null ? d.adult : 0));
    $("#checkout-member").val(String(d.member != null ? d.member : 0));
    $("#checkout-student").val(String(d.student != null ? d.student : 0));
    $("#checkout-total-tickets").val(d.totalTickets || "0");
    $("#checkout-price").val(d.price || "$0");
}

populateCheckout();