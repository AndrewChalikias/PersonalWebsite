let gdprWindow = document.querySelector("#gdprWindow");
let gdpr = document.querySelector("#gdpr");

// The cursor will blink and will be ready for the user to type when the page loads.
document.querySelector("#yourName").focus();

// Show the popup when the GDPR div is clicked.
gdpr.addEventListener("click", (e) => {
    /*  Isolate the click behavior to just the popup element,
        preventing it from affecting other elements. */
    e.stopPropagation();
    document.querySelector("#gdprWindow").style.display = "block";
});
// Event listener to hide the popup
document.addEventListener("click", function closeGDPR(e) {
    // Set the popup to display: none, if it's already in block state, when the target isn't itself
    if (gdprWindow.style.display === "block" && !gdprWindow.contains(e.target) && !gdpr.contains(e.target)) {
        gdprWindow.style.display = "none";
}});
function redirect() {
    window.open("https://github.com/AndrewChalikias");
}