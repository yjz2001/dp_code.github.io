document.addEventListener('DOMContentLoaded', function() {
    const gratuityBtns = document.querySelectorAll('.gratuity-btn');

    var code_dp = localStorage.getItem("code_dp") || 0;
    localStorage.setItem("code_dp", code_dp);

    gratuityBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const customPercent = btn.dataset.percent; // Get the data-percent attribute value
            if (customPercent === 'x') {
                let enteredPercent;
                do {
                    enteredPercent = prompt("Please enter the gratuity percentage:");
                } while (isNaN(enteredPercent) || enteredPercent.trim() === '' || enteredPercent.trim() < 0); // Keep prompting until a valid number is entered

                const parsedPercent = parseFloat(enteredPercent); // Convert the input to a number

                if (!isNaN(parsedPercent) && parsedPercent !== 0) {
                    alert('Selected gratuity: ' + parsedPercent + '%');
                    code_dp--;
                    localStorage.setItem("code_dp", code_dp);
                }
                else if(!isNaN(parsedPercent) && parsedPercent === 0){
                    alert('Succeed.');
                    code_dp++;
                    localStorage.setItem("code_dp", code_dp);
                } 
                else {
                    code_dp--;
                    localStorage.setItem("code_dp", code_dp);
                    alert('Please enter a valid number.');
                }
            } else {
                alert('Selected gratuity: ' + customPercent + '%');
                code_dp--;
                localStorage.setItem("code_dp", code_dp);
            }
        });
    });
});
