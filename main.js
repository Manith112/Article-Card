const listMenu = document.querySelector(".list");
const btn = document.querySelector(".share")
const imageAvatar = document.querySelector(".image");
const listMobile = document.querySelector(".list-mobile")
const shareMobile = document.querySelector(".share-mobile")
// mobile screen 

document.addEventListener('DOMContentLoaded', function () {
    function handleHover(){
  
        const  screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth > 600){
            listMenu.style.display = "flex";
        } else {
            listMenu.style.display = "none";
            listMobile.style.display = "flex"
            shareMobile.style.display = "flex"
        }
    }
    btn.addEventListener("mouseover", handleHover);

    window.addEventListener('resize', handleHover);

    btn.addEventListener('mouseout', function () {
        listMenu.style.display = 'none';
        listMobile.style.display = "none"
        shareMobile.style.display = "none"
       
      });
})