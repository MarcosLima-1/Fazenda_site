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