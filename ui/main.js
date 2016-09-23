console.log('Loaded!');
var element = document.getElementById("romy");
element.onclick = function() {
    var interval = setInterval(moveRight, 100);
};
var margin = 0;
var moveLeft = function() {
    margin+=10;
    element.style.marginLeft(margin+"px");
};