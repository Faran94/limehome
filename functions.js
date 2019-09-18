var html = "<table class = 'table table-hover'>";
html += "<tr>";
html += "<th>" + "<b>Name</b>" + "</th>";
html += "<th>" + "<b>Address</b>" + "</th>";
html += "<th>" + "<b>City</b>" + "</th>";
html += "<th>" + "<b>State</b>" + "</th>";
html += "<th>" + "<b>ZIP</b>" + "</th>";
html += "<th>" + "<b>Phone</b>" + "</th>";
html += "<th>" + "<b>Reserve</b>" + "</th>";
html += "<tr>";
for (var i = 0; i < allLocations.length; i++) {
    html += "<tr>";
    html += "<td>" + allLocations[i].name + "</td>";
    html += "<td>" + allLocations[i].address + "</td>";
    html += "<td>" + allLocations[i].city + "</td>";
    html += "<td>" + allLocations[i].state + "</td>";
    html += "<td>" + allLocations[i].zip + "</td>";
    html += "<td>" + allLocations[i].phone + "</td>";
    html += "<td>" + "<button  class='open-button' onclick='openForm()'>" + "Book" + "</button>" + "</td>";

    html += "</tr>";

}
html += "</table>";
document.getElementById("near_locations").innerHTML = html;

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}