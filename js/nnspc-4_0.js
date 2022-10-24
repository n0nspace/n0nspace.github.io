$(document).ready(function() {

$('aside').load('https://www.dl.dropboxusercontent.com/s/8dhffzy8yii5dam/sidebar.html');
$('#footer').load('https://www.dl.dropboxusercontent.com/s/zjpesd552fp5dyg/footer.html', function(){
  var footerHeight = $("#footer").outerHeight();
  $("html").attr("style","--footerHeight:" + footerHeight + "px");
  console.log(footerHeight);
});
if ($(window).width() < 1101) {
   $('#mobile_menu').load('https://www.dl.dropboxusercontent.com/s/6vym700z2v5hhq1/mobile_menu.html');
   $('body').append(
     '<div id="nnspc" style="position: fixed; top: 0; left: 0; padding: 13px; background: #181818; z-index: 9"><a style="font-family: helvetica; font-weight: bold; letter-spacing: -1px; color: #fff;" href="/">nonspace.</a></div>'
   );
} 

/*HGIHLIGHT.JS*/
$('pre, pre code').each(function(i, block) {
  hljs.highlightBlock(block);
});

/*NOT FOUND PAGE*/
if ($('p:contains("The URL you requested could not be found.")').html()) {
  $('body').load('https://www.dl.dropboxusercontent.com/s/16uf3jiqa1zt5uk/error.html');
}

/*TAG INFO ON THEME PAGE*/
if ((window.location.pathname.split("/")[2] == "nnspc+codes") || (window.location.pathname == "/tagged/nnspc%20codes")) {
    $('.tag_info h1').replaceWith('<h1>viewing nonspace themes</h1>');
  }

  const toggleSwitch = document.querySelector('input[type="checkbox"]#mode_input');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }

  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      }
      else {        document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
      }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);

});
