document.addEventListener("DOMContentLoaded", function() {
    var confirmButton = document.querySelector('.confirm-ad-btn');
    var checkBox = document.querySelector('.personal-ad-checkbox');

    confirmButton.addEventListener('click', function() {
        if (checkBox.checked) {
            alert("Your personalized ads have been enabled based on your interests.");
        } else {
            alert("Your personalized ads have been disabled.");
        }
        window.open("trans_reflection.html","_self");
    });
});