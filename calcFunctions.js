
function insert(num){
            document.form.textview.value = document.form.textview.value+num
        }

function equal(){
            var exp = document.form.textview.value
            if(exp){
                out = eval(exp)
                document.form.textview.value = eval(exp)
                newElement(exp, out)
            }
        }

function clean(){
            document.form.textview.value = ""
        }

function back(){
            var exp = document.form.textview.value
            document.form.textview.value = exp.substring(0,exp.length-1)
        }


function insert2(num){
            document.form2.textview2.value = document.form2.textview2.value+num
        }

function equal2(){
            var exp = document.form2.textview2.value
            if(exp){
                out = eval(exp)
                document.form2.textview2.value = eval(exp)
                newElement(exp, out)
            }
        }

function clean2(){
            document.form2.textview2.value = ""
        }

function back2(){
            var exp = document.form2.textview2.value
            document.form2.textview2.value = exp.substring(0,exp.length-1)
        }

function openCalc(evt, calcType) {
    // Declare all variables
    var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(calcType).style.display = "block";
    evt.currentTarget.className += " active";
}

	document.getElementById("defaultOpen").click();

function sqroot(){
    var exp = document.form2.textview2.value
        if(exp){
            out = Math.sqrt(document.form2.textview2.value)
            document.form2.textview2.value = Math.sqrt(document.form2.textview2.value)
            newElement("√(" + exp + ")", out)
        }
}

function log(){
    var exp = document.form2.textview2.value
        if(exp){
            out = Math.log10(document.form2.textview2.value)
            document.form2.textview2.value = Math.log10(document.form2.textview2.value)
            newElement("log(" + exp + ")", out)
        }
}

function ln(){
    var exp = document.form2.textview2.value
        if(exp){
            out = Math.log(document.form2.textview2.value)
            document.form2.textview2.value = Math.log(document.form2.textview2.value)
            newElement("ln(" + exp + ")", out)
        }
}

function sin(){
    var exp = document.form2.textview2.value
        if(exp){
            out = Math.sin(document.form2.textview2.value)
            document.form2.textview2.value = Math.sin(document.form2.textview2.value)
            newElement("sin(" + exp + ")", out)
        }
}
function arcsin(){
    var exp = document.form2.textview2.value
        if(exp){
            out = Math.asin(document.form2.textview2.value)
            document.form2.textview2.value = Math.asin(document.form2.textview2.value)
            newElement("arcsin(" + exp + ")", out)
        }
}

function cos(){
    var exp = document.form2.textview2.value
        if(exp){
            out = Math.cos(document.form2.textview2.value)
            document.form2.textview2.value = Math.cos(document.form2.textview2.value)
            newElement("cos(" + exp + ")", out)
        }
}
function arccos(){
    var exp = document.form2.textview2.value
        if(exp){
            out = Math.acos(document.form2.textview2.value)
            document.form2.textview2.value = Math.acos(document.form2.textview2.value)
            newElement("arccos(" + exp + ")", out)
        }
}
function tan(){
    var exp = document.form2.textview2.value
        if(exp){
            out =  Math.tan(document.form2.textview2.value)
            document.form2.textview2.value =  Math.tan(document.form2.textview2.value)
            newElement("tan(" + exp + ")", out)
        }
}
function arctan(){
    var exp = document.form2.textview2.value
        if(exp){
            out = Math.atan(document.form2.textview2.value)
            document.form2.textview2.value = Math.atan(document.form2.textview2.value)
            newElement("arctan(" + exp + ")", out)
        }
}