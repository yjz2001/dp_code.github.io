// Select the continue browsing button
const continueBtn = document.querySelector('.continue-btn');

// Add event listener to the continue browsing button
continueBtn.addEventListener('click', function() {
    // Perform actions when the button is clicked (e.g., track user consent)
    console.log('User consent given. Continuing browsing...');
    // You can add additional code here to track user consent or perform other actions
});

function continuebrowse(){
    validate = localStorage.getItem("validate_score") || 0;
    if(validate === 1){
        alert("Succeed");
    }
}
