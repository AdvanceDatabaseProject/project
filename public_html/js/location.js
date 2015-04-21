/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var head = "http://localhost:8383/DatabaseProject/";

function goCustomer() {
    window.location = head + "admin/customer_info.html"
}

function goPublisher() {
    window.location = head + "admin/publisher_info.html"
}

function goBook() {
    window.location = head + "admin/book_info.html"
}

function goInventory() {
    window.location = head + "admin/inventory.html"
}

function goLoad() {
    window.location = head + "admin/load_info.html"
}

function goReport(){
    window.location = head + "admin/report.html"
}

function goPlaceOrder() {
    window.location = head + "customer/place_order.html"
}

function goSearch() {
    window.location = head + "customer/search.html"
}

function goTrackOrder() {
    window.location = head + "customer/track_order.html"
}

function goCusReport(){
    window.location = head + "customer/report.html"
}
