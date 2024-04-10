document.addEventListener('DOMContentLoaded', function() {
    const accountBtn = document.getElementById('accountBtn');//go to your account
    const changeBtn = document.getElementById('changeBtn');//change
    const manageBtn = document.getElementById('manageBtn');//manage

    // Add event listener to accountBtn
    accountBtn.addEventListener('click', function() {
        // Create popup container
        const popup = document.createElement('div');
        popup.classList.add('popup');
        recordAction(1, "account");
        // Create popup content
        const popupContent = document.createElement('div');
        popupContent.classList.add('popup-content');
        popup.appendChild(popupContent);

        // Create "Cancel Subscription" button
        const cancelSubscriptionBtn = document.createElement('button');
        cancelSubscriptionBtn.textContent = 'Cancel Subscription';
        cancelSubscriptionBtn.addEventListener('click', function() {
            recordAction(1, "unsubsribe");
            // Add your cancel subscription logic here
            alert('Subscription cancelled successfully.');
            popup.remove(); // Close the popup
            code_score_control(1);
            window.open("", "_self");
            window.open("../Congrats/Obstruction-2.html","_self");
        });
        popupContent.appendChild(cancelSubscriptionBtn);

        // Create "Close" button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.addEventListener('click', function() {
            recordAction(1, "close");
            popup.remove(); // Close the popup
        });
        popupContent.appendChild(closeBtn);

        // Append popup to the body
        document.body.appendChild(popup);
    });

    changeBtn.addEventListener('click',function() {
        //alert('Continued.');
        recordAction(1, "change");
        code_score_control(2);
        window.open("../Congrats/Obstruction-2.html","_self");
    });
    manageBtn.addEventListener('click',function() {
        //alert('Continued.');
        recordAction(1, "manage");
        code_score_control(2);
        window.open("../Congrats/Obstruction-2.html","_self");
    });
});
