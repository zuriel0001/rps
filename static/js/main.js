// JavaScript code to handle the user's choice
function playWithComputer() {
    // Hide all pages
    document.getElementById("home").style.display = "none";
    document.getElementById("computer").style.display = "block";
}

function playWithHuman() {
    // Hide all pages
    document.getElementById("home").style.display = "none";
    document.getElementById("human").style.display = "block";
}

function goBack() {
    // Hide all pages and show the home page
    document.getElementById("computer").style.display = "none";
    document.getElementById("human").style.display = "none";
    document.getElementById("home").style.display = "block";
}

// Function to show a specific page
function showPage(pageId) {
    // Hide all pages
    document.getElementById("home").style.display = "none";
    document.getElementById("computer").style.display = "none";
    document.getElementById("human").style.display = "none";

    // Show the selected page
    document.getElementById(pageId).style.display = "block";
}

// Expose the playRound function to be accessible from the HTML onclick event
window.playRound = function () {};
