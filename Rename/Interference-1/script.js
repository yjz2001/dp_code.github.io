// Function to submit consent
 function submitConsent() {
    var optedOut = document.getElementById("optOutCheckbox").checked;

    // If the checkbox is checked, display "You're in a trap", else display "Succeed"
    var resultMessage = optedOut ? "You agree company use your data for services." : "Succeed.";

    // Display the result message
    //document.getElementById("consentResult").innerText = resultMessage;
    alert(resultMessage);
    if(resultMessage === "Succeed."){
        window.open("../../home.html");
    }
    else{
        location.reload()
    }
};



    