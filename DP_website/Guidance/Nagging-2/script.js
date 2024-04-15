

    // 弹窗提醒函数
    function remindUser() {
      // 创建弹窗内容
      var reminderContent = `
          <div class="reminder-container" id="reminderContainer">
              <div class="reminder-content">
                  <h2>Please turn on your notification</h2>
                  <p>It looks like you haven't turn on notification yet. Please turn on it to enjoy all the features.</p>

                  <button class="remind-later-btn" onclick="remindLater()" id="reminderBtn">Not now</button>
                  <div class="tooltip-container-2" id="step_edu_2">
                  <div class="tooltip">
                      <span class="tooltip-text">If you don't want to enable notifications, there's no option to decline, and the app will persistently prompt you about it. 
                      <div></div><strong>Therefore, you have two choices: 1. You can opt not to use this website. 
                      2. You can report it to the developers.</strong></span>
                      <span class="arrow"></span>
                  </div>
              </div> 

                  <button class="update-btn" onclick="updateNow()" id="updateBtn">Ok</button>
                  <div class="tooltip-container" id="step_edu_2">
                  <div class="tooltip">
                      <span class="tooltip-text">You might feel pressured to turn on notifications, 
                      with only the options "Not now" and "OK" available. </span>
                      <span class="arrow"></span>
                  </div>
              </div> 
              </div>
          </div>
      `;
      document.body.innerHTML += reminderContent;
  }

  function remindLater() {
      var reminderContainer = document.getElementById("reminderContainer");
      if (reminderContainer) {
          reminderContainer.remove();
      }
      setTimeout(remindUser, 10000);
  }

  function updateNow() {
      alert("Turn on notification!");
      reminderContainer.remove();
  }

  window.onload = function() {
    remindUser();
  };

