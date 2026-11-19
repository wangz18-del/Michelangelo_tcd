
// ======================================
// COOKIE STORAGE
// ======================================

// Function to create a cookie

function setCookie(name, value, days) {

    const date = new Date();

    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    const expires = "expires=" + date.toUTCString();

    document.cookie = name + "=" + value + ";" + expires + ";path=/";

}


// Function to retrieve a cookie

function getCookie(name) {

    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {

        const cookie = cookies[i].trim();

        if (cookie.indexOf(name + "=") === 0) {

            return cookie.substring(name.length + 1);

        }

    }

    return "";

}


// ======================================
// COOKIE CONSENT POP-UP
// ======================================

let cookiePopup = document.getElementById("cookiePopup");


// Check if the visitor has already made a choice

let consent = getCookie("cookieConsent");

if (cookiePopup) {

    if (consent === "") {

        cookiePopup.style.display = "block";

    } else {

        cookiePopup.style.display = "none";

    }

}


// Accept button

let acceptButton = document.getElementById("acceptCookies");

if (acceptButton) {

    acceptButton.addEventListener("click", function() {

        setCookie("cookieConsent", "accepted", 180);

        cookiePopup.style.display = "none";

        alert("Thank you for accepting cookies!");

    });

}


// Reject button

let rejectButton = document.getElementById("rejectCookies");

if (rejectButton) {

    rejectButton.addEventListener("click", function() {

        setCookie("cookieConsent", "rejected", 180);

        cookiePopup.style.display = "none";

        alert("You have rejected cookies.");

    });

}


// ======================================
// RETURNING VISITOR MESSAGE
// ======================================

let welcomeText = document.getElementById("welcomeText");

if (welcomeText) {

    if (getCookie("visited") === "") {

        welcomeText.textContent =
            "Welcome to Meresight Video Production.";

    } else {

        welcomeText.textContent =
            "Welcome back to Meresight. Good to see you again.";

    }

}


// ======================================
// LOCAL STORAGE
// ======================================


// Retrieve the saved click count

let count = Number(localStorage.getItem("exploreClicks")) || 0;


// Display the saved count

let clickCount = document.getElementById("clickCount");

if (clickCount) {

    clickCount.textContent = count;

}


// Record button clicks

let exploreButton = document.getElementById("exploreButton");

if (exploreButton) {

    exploreButton.addEventListener("click", function() {

        count = count + 1;

        localStorage.setItem("exploreClicks", count);

        if (clickCount) {

            clickCount.textContent = count;

        }

    });

}
