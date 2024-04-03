document.getElementById('tipForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var defaultTip = document.getElementById('defaultTip').checked;
    
    if (defaultTip) {
        alert('You have chosen to leave the default 20% tip. Thank you for your support!');
        updateBadge(3)
        showTooltip_card();

    } else {
        alert('You have opted out of the default 20% tip. Thank you!');
        
    }
    
    // Redirect to Indiegogo website or perform other actions
});