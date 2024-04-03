document.addEventListener("DOMContentLoaded", function() {
const menuItems = document.querySelectorAll(".menu-item");
window.appSettings = { 
    limitadTrackingChecked: true
};
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            handleMenuItemClick(item.textContent);
        });
    });
});

function handleMenuItemClick(menuItem) {
    switch (menuItem) {
        case "General":
            displayGeneralSettings();
            break;
        case "Privacy":
            displayPrivacySettings();
            break;
        default:
            break;
    }
}

function displayGeneralSettings() {
    const content = document.querySelector(".content");
    content.innerHTML = `
        <h2>General Settings</h2>
        <p>Welcome to General Settings.</p>
        <button id="About" onclick="displayAbout()">About</button>
    `;
}

function displayAbout() {
    const content = document.querySelector(".content");
    content.innerHTML = `
        <h2>About Settings</h2>
        <p>Welcome to About Settings.</p>
        <button id="Advertising" onclick="displayAdvertising()">Advertising</button>
    `;
}

function displayAdvertising() {
    const content = document.querySelector(".content");
    content.innerHTML = `
        <h2>Advertising Settings</h2>
        <p>Welcome to Advertising Settings.</p>
        <label>
        <input type="checkbox" id="limitadTracking" ${window.appSettings.limitadTrackingChecked ? "checked" : ""}>
            open Limit Ad Tracking
        </label>
    `;
    const limitadTracking = document.getElementById("limitadTracking");
    limitadTracking.addEventListener("change", function(){
        window.appSettings.limitadTrackingChecked = this.checked;
    });
}

function displayPrivacySettings() {
    const content = document.querySelector(".content");
    content.innerHTML = `
        <h2>Privacy Settings</h2>
        <p>Welcome to Privacy Settings. Manage your privacy preferences here.</p>
    `;
}

