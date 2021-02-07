const socket = io("http://localhost:3000").connect();
var THEME_ID = 0;

document.getElementById("menu_new").onclick = () => {
    let NAME_ID = THEME_ID + 0.1;
    let DELETE_ID = THEME_ID + 0.2;
    let BUTTON_ID = THEME_ID + 0.3;
    let INPUT_ID = THEME_ID + 0.4;
    var IMG = document.createElement("img");
    let menu = document.getElementById("menu");
    let menuBlock = document.createElement('div');
    let form = document.getElementById("form");
    let formMenu = document.createElement("div");
    let menuBlockHTML = "<div class='themeName'><div id='"+NAME_ID+"'></div></div><div class='themeDelete' id='"+DELETE_ID+"'><div>";
    let formMenuHTML = '<div class="themeForm"" id="form"><div class="themeFormText_DIV"><div class="themeFormText">Enter theme name:</div></div><div class="themeFormInput_DIV"><input id="'+INPUT_ID+'" type="text" class="themeFormInput"></div><div id="'+BUTTON_ID+'" class="themeFormButton_DIV"><div>add</div></div></div>'
    formMenu.classList.add("form_inner");

    formMenu.innerHTML = formMenuHTML;
    menu.append(formMenu);

    document.getElementById(BUTTON_ID).onclick = () => {

        let name = document.getElementById(INPUT_ID).value;
        let nameTag = document.createElement("div");
        nameTag.innerHTML = name;

        menu.removeChild(formMenu);

        menuBlock.classList.add("menuBlock");
        menuBlock.innerHTML = menuBlockHTML;
        menu.append(menuBlock);
        document.getElementById(NAME_ID).append(nameTag);
    
        let deleteBut = document.getElementById(DELETE_ID);
        IMG.src = "img/trash.png";
        IMG.classList.add("trashLogo");
        deleteBut.append(IMG);
    
        deleteBut.onclick = () => {
            menu.removeChild(menuBlock);
            socket.emit("deleteTheme", deleteBut.id - 0.2);
        }
    
        socket.emit("addTheme", THEME_ID);
        THEME_ID+=1;
    };
}

function themForm() {

}