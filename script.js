
const menuElement = document.querySelector(".menu");

window.addEventListener("resize", reSizeHeader);

function changeHeaderFlow(){
    console.log("trying to change header flow");
    menuElement.id = "menu-column";
}

function reSizeHeader(){
    var width = window.innerWidth;
    if (width < 650){
        console.log("small window size")
        changeHeaderFlow();
    }
    else {
        menuElement.id = "menu-row";
    }
}

reSizeHeader();