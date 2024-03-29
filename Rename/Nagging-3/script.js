function remindUser() {
    var reminderContent = `
        <div class="reminder-container" id="reminderContainer">
            <div class="reminder-content">
                <h2>Request For Permission</h2>
                <p>Are you agree to offer your location permission to our application?</p>
                <input type="checkbox" id="reminder" name="reminder">
                <label for="reminder"> Don't show me again</label><br>
                <button class="update-btn">Yes</button>
                <button class="remind-later-btn">No</button>
            </div>
        </div>
    `;
    document.body.innerHTML += reminderContent;

    const reminderCheckbox = document.getElementById("reminder");
    const updateButton = document.querySelector(".update-btn");
    const reminderLaterButton = document.querySelector(".remind-later-btn");
    var reminderContainer = document.getElementById("reminderContainer");

    updateButton.disabled = false;

    reminderCheckbox.addEventListener("change", function() {
        reminderLaterButton.disabled = this.checked;
    });

    updateButton.addEventListener('click', function(){
        if (reminderCheckbox.checked) {
            alert("Permission agreed! The popup will not appear.");
        } else {
            // Re reminder
            setTimeout(remindUser, 10000); // 10s reminder user
            alert("Permission agreed!");
        }
        reminderContainer.remove();
    });

    reminderLaterButton.addEventListener('click', function(){
        
        if (reminderContainer) {
            reminderContainer.remove();
            alert('You rejected permission.');
        }
        setTimeout(remindUser, 10000); // 10s reminder user
    });
}

window.onload = function() {
    remindUser();
    setTimeout(remindUser, 10000); // 10s reminder user
};

