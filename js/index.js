const btu = document.getElementById("buttonup");

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

ocultar();

window.addEventListener("scroll", ocultar);

function toggleDiv() {
    var div = document.getElementById("menu_bar_nav");
    if (div.style.display === "flex") {
      div.style.display = "none";
    } else {
      div.style.display = "flex";
    }
  }