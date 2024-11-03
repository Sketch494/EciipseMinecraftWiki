function openTab(event, tabName) {
    const tabLinks = document.getElementsByClassName("tab-link");
    const tabContents = document.getElementsByClassName("tab-content");

    // Hide all tab content
    for (let content of tabContents) {
        content.classList.remove("active");
    }

    // Remove active class from all tab links
    for (let link of tabLinks) {
        link.classList.remove("active");
    }

    // Show the current tab and add an active class to the link
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}
