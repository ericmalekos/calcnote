
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
