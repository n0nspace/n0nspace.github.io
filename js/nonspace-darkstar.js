$(document).ready(function() {
  if ($(window).width() < 1101) {
     $('#mobile_menu').load('/mobile_menu.html');
     $('body').append(
       '<div id="nnspc" style="position: fixed; top: 0; left: 0; padding: 13px; background: #181818; z-index: 9"><a style="font-family: helvetica; font-weight: bold; letter-spacing: -1px; color: #fff;" href="/">nonspace.</a></div>'
     );
  }

  
  /*NOT FOUND PAGE*/
  if ($('p:contains("The URL you requested could not be found.")').html()) {
    $('body').load('https://www.dl.dropboxusercontent.com/s/16uf3jiqa1zt5uk/error.html');
  }
  
  /*TAG INFO ON THEME PAGE*/
  if ((window.location.pathname.split("/")[2] == "nnspc+codes") || (window.location.pathname == "/tagged/nnspc%20codes")) {
      $('.tag_info h1').replaceWith('<h1>viewing nonspace themes</h1>');
    }
  
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
  
  });  