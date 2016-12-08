  // Initialize Firebase

  var email = "";
  const config = {
    apiKey: "AIzaSyA_n29APXCRX63dO-tPtQxSBm0kBjALzmU",
    authDomain: "jumpstart-db0c6.firebaseapp.com",
    databaseURL: "https://jumpstart-db0c6.firebaseio.com",
    storageBucket: "jumpstart-db0c6.appspot.com",
    messagingSenderId: "192149858763"
  };

firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
            var uid = firebaseUser.uid;
            var uploader = document.getElementById('uploader');
            var fileButton = document.getElementById('fileButton');
            var pLocation = "gs://jumpstart-db0c6.appspot.com/Milestone";

          //Create references
          const dbRefObject = firebase.database().ref().child('Jumpstart').child('SME2');
          const auth = firebase.auth();
          // var uid = document.getElementById("uid");
          var storageRef = firebase.storage().ref();


            
                    document.getElementById('fileButton').addEventListener("change", function(e) {
                    var fileLength = e.target.files.length;
                    var files = [];
                    var fileNames = [];

                    for (var i = 0; i < fileLength; i++) {
                              files.push(e.target.files[i]);
                    }

                    console.log(files.length);  

                    var uploadTask;
                    for (var i = 0; i < fileLength; i++) {
                      uploadTask = storageRef.child('Milestone/' + files[i].name).put(files[i]);
                      photoName = files[i].name;
                      mPhotos = {Name: photoName, Location: pLocation};
                      database = dbRefObject.child(uid).child('project_list').child(i).child('milestones');
                      console.log(database);    
                      database.push().set(mPhotos);
                    }
                  });

            document.getElementById('create').addEventListener("click",function(){
              var uid,userEmail;
              firebase.auth().onAuthStateChanged(firebaseUser => {
                    if(firebaseUser){
                      uid = firebaseUser.uid;
                      console.log(firebaseUser.uid);
                      //alert(firebaseUser.email);
                      var startUpTitle = document.getElementById("title").value;
                      var startUpStory = document.getElementById("story").value;
                      var neededFund = parseInt(document.getElementById("goalAmount").value);
                      var userEmail = firebaseUser.email;
                      var container = $("#project_container");
                      var currentRows = Number(container.attr("data-rows"));

                    const dbRefObject = firebase.database().ref().child('Jumpstart').child('SME2');
                    var projectObject = {
                          ads_url : "ajskldjsladjlksa",
                          description : startUpStory, 
                          end_date : 11.8,
                          id : 3,
                          milestones : {
                            id : 0
                          },
                          name : startUpTitle,
                          needed_fund : 1234,
                          progress : 0,
                          project_category : "technology",
                          received_fund : 0,
                          slogan : "slogan",
                          sme_id: 3,
                          start_date : 8.10,
                          wishlist_counter : 5
                      };
                    const projectRef = dbRefObject.child(uid).child('project_list').child(startUpTitle).set(projectObject);
                    console.log(projectRef.key);
                    }else{
                      console.log('not logged in');
                    }
                  }); 
                });//end of create function
                
      }
});


 
firebase.initializeApp(config);


  
  
  

  // fileButton.addEventListener('change', function (e){
  //     var photosLength = e.target.length;
  //     var photos = [];
  //     var photoName = [];

  //     alert(photosLength);

  //     // for(var i = 0;i < photosLength;i++){
  //       //photos.push(e.target.files[i]);
  //     //}

  //       // var uploadTask;
  //       // for (var o = 0; o < fileLength; o++) {
  //       //     uploadTask = storageRef.child('Milestone/' + files[o].name).put(files[o]);
  //       //          Photos = files[o].name; // dili ni pwede butngnan og var ang Songs?
  //       //      var mPhotos = { Name: Photos, Location: pLocation };
  //       //                             var database = databaseRef.child('milestones');
  //       //                             database.push().set(mPhotos);
          
  //       //   // mao ni ang pag retrieve gkan firebase
             
  //       // } 




 function push(){ 
     
}
