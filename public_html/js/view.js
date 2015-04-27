/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var path = "http://elvis.rowan.edu/~mclaug67/adb/template.php?mode=view"

function view(table, select) {
    var header = path + "&table=" + table;
    header += "&select=" + select;
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
        } else if (e.value.trim() !== "") {
            string += "&" + e.getAttribute("id") + "=" + e.value;
        }
    }
    if (string === header) {
        alert("Please enter value(s) in fields in order to search");
        return;
    }
    string = string.replace(/ /g, "%20");
    getViewPhp(string);

    if (genreflag) {
        value = document.getElementById("ISBM").value;
        viewgenre(value);
    }
}

function viewgenre(ISBN) {
    var string = path + "?table=genre";
    string += "&select=*";
    string += "&ISBN=" + ISBN;
    //call PHP
    alert(string);
}

function viewpublisher(publisherID) {
    var string = path + "?table=genre";
    string += "&select=*";
    string += "&publisher_ID=" + publisherID;
    //call PHP
    alert(string);
}

function getViewPhp(url) {
    $.get(url, function (data) {
        var phpcontant = data.substring(data.indexOf("<p>") + 3, data.indexOf("</p>")).split(",");
        for (var i = 0; i < phpcontant.length; i++) {
            var e = phpcontant[i].split(":");
            if (document.getElementById(e[0])) {
                document.getElementById(e[0]).value = e[1];
            }
        }
    });
}

function displaybook(id) {
    var url = path + "&table=book"
    $.get(url, function (data) {
        var phpcontant = data.substring(data.indexOf("<p>") + 3, data.indexOf("</p>")).split(",");
        var string = "<select id='select_book' width='100%'><option>hi</option>";
        for (var i = 0; i < phpcontant.length; i++) {
            var e = phpcontant[i].split(":");
            if(e[0]=='ISBN'){
                string+="<option value='"+e[1]+">";
            }else if(e[0]=="title"){
                string+=e[1]+"</option>"
            }
        }
        string+="</select>";
        document.getElementById(id).innerHTML=string;
    });
}

