document.addEventListener("DOMContentLoaded", function() {
    var confirmButton = document.querySelector('.confirm-ad-btn');
    var checkBox = document.querySelector('.personal-ad-checkbox');

    confirmButton.addEventListener('click', function() {
        if (checkBox.checked) {
            showTooltip_notify("tooltip-confer", 50 ,-200);
        } else {
            //alert("Your personalized ads have been disabled.");
        }
        //continue_next();
    });

    
});