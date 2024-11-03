document.addEventListener("DOMContentLoaded", function() {
    // Check if cookie consent has been accepted
    if (getCookie("cookiesAccepted") !== "true") {
        document.getElementById("cookie-consent").style.display = "block"; // Show the cookie consent popup
    }

    document.getElementById("accept-cookies").onclick = function() {
        setCookie("cookiesAccepted", "true", 30); // Set cookie for 30 days
        document.getElementById("cookie-consent").style.display = "none"; // Hide the popup
    };

    // Terms of Service
    const tosPopup = document.getElementById("tos-popup");
    const acceptTosButton = document.getElementById("accept-tos");

    // Show TOS popup on first visit
    if (getCookie("tosAccepted") !== "true") {
        tosPopup.style.display = "flex"; // Show TOS modal
    }

    acceptTosButton.onclick = function() {
        setCookie("tosAccepted", "true", 30); // Set cookie for 30 days
        tosPopup.style.display = "none"; // Hide TOS modal
    };

    // Open/Close Video Modal
    const videoPopup = document.getElementById("video-popup");
    const closeVideoButton = document.getElementById("close-video");

    // If you want to trigger the video popup somehow, you can do so here
    // Example: show the video when the page loads for demo purposes
    // videoPopup.style.display = "flex";

    closeVideoButton.onclick = function() {
        videoPopup.style.display = "none"; // Hide video modal
    };

    // Function to open tabs
    window.openTab = function(evt, tabName) {
        const tabContents = document.getElementsByClassName("tab-content");
        const tabLinks = document.getElementsByClassName("tab-link");

        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = "none"; // Hide all tab contents
        }

        for (let i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", ""); // Remove active class from all tabs
        }

        document.getElementById(tabName).style.display = "block"; // Show current tab
        evt.currentTarget.className += " active"; // Add active class to the clicked tab
    };
});

// Function to set a cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
