/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var path = "http://elvis.rowan.edu/~mclaug67/adb/template.php?mode=report&table=";
function display(id) {
    var url = path + id;
    var column = [];
    $.get(url, function (data) {
        var phpcontant = data.substring(data.indexOf("<p>") + 3, data.indexOf(",</p>")).split(",");
        for (var i = 0; i < phpcontant.length; i++) {
            var element = phpcontant[i].split(":");
            if (i>0) {
                if (element[0] != column[0]) {
                    column.push(element[0]);
                } else if (element[0] == column[0]) {
                    break;
                }
            } else {
                column.push(element[0]);
            }
        }
        var string = "<table border='1' style='width:100%'><thead><tr>"
        for (var i = 0; i < column.length; i++) {
            string += "<th>" + column[i] + "</th>";
        }
        string+="</tr></thead><tbody><tr>"
        for (var i = 0; i < phpcontant.length; i++) {
            var element = phpcontant[i].split(":");
            if (i>0&&element[0] === column[0]) {
                string += "</tr><tr>";
            }
            string += "<td>" + element[1] + "</td>"
        }
        string += "</tr></tbody></table>"
        document.getElementById("list").innerHTML = string;
    });
}