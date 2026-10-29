function toggleHorizontalMenu(e){
    e.parentNode.nextElementSibling.classList.toggle("active"); 
}
function toggleVerticalMenu(e){
    e.parentNode.nextElementSibling.classList.toggle("active");
}
function displayCurtainMenu(e){
    e.parentNode.nextElementSibling.classList.toggle("active");
}
function closeCurtainMenu(e){
    e.parentNode.classList.toggle("active");
}
function toggleDropdown(e){
    e.nextElementSibling.classList.toggle("active");
}
function toggleTab(n){
    tabs=document.getElementsByClassName("tab");
    tabContents=document.getElementsByClassName("tab-content");
    for(i = 0; i<tabs.length; i++){
        tabs[i].classList.remove("active");
    }
    for(i=0; i<tabContents.length;i++){
        tabContents[i].classList.remove("active");
    }
    tabs[n-1].classList.add("active");
    tabContents[n-1].classList.add("active");
}