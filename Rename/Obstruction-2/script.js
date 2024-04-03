document.addEventListener('DOMContentLoaded', function() {
    const accountBtn = document.getElementById('accountBtn');
    const changeBtn = document.getElementById('changeBtn');
    const manageBtn = document.getElementById('manageBtn');

    // Add event listener to accountBtn
    accountBtn.addEventListener('click', function() {
        // Create popup container
        const popup = document.createElement('div');
        popup.classList.add('popup');

        // Create popup content
        const popupContent = document.createElement('div');
        popupContent.classList.add('popup-content');
        popup.appendChild(popupContent);

        // Create "Cancel Subscription" button
        const cancelSubscriptionBtn = document.createElement('button');
        cancelSubscriptionBtn.textContent = 'Cancel Subscription';
        cancelSubscriptionBtn.addEventListener('click', function() {
            // Add your cancel subscription logic here
            alert('Subscription cancelled successfully.');
            popup.remove(); // Close the popup
        });
        popupContent.appendChild(cancelSubscriptionBtn);

        // Create "Close" button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.addEventListener('click', function() {
            popup.remove(); // Close the popup
        });
        popupContent.appendChild(closeBtn);

        // Append popup to the body
        document.body.appendChild(popup);
    });

    changeBtn.addEventListener('click',function() {
        alert('Continued.');
    });
    manageBtn.addEventListener('click',function() {
        alert('Continued.');
    });
});
