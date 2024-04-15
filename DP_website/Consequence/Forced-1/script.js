document.addEventListener("DOMContentLoaded", function() {
    const subscribeCheckbox = document.getElementById("subscribe");
    const signUpButton = document.getElementById("signup-btn");

    subscribeCheckbox.addEventListener("change", function() {
        if (subscribeCheckbox.checked) {
            signUpButton.disabled = false;
        } else {
            signUpButton.disabled = true;
        }
    });

    signUpButton.addEventListener('click', function(){
        event.preventDefault(); // 阻止默认提交行为
        alert("Sign up Successfully!")
        updateBadge(1);
        showTooltip_email();
    })
});
