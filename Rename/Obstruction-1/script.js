document.addEventListener("DOMContentLoaded", function () {
    const cookieNotice = document.getElementById("cookie-notice");
    const acceptAllCookiesBtn = document.getElementById("accept-all-cookies");
    const refuseCookiesBtn = document.getElementById("refuse-cookies");
    const refuseStep1 = document.getElementById("refuse-step-1");
    const nextStep2Btn = document.getElementById("next-step-2");
    const refuseStep2 = document.getElementById("refuse-step-2");
    const nextStep3Btn = document.getElementById("next-step-3");
    const refuseStep3 = document.getElementById("refuse-step-3");
    const acceptRefusedCookiesBtn = document.getElementById("accept-refused-cookies");


    const checkbox1 = document.getElementById("analytics");
    const checkbox2 = document.getElementById("preferences");
    const checkbox3 = document.getElementById("reasons_1");
    const checkbox4 = document.getElementById("reasons_2");

    // Check if the user has already made a choice
    // if (localStorage.getItem("cookieChoice") === "accepted") {
    //     cookieNotice.style.display = "none";
    // } else {
    //     cookieNotice.style.display = "block";
    // }

    //插装分数
    var code_dp = parseInt(localStorage.getItem("code_dp")) || 0;
    localStorage.setItem("code_dp", code_dp);


    cookieNotice.style.display = "block"; 

    acceptAllCookiesBtn.addEventListener("click", function () {
        // Hide the first step and show the refusal options
        cookieNotice.style.display = "none";
        // Implement logic to accept all cookies
        alert('Now you agree with the cookies, so website will use your information for marketing.')
        location.reload();

    });

    refuseCookiesBtn.addEventListener("click", function () {
        // Show the first step of refusal
        refuseStep1.style.display = "block";
    });

    nextStep2Btn.addEventListener("click", function () {
        // Hide step 1 and show step 2
        refuseStep1.style.display = "none";
        refuseStep2.style.display = "block";
    });

    nextStep3Btn.addEventListener("click", function () {
        // Hide step 2 and show step 3
        if(checkbox3.checked || checkbox4.checked){
            refuseStep2.style.display = "none";
            refuseStep3.style.display = "block";
        }else{
            alert('Please choose a reason.');
            return;
        }
        
    });

    acceptRefusedCookiesBtn.addEventListener("click", function () {
        // Handle the acceptance of refused cookies
        // Implement logic to handle the acceptance of refused cookies
        // ...

        // Hide the cookie notice and refusal steps
        cookieNotice.style.display = "none";
        refuseStep1.style.display = "none";
        refuseStep2.style.display = "none";
        refuseStep3.style.display = "none";

        // Store user's choice
        localStorage.setItem("cookieChoice", "accepted");

        if(checkbox1.checked && checkbox2.checked){
            alert('Succeed.');
            window.open('../../home.html', '_self');

        }else{
            alert('Now you agree with the cookies, so website will use your information for marketing.')
            location.reload();

        }
    });



    
});

