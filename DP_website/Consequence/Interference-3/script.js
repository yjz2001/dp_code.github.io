document.getElementById('tipForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var defaultTip = document.getElementById('defaultTip').checked;
    
    if (defaultTip) {
        showTooltip_notify("tooltip-confer-1", 0, -400);
    } else {
      successful_step();
    }
    
    // Redirect to Indiegogo website or perform other actions
});

function successful_step(){
    var successful_step_content = `
    <div id="container_intro" class="container_inform">
      <div class="container_inform_content">
          <p><span style="display: block;"><strong>Congratulations!</strong></span>
            It seems that you already know that Interface Interference is harmful to you, and the best choice is canceling the pre-selection box. Great job!</p>
          <button id="nextbutton" onclick="window.location.href='../../Try/Interference/trans_test_intro.html';">Next</a>
      </div>
    </div>`
  
    document.body.innerHTML += successful_step_content;
  }
  
  function fail_step(){
    var fail_step_content = `
    <div id="container_intro" class="container_inform">
      <div class="container_inform_content">
          <p>Unfortunately, you've fallen for the Interface Interference trap! As a result, you'll spend money wasted. Would you like to retry?</p>
          <a id="retrybutton" href="ex.html">Yes, I want.</a>
          <a id="nextbutton" href="../../Try/Interference/trans_test_intro.html">No, next.</a>
      </div>
    </div>`
  
    document.body.innerHTML += fail_step_content;
  }

// 提交报告
function submitReport() {
    var reason = document.getElementById("reportReason").value;
    saveComment(reason);
    // 在这里可以添加提交报告的逻辑
    console.log("Reason for report: ", reason);
    closeModal(); // 提交后关闭模态框
    successful_step();
  }


function show_Page(){
    successful_step();
}