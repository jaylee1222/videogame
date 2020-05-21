function nextPage() {
    var form = document.querySelector("form");
    form.addEventListener("click", function(event) { document.location.href = '/game.html'});
}
function saveName() {
var getInput = document.getElementById("Name").value;
localStorage.setItem("gamename",getInput);
}
