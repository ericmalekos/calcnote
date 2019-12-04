/*
var move = document.getElementsByID("move");
var i;
for (i = 0; i < close.length; i++) {
  move[i].onclick = function() {
    var div = this.parentElement;
    document.getElementById(noteText).appendChild(this.textContent);
  }
}*/

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement(exp, out) {
  var li = document.createElement("li");
  var t = document.createTextNode(exp + " = "+ out);
  var z = document.createElement("a");
  li.setAttribute("onClick", "addtext(\"" + exp + " = "+ out + "\")");
  li.setAttribute("class", "historyList")
  z.appendChild(t);
  li.appendChild(z);
  document.getElementById("histList").appendChild(li);

  var span = document.createElement("SPAN");
//  var txt = document.createTextNode("\u27A1");
  span.className = "move";
//  span.appendChild(txt);
  li.appendChild(span);

  /*for (i = 0; i < close.length; i++) {
    move[i].onclick = function() {
      var div = this.parentElement;
      document.getElementById(noteText).appendChild(this.textContent);
    }
  }*/
}
