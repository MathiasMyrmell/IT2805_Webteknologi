// Functions for all pages
function redirect(link){
    window.location.href = link;
    
}
async function addComponent(filePath, element) {
    try {
        const content = await getContent(filePath);
        element.innerHTML = content;
    }catch (e){
        console.log(e);
    }
}

async function getContent(filePath){
    try {
        const response = await fetch(filePath);
        const content = await response.text();
        return content;
    }catch (e){
        console.log(e);
    }
}
// Add navbar to page
function addNavbar(){
    addComponent("../html/navbar.html",document.querySelector("#navbar"));
}
// Add footer to page
function addFooter(){
    addComponent("../html/footer.html",document.querySelector("#footer"));
}

// NavbarMobile
function showElements(){
    const element = document.getElementsByClassName("underelements");
    for (let i = 0; i < element.length; i++) {
        if(element[i].style.display==""){
            element[i].style.display = "block";
        }
        else{
            element[i].style.display = "";
        }
    }
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}


// Change navbar on resize
function changeNavbar() {
    
    if (window.matchMedia("(min-width: 800px)").matches) {
        addComponent("../html/navbar.html",document.querySelector("#navbar"));
        addComponent("../html/footer.html",document.querySelector("#footer"));
      } else {
        console.log("changeNavbar");
        addComponent("../html/navbarMobile.html",document.querySelector("#navbar")); //change to other navbar
        addComponent("../html/footer.html",document.querySelector("#footer"));
    
      }
}

// functions for fangstdagbok
var columnsShow;
var toggler;
var showInfo = "block";
var content;


function setColumnSize(Columns){
    columnsShow = Columns;
}

async function setContent(){
    if(content!="fiskeridirektoratet"){
        const filePath = "../html/fangstdagbokFiler/" + content + ".html";
        const element = document.getElementById("guidance");
        try {
            const response = await fetch(filePath);
            const content = await response.text();
            element.innerHTML = content;
        }catch (e){
            console.log(e);
        }
    }
}

function toggleGuidance(Toggler, Content){
    toggler = Toggler;
    if(Toggler == 'redirect'){
        window.open("https://www.fiskeridir.no/Yrkesfiske/Regelverk-og-reguleringer/J-meldinger/Gjeldende-J-meldinger/J-133-2022", target="_blank");
    }else{
        toggleHideShow();
    }
    changeSize();
    if(Content!="content"){
        content = Content;
        setContent();
    }
}

function toggleHideShow(){
    if(toggler=="hide"){
        // document
        document.getElementById("page-container").style.gridTemplateColumns = "100% 0%";
        document.getElementById("content").style.margin = "0 auto";
        // info
        document.getElementById("info").style.display = "block";
        // guidance
        document.getElementById("guidance").style.display = "none";
    }
    else if(toggler == "show"){
        // document
        document.getElementById("page")
        document.getElementById("page-container").style.gridTemplateColumns = columnsShow;
        document.getElementById("page-container").style.width = "100%";
        document.getElementById("page-container").style.minHeight = "90vh";
        document.getElementById("content").style.margin = "0";
        document.getElementById("content").style.maxWidth = "100vw";
        // info
        document.getElementById("info").style.width = "100%";
        document.getElementById("info").style.display = showInfo;
        // guidance
        document.getElementById("guidance").style.display = "block";
        
    }
}

function changeSize(){
    if (window.matchMedia("(min-width: 1000px)").matches) {

        setColumnSize("50% 50%");
        document.getElementById("guidance").style.display = "none";

        // big screens
        document.getElementById("info").style.display = "block";
        document.getElementById("info").style.minHeight = "90vh";
        
        showInfo = "block";
        infoHeight = document.getElementById("info").offsetHeight;
        // console.log(infoHeight);
        document.getElementById("guidance").style.display = "none";
        document.getElementById("guidance").style.border = "8px solid orange";
        document.getElementById("guidance").style.width = "100%";
        document.getElementById("guidance").style.height = infoHeight + "px";
        
    } 
    else { 
        // small screens
        setColumnSize("0% 100%");
        document.getElementById("guidance").style.border = "none";
        document.getElementById("guidance").style.width = "100vw";
        if(toggler == "show"){
            showInfo = "none";
        }
    }
    toggleHideShow();
}

// Check for changes on resize
var infoHeight;
function resize(){
    console.log("resize");
    if(document.title == "Fangstdagbok - SailorsMate"){
        infoHeight = document.getElementById("info").offsetHeight;
        changeSize();
    }
    changeNavbar();
}

changeNavbar();
window.onresize = resize;



