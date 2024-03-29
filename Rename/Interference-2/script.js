document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.getElementById('acceptBtn');
    const submitBtn = document.getElementById('submitBtn');
    const cookieCheckboxes = document.querySelectorAll('.cookie-option input[type="checkbox"]');

    acceptBtn.addEventListener('click', function() {
        // Check all cookie checkboxes
        cookieCheckboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
        alert('Continue.');
    });

    submitBtn.addEventListener('click', function() {
        const checkbox_1 = document.getElementById('essentialCookies');
        const checkbox_2 = document.getElementById('analyticsCookies');
        const checkbox_3 = document.getElementById('marketingCookies');
    
        if (checkbox_2.checked || checkbox_3.checked || !checkbox_1.checked) {
            alert('Continue.');
        } else if(checkbox_1.checked){
            alert('Succeed.');
        }
    });
    

});


