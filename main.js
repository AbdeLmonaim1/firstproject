let input = document.querySelector(".input");
let body = document.querySelector("body");
let header = document.querySelector("h1");
input.chicked = JSON.parse (localStorage.getItem("mode"));
updateBody();
function updateBody() {
    if(input.checked){
        body.style.background = "black";
        header.style.color = "white";
    }else {
        body.style.background = "white";
        header.style.color = "black";
    }
}
input.addEventListener("input", ()=> {
    updateBody();
    updateStorage();
});
function updateStorage() {
   localStorage.setItem("mode", JSON.stringify(input.checked));
}