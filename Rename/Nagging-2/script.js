

    // 弹窗提醒函数
    function remindUser() {
      // 创建弹窗内容
      var reminderContent = `
          <div class="reminder-container" id="reminderContainer">
              <div class="reminder-content">
                  <h2>Please turn on your notification</h2>
                  <p>It looks like you haven't turn on notification yet. Please turn on it to enjoy all the features.</p>
                  <button class="remind-later-btn" onclick="remindLater()">Not now</button>
                  <button class="update-btn" onclick="updateNow()">Ok</button> 
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

