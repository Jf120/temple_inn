function setDate() {
    // set current year in footer
    const currentDate = new Date();
    document.querySelector('#year').textContent = currentDate.getFullYear();
}

function navBar() {
    // Sets navigation bar depending on media screen size
    let menu = document.querySelector(".icon");
    menu.onclick = function() {
        let nav = document.querySelector("#nav");
        if (nav.style.display === "" || nav.style.display === "none") {
            let ul = document.querySelector("#nav ul");
            nav.style.display = "flex";
            nav.style.gridRow = "2";
            nav.style.gridColumn = "1 / 8";
            ul.style.flexDirection = "column";
            nav.style.justifyContent = "center";
            nav.style.alignItems = "center";
        }

        else {
            nav.style.display = "";
        }
    }

    let size = window.matchMedia("(min-width: 690px)");
    function showNav(size) {
        if (size.matches) {
            document.getElementById("nav").style.display = "block";   
            document.querySelector("#nav ul").style.flexDirection = "row";
            document.querySelector("#nav").style.gridColumn = "2 / 8";
            document.querySelector("#nav").style.gridRow = "1";
        }
        else {
            document.getElementById("nav").style.display = "none";
        }
    }
    size.addEventListener("change", showNav);

}

function iconMenu () {
    
    // Change image depending on media screen size
    if (screen.width < 490) {
        document.getElementById("icon").src = "./images/icon-small.png";
    }

    else {
        document.getElementById("icon").src = "./images/menu.png";
    }


    let sizeImg = window.matchMedia("(max-width: 490px)");
    function changeImage() {
        if (screen.width < 490) {
            document.getElementById("icon").src = "./images/icon-small.png";
        }
        
        else {
            document.getElementById("icon").src = "./images/menu.png";
        }   
    }
    sizeImg.addEventListener("change", changeImage);
}

export { navBar, iconMenu, setDate };