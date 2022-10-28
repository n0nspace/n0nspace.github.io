document.addEventListener('DOMContentLoaded', function () {
  
    const toggleSwitch = document.querySelector('input[type="checkbox"]#mode_input');
    const toggleSwitchFun = document.querySelector('input[type="checkbox"]#mode_fun');
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
  
        if (currentTheme === 'light') {
            toggleSwitch.checked = true;
        }
        else if (currentTheme === 'fun') {
          toggleSwitchFun.checked = true;
          toggleSwitch.disabled = true;
      }
    }
  
    function switchTheme(e) {
        if (toggleSwitchFun.checked) {
          document.documentElement.setAttribute('data-theme', 'fun');
          localStorage.setItem('theme', 'fun');
          toggleSwitch.disabled = true;
        } else {
          toggleSwitch.disabled = false;
          if (toggleSwitch.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
          } else {        
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        }
        }
    }
  
    toggleSwitchFun.addEventListener('change', switchTheme, false);
    toggleSwitch.addEventListener('change', switchTheme, false);
  
  }, false);