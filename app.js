var MENU_ID = 0;
var IMG = document.createElement("img");
IMG.src = "/img/trash.png";
IMG.classList.add("trashLogo");

document.getElementById("menu_new").onclick = () => {
    let menu = document.getElementById("menu");
    let menuBlock = document.createElement('div');
    menuBlock.classList.add("menuBlock");
    menuBlock.innerHTML = "<div class='themeName'>NAME</div><div class='themeDelete' id='"+MENU_ID+"'><div>";
    menu.append(menuBlock);
    let deleteBut = document.getElementById(MENU_ID);
    deleteBut.append("IMG");

    deleteBut.onclick = () => {
        menu.removeChild(menuBlock);
    }

    MENU_ID++;
}