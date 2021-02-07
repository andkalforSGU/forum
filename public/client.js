const socket = io("http://localhost:3000").connect();
var MENU_ID = 0;

document.getElementById("menu_new").onclick = () => {
    let NAME_ID = MENU_ID + 1;
    let DELETE_ID = MENU_ID + 2;
    var IMG = document.createElement("img");
    let menu = document.getElementById("menu");
    let menuBlock = document.createElement('div');

    menuBlock.classList.add("menuBlock");
    menuBlock.innerHTML = "<div class='themeName'><div id='"+NAME_ID+"'></div></div><div class='themeDelete' id='"+DELETE_ID+"'><div>";
    menu.append(menuBlock);

    let deleteBut = document.getElementById(DELETE_ID);
    IMG.src = "img/trash.png";
    IMG.classList.add("trashLogo");
    deleteBut.append(IMG);

    deleteBut.onclick = () => {
        menu.removeChild(menuBlock);
    }

    MENU_ID+=3;
}