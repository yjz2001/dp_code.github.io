function remindUser() {
    var reminderContent = `
        <div class="reminder-container" id="reminderContainer">
            <div class="reminder-content">
                <h2>Request For Permission</h2>
                <p>Are you agree to offer your location permission to our website?</p>
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
        if (this.checked) {
            recordAction(2, 'remindercheckbox');
            console.log('disabled button');
            reminderLaterButton.disabled = true;
        } else {
            recordAction(3, 'remindercheckbox');
            console.log('enabled button');
            reminderLaterButton.disabled = false;
        }
    });

    updateButton.addEventListener('click', function(){
        recordAction(1,"updatenow");
        if (reminderCheckbox.checked) {
            //alert("Permission agreed! The popup will not appear.");
            code_score_control(2);
            localStorage.setItem("nagging_record", 1);
            window.open("../../Control_home.html","_self");

        } else {
            // Re reminder
            setTimeout(remindUser, 10000); // 10s reminder user
            //alert("Permission agreed!");
            
            localStorage.setItem("nagging_record", 1);
            code_score_control(2);
            window.open("../../Control_home.html","_self");
        }
        reminderContainer.remove();
    });

    reminderLaterButton.addEventListener('click', function(){
        recordAction(1,"reminderlater");
        if (reminderContainer) {
            reminderContainer.remove();
            //alert('You rejected permission.');
            //code_score_control(2);
        }
        setTimeout(remindUser, 3000); // 3s reminder user
    });
}

window.onload = function() {
    remindUser();
    setTimeout(remindUser, 10000); // 10s reminder user
};

