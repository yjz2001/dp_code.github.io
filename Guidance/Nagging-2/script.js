

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
                      <span class="tooltip-text">If the user does not want to turn on notifications, 
                      there is not option for that, and the app will continue to bother them about it.</span>
                      <span class="arrow"></span>
                  </div>
              </div> 

                  <button class="update-btn" onclick="updateNow()" id="updateBtn">Ok</button>
                  <div class="tooltip-container" id="step_edu_2">
                  <div class="tooltip">
                      <span class="tooltip-text">The user is pressured to turn on notifications, 
                      and there is only the option for “not now” and “ok”. </span>
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
    remindUser();
    setTimeout(remindUser, 10000);
  };

