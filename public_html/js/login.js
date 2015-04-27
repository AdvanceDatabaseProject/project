/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var path = "http://elvis.rowan.edu/~mclaug67/adb/template.php?mode=view&table=users&select=*";
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username !== "" && password !== "") {
        var url = path + "&username=" + username + "&password=" + password;
        $.get(url, function (data) {
            if (data.indexOf("username") > -1 && data.indexOf("password") > -1 && data.indexOf("customerID") > -1) {
                if (username = "admin") {
                    window.location = "/admin/admin.html"
                } else {
                    var phpcontant = data.substring(data.indexOf("<p>") + 3, data.indexOf("</p>")).split(",");
                    var customerID = phpcontant[2].split(":");
                    document.cookie = "customerID=" + customerID;
                }
            } else {
                alert("Username or password is incorrect!");
            }
        });
    }else{
        alert("Please enter username and password!")
    }
}

