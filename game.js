var a = location.href;
var name = a.substring(a.indexOf("?")+6);

function scene1(name) {
    document.getElementById("gamestage").innerHTML = "On a dark, stormy night, " + name + " walked into the scary house."
}

scene1(name)