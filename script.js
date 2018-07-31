var volu;
var temp;
var mols;
var pres;
var gasConst = 8.314;


var mm = 0;

document.getElementById("molesInElem").value = 1;

var pElements = [
    "H",
    "He",
   "Be"

];

//    for (var x in pElements) {
  //      alert(x.valueOf);
   // }
    //alert(element);

function Clear() {
    document.getElementById("elemList").innerHTML = "";
    mm = 0;
    document.getElementById("massOfElem").value = "";
    document.getElementById("molesInElem").value = "1";

}

function GetMass() {

  //  for (var x in document.getElementById("elemList").innerHTML) {
    //    alert(x);
    // }

    mm *= document.getElementById("molesInElem").value;
     document.getElementById("massOfElem").value = mm;

    mm /= document.getElementById("molesInElem").value;
   
}
function GetMoles() {

    var k = 0;

    k = document.getElementById("massOfElem").value;
    k /= mm;
    document.getElementById("molesInElem").value = k;

}

function GetContent(x) {



  // var tempElem = document.getElementById("elemList").innerHTML;
    document.getElementById("elemList").innerHTML += x;

    // for (var x in tempElem)
    if (x == "H") {
        mm += 1.00794;
    } else if (x =="He") {
        mm += 4.002602 ;
    } else if (x == "Li") {
        mm += 6.941;
    } else if (x == "Be") {
        mm += 9.012182;
    } else if (x == "B") {
        mm += 10.811;
    } else if (x == "C") {
        mm += 12.0107;
    } else if (x == "N") {
        mm += 14.0067;
    } else if (x == "O") {
        mm += 15.999;
    } else if (x == "F") {
        mm += 18.998403;
    } else if (x == "Ne") {
        mm += 20.1797;
    } else if (x == "Na") {
        mm += 22.989769;
    } else if (x == "Mg") {
        mm += 24.305;
    } else if (x == "Al") {
        mm += 26.981539;
    } else if (x == "Si") {
        mm += 28.0855;
    } else if (x == "P") {
        mm += 30.973762;
    } else if (x == "S") {
        mm += 32.065;
    } else if (x == "Cl") {
        mm += 35.4533;
    } else if (x == "Ar") {
        mm += 39.948;
    } else if (x == "K") {
        mm += 39.0983;
    } else if (x == "Ca") {
        mm += 40.078;
    } else if (x == "Sc") {
        mm += 44.955912;
    } else if (x == "Ti") {
        mm += 47.867;
    } else if (x == "V") {
        mm += 50.9415;
    } else if (x == "Cr") {
        mm += 51.9961;
    } else if (x == "Mn") {
        mm += 54.938044;
    } else if (x == "Fe") {
        mm += 55.845;
    } else if (x == "Co") {
        mm += 58.933195;
    } else if (x == "Ni") {
        mm += 58.6934;
    } else if (x == "Cu") {
        mm += 63.546;
    } else if (x == "Zn") {
        mm += 65.38 ;
    } else if (x == "Ga") {
        mm += 69.723;
    } else if (x == "Ge") {
        mm += 72.64 ;
    } else if (x == "As") {
        mm += 74.9216;
    } else if (x == "Se") {
        mm += 78.96 ;
    } else if (x == "Br") {
        mm += 79.904 ;
    } else if (x == "Kr") {
        mm += 83.798;
    } 



}


function Calculate() {

    pres = document.getElementById("pres").value;
    temp = document.getElementById("temp").value;
    volu = document.getElementById("volu").value;
    mols = document.getElementById("mols").value;


    
    var volux = parseFloat(volu);
    var tempx = parseFloat(temp);
    var molsx = parseFloat(mols);
    var presx = parseFloat(pres);



    //this is for checking which inputs are valid
    if (volu.length < 1) {
        tempx += 273.15;
        var answer = tempx * gasConst * molsx;
        answer /= presx;
        document.getElementById("volu").value = answer;
    } else
        if (temp.length < 1) {
			
			var answer = presx*volux;
			answer /= (molsx * gasConst);
			answer -= 273.15;
			
            document.getElementById("temp").value = answer;
        } else
            if (mols.length < 1) {
				tempx += 273.15;
				var answer = presx * volux;
				answer /= (gasConst*tempx);
				
                document.getElementById("mols").value = answer;
            } else
                if (pres.length < 1) {
                    tempx += 273.15;
                    var answer = tempx * gasConst * molsx;
                    answer /= volux;
                    document.getElementById("pres").value = answer;
                } else {
                    alert("Please Leave An Empty Text Field");
                }


}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    var jason = (evt.keyCode);

    if (charCode == 190 || charCode == 48 || charCode == 49 || charCode == 50 || charCode == 51 || charCode == 52 || charCode == 53 || charCode == 54 || charCode == 55 || charCode == 56 || charCode == 57 || charCode == 58) {

        return true;
        
    }
    return true;
}

function alertTest() {
    alert("Please Leave An Empty Text Field");
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}