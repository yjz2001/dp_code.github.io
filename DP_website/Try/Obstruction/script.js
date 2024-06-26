  var originalCookieStates = {
    analytics: true,
    personalization: true,
    advertising: true
  };
 var Cookies_contain = document.getElementById('cookieContainer');
  function toggleConfirmButton() {
    var currentCookieStates = {
      analytics: document.getElementById('analyticsCheckbox').checked,
      personalization: document.getElementById('personalizationCheckbox').checked,
      advertising: document.getElementById('advertisingCheckbox').checked
    };

    var isStateChanged = Object.keys(currentCookieStates).some(function (key) {
      return currentCookieStates[key] !== originalCookieStates[key];
    });

    var confirmButton = document.querySelector('.confirm-btn');
    confirmButton.style.display = isStateChanged ? 'block' : 'none';
  }

  var checkbox_1 = document.getElementById('analyticsCheckbox');
  var checkbox_2 = document.getElementById('personalizationCheckbox');
  var checkbox_3 = document.getElementById('advertisingCheckbox');

  function confirmChoices() {
    originalCookieStates = {
      analytics: document.getElementById('analyticsCheckbox').checked,
      personalization: document.getElementById('personalizationCheckbox').checked,
      advertising: document.getElementById('advertisingCheckbox').checked
    };
    Cookies_contain.style.display = "none";
    if(checkbox_1.checked || checkbox_2.checked || checkbox_3.checked){
        showTooltip_notify("tooltip-confer", 50 ,50);
    }else{
      continue_next();
    }
    document.querySelector('.confirm-btn').style.display = 'none';    
  }

  function allowAll() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = true;
    });
    Cookies_contain.style.display = "none";
    continue_next();
    showTooltip_notify("tooltip-confer", 50 ,50);
  }

  function showCookieSettings() {
    document.querySelector('.cookie-settings').style.display = 'flex';
  }
