

    // 弹窗提醒函数
    function remindUser() {
      // 创建弹窗内容
      var reminderContent = `
          <div class="reminder-container" id="reminderContainer">
              <div class="reminder-content">
                  <h2>Finish Setting Up Your Cookies</h2>
                  <p>It looks like you haven't turn on cookies yet. Please complete the setup process to enjoy all the features.</p>
                  <button class="update-btn" onclick="updateNow()">Yes</button>
                  <button class="remind-later-btn" onclick="remindLater()">Not now</button>
              </div>
          </div>
      `;
      // 将弹窗内容添加到页面中
      document.body.innerHTML += reminderContent;
  }

  // 提醒用户函数
  function remindLater() {
      // 移除之前的弹窗
      var reminderContainer = document.getElementById("reminderContainer");
      if (reminderContainer) {
          reminderContainer.remove();
          alert('Please finish turning on cookies later.');
      }
      // 过 10 秒后再次提醒
      setTimeout(remindUser, 10000); // 10秒后再次提醒
  }

  // 更新函数
  function updateNow() {
      // 这里添加更新逻辑
      alert("Turn on cookies!");
  }

  // 在页面加载后10秒弹出提醒
  window.onload = function() {
      setTimeout(remindUser, 10000); // 10秒后弹出提醒
  };

