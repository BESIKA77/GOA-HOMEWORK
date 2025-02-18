const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");
const container = document.getElementById("container-of-all-code");
const andriasSaxeli = document.getElementById("andrias-saxeli");

darkMode.addEventListener("click",function(){
    document.body.style.backgroundColor = 'black';
    container.style.color = 'white';
});

lightMode.addEventListener("click",function(){
    document.body.style.backgroundColor = "white";
    container.style.color = 'black';
});