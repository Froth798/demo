window.onload = function (){
    setFont(1920,100)
}
window.onresize = function (){
    setFont(1920,100)
}
function setFont(width,prem){
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    var htmlDom = document.querySelector("html");
    htmlDom.style.fontSize = oWidth  / width * prem + "px"
}