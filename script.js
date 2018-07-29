var volu;
var temp;
var mols;
var pres;
var gasConst = 8.314;

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
            document.getElementById("temp").value = volux + molsx + presx;
        } else
            if (mols.length < 1) {
                document.getElementById("mols").value = tempx + volux + presx;
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

    if (jason == keyCode(".")|| charCode == 48 || charCode == 49 || charCode == 50 || charCode == 51 || charCode == 52 || charCode == 53 || charCode == 54 || charCode == 55 || charCode == 56 || charCode == 57 || charCode == 58) {

        return true;
        
    }
    return true;
}