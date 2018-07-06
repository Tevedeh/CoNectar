var i = 0;
var j = 0;
var url1 = "http://localhost:9001";
var url2 = "http://proj-309-ss-4.cs.iastate.edu:9001";
var url = url2;

function loadReports (){
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
		if(http.readyState == 4){
			var response = JSON.parse(http.responseText);
			clearBox("div1");
			var tbl=$("<table/>").attr("id","mytable");
		    $("#div1").append(tbl);
		    $("#mytable").append("<tr>" + "<th>Reported ID</th>" + "<th>Reporter ID</th>" + 
		    	"<th>Reason</th>" + "<th>Details</th>" + "</tr>");
 				var count = 0;
 				if(i == response.users.length){
 					i=0;
 				}
		    for (i = i; i < response.users.length; i++) {
			    if(count == 10){
			    	break;
			    }
			    var tr="<tr>";
			    var td1="<td>"+response.users[i].reported["id"]+"</td>";
		        var td2="<td>"+response.users[i].reporter["id"]+"</td>";
		        var td4="<td>"+response.users[i]["reason"]+"</td>";
		        var td5="<td>"+response.users[i]["details"]+"</td></tr>";
		        count++;
		       $("#mytable").append(tr+td1+td2+td4+td5); 
			}
		}
	}
	http.open("GET", url + "/ben/report", true);
	http.send();
}


function getSpecificUserReports() {
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
		if(http.readyState == 4){
			var response = JSON.parse(http.responseText);
			clearBox("div1");
			var tbl=$("<table/>").attr("id","mytable");
		    $("#div1").append(tbl);
		    $("#mytable").append("<tr>" + "<th>Reported ID</th>" + "<th>Reporter ID</th>" + 
		    	"<th>Reason</th>" + "<th>Details</th>" + "</tr>");x
 				var count = 0;
 				if(i == response.users.length){
 					i=0;
 				}
		    for (i = i; i < response.users.length; i++) {
			    if(count == 10){
			    	break;
			    }
			    var tr="<tr>";
			    var td1="<td>"+response.users[i].reported["id"]+"</td>";
		        var td2="<td>"+response.users[i].reporter["id"]+"</td>";
		        var td4="<td>"+response.users[i]["reason"]+"</td>";
		        var td5="<td>"+response.users[i]["details"]+"</td></tr>";
		        count++;
		       $("#mytable").append(tr+td1+td2+td4+td5); 
			}
		}
	}
    var x, y, text;
    id = document.getElementById("UserID").value;
    var request = url2 + "/ben/report/" + id;
   
    http.open("GET", request, true);
	http.send();
}

function banUser () {
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){

		if(http.readyState == 4){

			document.getElementById(div1).innerHTML = "Success";

		}
	}
    var x, y, text;
    id = document.getElementById("UserID").value;
    var request = url + "/ben/block/" + id;
   
    http.open("POST", request, true);
	http.send();
}

function unBanUser () {
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){

		if(http.readyState == 4){

			document.getElementById(div1).innerHTML = "Success";

		}
	}
    var x, y, text;
    id = document.getElementById("UserID").value;
    var request = url + "/ben/block/" + id;
   
    http.open("DELETE", request, true);
	http.send();
}

function removeReport () {
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){

		if(http.readyState == 4){

			document.getElementById(div1).innerHTML = "Success";

		}
	}
    x = document.getElementById("ed").value;
    y = document.getElementById("er").value;
    var request = url + "/ben/report/" + x + "/from/" + y;
   
    http.open("DELETE", request, true);
	http.send();
}

function goModeratorHome() {
	 window.location="ModeratorHome.html";
}

function goModeratorReports() {
	window.location="ModeratorReports.html";
}

function goSpecificReports() {
	window.location="ModeratorSpecificReports.html";
}

function goBan() {
	window.location="ModeratorBan.html";
}

function goUnBan() {
	window.location="ModeratorUnBan.html";
}

function goLogin() {
	window.location="../Login.html";
}

function goModeratorRemoveReport() {
	window.location="ModeratorRemoveReport.html";
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}