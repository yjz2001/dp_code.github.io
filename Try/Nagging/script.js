
    // 弹窗提醒函数
    function remindUser() {
      // 创建弹窗内容
      var reminderContent = `
          <div class="reminder-container" id="reminderContainer">
              <div class="reminder-content">
                  <h2>Please turn on your notification</h2>
                  <p>It looks like you haven't turn on notification yet. Please turn on it to enjoy all the features.</p>

                  <button class="remind-later-btn" onclick="remindLater()" id="reminderBtn">Not now</button>
                
                  <button class="update-btn" onclick="updateNow()" id="updateBtn">Ok</button>
        
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
      setTimeout(remindUser, 2000);

  }

  function showTooltip_notify(){
    // 显示浮窗
    var tooltipConfer = document.getElementById("tooltip-confer");
    tooltipConfer.style.display = "block";
  
    // 设置浮窗位置为界面右侧
    var rightOffset = 10; // 右侧偏移量
    var windowWidth = window.innerWidth;
    var tooltipWidth = tooltipConfer.offsetWidth;
    tooltipConfer.style.left = (windowWidth - tooltipWidth - rightOffset) + "px";

    // 计算浮窗垂直位置，暂设为距离页面顶部50px处
    tooltipConfer.style.top = "100px";
}

  function updateNow() {
      alert("Turn on notification!");
      reminderContainer.remove();
      //remindUser_ok();
      continue_next();
      showTooltip_notify();
      //requestNotificationPermission();
}

function remindUser_ok(){
    var oldReminderContainer_ok = document.getElementById("reminderContainer_ok");
    if (oldReminderContainer_ok) {
        oldReminderContainer_ok.remove();
    }

    var reminderContent_ok = `
        <div class="reminder-container" id="reminderContainer_ok">
            <div class="reminder-content">
                <span class="close" onclick="closeReminder()">×</span>
                <h2>Exclusive Notification For You</h2>
                <p>Since you opened the notification, let's see what's new!</p>
            </div>
        </div>
    `;
    document.body.innerHTML += reminderContent_ok;
}

function closeReminder() {
    var reminderContainer_ok = document.getElementById("reminderContainer_ok");
    reminderContainer_ok.remove(); 
}

  window.onload = function() {

    remindUser();
   
  };

function continue_next(){
    var contanin_continue = `
    <button id="continue_btn" onclick="continueBtn()">Continue</button>
`;
document.body.innerHTML += contanin_continue;
}

function continueBtn(){
    window.open("trans_reflection.html","_self")
}
