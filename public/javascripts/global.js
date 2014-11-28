//User list array to fill info box
var userListData = [];

//When DOM loads...
$(document).ready(function(){
	//...populate the user table
	populateTable();
	$('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);
});

function populateTable() {
	var tableContent = '';

	//Make an AJAX call to obtain users as JSON
	$.getJSON('/users/userlist', function(data){
		userListData = data;
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

function showUserInfo(event) {
	//Prevent the link from firing
	event.preventDefault();

	var thisUserName = $(this).attr('rel');
	var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.username; }).indexOf(thisUserName);
	var thisUserObject = userListData[arrayPosition];

	//Populate user info area
	$('#userInfoName').text(thisUserObject.fullname);
	$('#userInfoAge').text(thisUserObject.age);
	$('#userInfoGender').text(thisUserObject.gender);
	$('#userInfoLocation').text(thisUserObject.location);
}