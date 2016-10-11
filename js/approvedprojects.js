var rootRef = firebase.database().ref().child('Jumpstart').child('SME');

var masrootRef = firebase.database().ref().child('Jumpstart').child('SME').child('project_list');


rootRef.on("child_added" , snap =>{

	var companyname = snap.child("company_name").val();
	var email = snap.child("email_address").val();
	const projectName = snap.child("project_list").child('0').child('name').val();
	const projectCategory = snap.child("project_list").child('0').child('project_category').val();
	const slogan = snap.child("project_list").child('0').child('slogan').val();
	const neededF = snap.child("project_list").child('0').child('needed_fund').val();
	const recievedF = snap.child("project_list").child('0').child('recieved_fund').val();

	console.log(projectName);
	console.log(projectCategory);
	$("#loading").hide();
	$("#mainContent").removeClass("hidden");
    $("#table_body").append("<tr><td>" + companyname + "<br><br>" + "Project:&nbsp" + projectName + "<br>"+ "Category:&nbsp" +  projectCategory + "<br>"+ 
    	"Slogan:&nbsp" + slogan+ "<br>"+ "Needed Funds:&nbsp" + neededF +"<br>"+ "Recieved Funds:&nbsp "+ recievedF +"</td><td>" + email +   "</td><td><button>Remove</button></td></tr>");


});





