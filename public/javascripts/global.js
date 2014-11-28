//User list array to fill info box
var userList = [];

//When DOM loads...
$(document).ready(function(){
	//...populate the user table
	populateTable();
});

function populateTable() {
	var tableContent = '';

	//Make an AJAX call to obtain users as JSON
	$.getJSON('/users/userlist', function(data){
		//For each user, create a HTML row and from the table body
		$.each(data, function(){
			tableContent += '<tr>';
			tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '" title="Show Details">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
			tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
			tableContent += '<tr>';
		});

		//add the generated table body content to the table on the index view
		$('#userList table tbody').html(tableContent);
	});
}