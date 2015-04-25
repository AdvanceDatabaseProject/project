/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var path = "http://elvis.rowan.edu/~mclaug67/adb/template.php?mode=modify"

function modify(table) {
    var header = path + "&table=" + table;
    var string = header;
    var genreflag = false;
    var value;
    var inp = Array.prototype.slice.call(document.getElementsByTagName("input"));
    var sel = Array.prototype.slice.call(document.getElementsByTagName("select"));
    var inputs = inp.concat(sel);
    for (var i = 0; i < inputs.length; i++) {
        var e = document.getElementById(inputs[i].getAttribute("id"));
        if (e.getAttribute("id") === "genre" && table === "book") {
            genreflag = true;
        }  else if (e.value.trim() !== ""&&!e.disabled) {
            string += "&" + e.getAttribute("id") + "=" + e.value;
        }
    }
    if (string === header) {
        alert("Please enter value(s) in fields in order to search");
        return;
    }
    string = string.replace(/ /g, "%20");
    getModifyPhp(string);

    if (genreflag) {
        var ISBN=document.getElementById("ISBM").value;
        value = document.getElementById("genre").value.replace(/ /g, "%20").split(",");
        for(var i=0; i<value.length; i++){
            addgenre(ISBN,value[i]);
        }
    }
}

function modifygenre(ISBN,value){
    var string=path+"&ISBN="+ISBN+"&genrename="+value;
    getModifyPhp(url);
}

function getModifyPhp(url){
    $.get(url, function (data) {

    });
}