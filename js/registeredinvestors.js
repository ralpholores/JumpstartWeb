var rootRef = firebase.database().ref().child('Jumpstart').child('Investor');



rootRef.on("child_added" , snap =>{

	var name = snap.child("first_name").val();
	var email = snap.child("email_address").val();


    $("#table_body").append("<tr><td>" + name + "</td><td>" + email +
                        "</td><td><button>Remove</button></td></tr>");

});