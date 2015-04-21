/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function addBook(){
    var content=document.getElementById("more_book");
    content.innerHTML=content.innerHTML+"Title: \n\
        <span name='list_book'></span>\n\
        Amount:\n\
        <input type='text' name='stock' size='1'><br>";
}