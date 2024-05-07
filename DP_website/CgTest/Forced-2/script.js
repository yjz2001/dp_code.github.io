document.addEventListener("DOMContentLoaded", function() {
    const updateRestartBtn = document.getElementById("update-restart");
    const updateShutdownBtn = document.getElementById("update-shutdown");


    updateRestartBtn.addEventListener("click", function() {
        // Perform update and restart action
        recordAction(1, "restart");
        //alert("Updating Windows and restarting...");
        code_score_control(2);
        window.open("../../Control/Forced/trans_test_2.html","_self");
    });

    updateShutdownBtn.addEventListener("click", function() {
        // Perform update and shutdown action
        //alert("Updating Windows and shutting down...");
        recordAction(1, "shutdown");
        code_score_control(2);
        window.open("../../Control/Forced/trans_test_2.html","_self");
    });

    

});

