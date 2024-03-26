document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById("signup-btn");

    signUpButton.addEventListener('click', function(event){
        event.preventDefault(); // Prevent default form submission
        alert("Sign Up successfully and will receive discount news.");
    });
});
