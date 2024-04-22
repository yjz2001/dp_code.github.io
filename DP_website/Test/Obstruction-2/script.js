document.addEventListener('DOMContentLoaded', function() {
    const accountBtn = document.getElementById('accountBtn');//go to your account
    const changeBtn = document.getElementById('changeBtn');//change
    const manageBtn = document.getElementById('manageBtn');//manage

   // Add event listener to accountBtn
accountBtn.addEventListener('click', function() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Create popup container
    const popup = document.createElement('div');
    popup.classList.add('popup');
    recordAction(1, "account");
    
    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popup.appendChild(popupContent);

    // Add text to the popup content
    const popupText = document.createElement('p');
    popupText.textContent = 'What would you like to do?';
    popupContent.appendChild(popupText);

    // Create "Cancel Subscription" button
    const cancelSubscriptionBtn = document.createElement('button');
    cancelSubscriptionBtn.textContent = 'Cancel Subscription';
    cancelSubscriptionBtn.addEventListener('click', function() {
        recordAction(1, "unsubscribe");
        // Add your cancel subscription logic here
        alert('Subscription cancelled successfully.');
        closePopup(); // Close the popup
        code_score_control(1);
        window.open("../../Try/Obstruction/trans_test_2.html","_self");
    });
    popupContent.appendChild(cancelSubscriptionBtn);

    // Create "Close" button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', function() {
        recordAction(1, "close");
        closePopup(); // Close the popup
    });
    popupContent.appendChild(closeBtn);

    // Append popup to the body
    document.body.appendChild(popup);

    // Function to close the popup
    function closePopup() {
        document.body.removeChild(overlay);
        document.body.removeChild(popup);
    }
});

    changeBtn.addEventListener('click',function() {
        //alert('Continued.');
        recordAction(1, "change");
        code_score_control(2);
        window.open("../../Try/Obstruction/trans_test_2.html","_self");
    });
    manageBtn.addEventListener('click',function() {
        //alert('Continued.');
        recordAction(1, "manage");
        code_score_control(2);
        window.open("../../Try/Obstruction/trans_test_2.html","_self");
    });
});
