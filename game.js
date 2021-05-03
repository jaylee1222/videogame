var a = location.href;
var name = a.substring(a.indexOf("?")+6);
var playername = name

function scene1(name) {
    document.getElementById("gamestage").innerHTML = "You lay, barely conscious, you feel the bindings on your wrists and ankles. Your head aches but from what you can't remember. A murmur leaves your lips and with that, you hear shuffling from what must be the room next door.";
    document.getElementById("button 1").innerHTML = "<button onclick = 'scene2()'>struggle to try to break free</button>"
    document.getElementById("button 2").innerHTML = "<button onclick = 'scene3()'>scream to see if maybe somebody can help</button>"
    document.getElementById("button 3").innerHTML = "<button onclick = 'scene4()'>move your head to try to see what's making the noise</button"
    document.getElementById("button 4").innerHTML = "<button onclick = 'scene5()'>look around the room</button>"
}

function scene2(name) {
    document.getElementById("gamestage").innerHTML = "Hello, " + name + " careful now, you don't want to hurt those delicate wrists of yours. It would be a shame if you hurt them, would make it mighty hard to write, wouldn't it? Nobody wants that, especially me.";
    document.getElementById("button 1").innerHTML = "<button onclick = 'scene3()'>Try to struggle free again</button>"
    document.getElementById("button 2").innerHTML = "<button onclick = ''>You son of a bitch, what do you want with me?</button>"
    document.getElementById("button 3").innerHTML = "<button onclick = ''>"
}

scene1(name)
