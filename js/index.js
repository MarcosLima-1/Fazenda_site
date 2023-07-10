window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-DBJ3NJBZNK");

const btu = document.getElementById("buttonup");
window.addEventListener("scroll", ocultar);

function scrollup(){
    window.scrollTo(0,0)
};

function ocultar(){
    if(window.scrollY > 100){
        btu.style.display = "flex"
    } else {
        btu.style.display = "none"
    }
};

function toggleDiv() {
  var div = document.getElementById("menu_bar_nav");
  div.style.display = div.style.display === "flex" ? "none" : "flex";
};

function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-11239368802/bXWTCKuCn7kYEOLQrO8p',
        'event_callback': callback
    });
    return false;
  }