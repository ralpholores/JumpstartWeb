(function(){
  // Initialize Firebase
  var email = "";
  const config = {
    apiKey: "AIzaSyA_n29APXCRX63dO-tPtQxSBm0kBjALzmU",
    authDomain: "jumpstart-db0c6.firebaseapp.com",
    databaseURL: "https://jumpstart-db0c6.firebaseio.com",
    storageBucket: "jumpstart-db0c6.appspot.com",
    messagingSenderId: "192149858763"
  };
  firebase.initializeApp(config);

  //Create references
  const dbRefObject = firebase.database().ref().child('Jumpstart').child('SME');
  const auth = firebase.auth();
  // var uid = document.getElementById("uid"); 

}());



 function push(){
  
    var uid,userEmail;
    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      uid = firebaseUser.uid;
      console.log(firebaseUser.uid);
      //alert(firebaseUser.email);
      var url = document.getElementById("url").value;
      var projName = document.getElementById("projectName").value;
      var projDesc = document.getElementById("projectDescription1").value;
      var neededFund = parseInt(document.getElementById("neededFund").value);
      var userEmail = firebaseUser.email;

      const dbRefObject = firebase.database().ref().child('Jumpstart').child('SME2');
      dbRefObject.child(uid).set(
    {
      ads_url : "https://www.youtube.com/watch?v=4_SdDR5OU00",
      company_name : "USJ-R",
      description : "Empowering Lives, Breaking Barriers",
      email_address : userEmail,  
      id : 1,
      location : {
        address : "Basak",
        lat : 192.31,
        longLocation : 10.50
      },
      project_list : [{
        ads_url : url,
        description : projDesc, 
        end_date : 11.8,
        id : 3,
        milestones : {
          id : 0
        },
        name : projName,
        needed_fund : neededFund,
        progress : 0,
        project_category : "technology",
        received_fund : 0,
        slogan : slogan,
        sme_id: 3,
        start_date : 8.10,
        wishlist_counter : 5
      }]
    });
      alert(uid);
    }else{
      console.log('not logged in');
    }
  });  

}