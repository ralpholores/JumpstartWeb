(function(){
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyA_n29APXCRX63dO-tPtQxSBm0kBjALzmU",
    authDomain: "jumpstart-db0c6.firebaseapp.com",
    databaseURL: "https://jumpstart-db0c6.firebaseio.com",
    storageBucket: "jumpstart-db0c6.appspot.com",
    messagingSenderId: "192149858763"
  };
  firebase.initializeApp(config);
  
  //Create references
}());

function upload(){

    var file = e.target.files[0];

    //Get storage reference
    var storageRef = firebase.storage().ref('milestones/' + file.name);

    //Upload a file
    storageRef.put(file);
}