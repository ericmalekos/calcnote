

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
  span.className = "move";
  li.appendChild(span);


}
