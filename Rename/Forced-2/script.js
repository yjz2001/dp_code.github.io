document.addEventListener("DOMContentLoaded", function() {
    const updateRestartBtn = document.getElementById("update-restart");
    const updateShutdownBtn = document.getElementById("update-shutdown");

    updateRestartBtn.addEventListener("click", function() {
        // Perform update and restart action
        console.log("Updating Windows and restarting...");
    });

    updateShutdownBtn.addEventListener("click", function() {
        // Perform update and shutdown action
        console.log("Updating Windows and shutting down...");
    });
});
