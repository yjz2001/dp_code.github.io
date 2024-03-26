

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
                      <span class="tooltip-text">This step if you choose not now, though you will not receive the notificationm but this popup will repeatedly bother you. So in order to solve the question, you'd better report this case to related apartment'</span>
                      <span class="arrow"></span>
                  </div>
              </div> 

                  <button class="update-btn" onclick="updateNow()" id="updateBtn">Ok</button>
                  <div class="tooltip-container" id="step_edu_2">
                  <div class="tooltip">
                      <span class="tooltip-text">This step if you choose turning on, it means you will receive a lot of notificating in the next time. So in order to get a quiet surroundings you should choose not now.'</span>
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
  }

  window.onload = function() {
      setTimeout(remindUser, 10000);
  };

