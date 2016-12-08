// (function(){
//   // Initialize Firebase
//   var email = "";
//   const config = {
//     apiKey: "AIzaSyA_n29APXCRX63dO-tPtQxSBm0kBjALzmU",
//     authDomain: "jumpstart-db0c6.firebaseapp.com",
//     databaseURL: "https://jumpstart-db0c6.firebaseio.com",
//     storageBucket: "jumpstart-db0c6.appspot.com",
//     messagingSenderId: "192149858763"
//   };
//   firebase.initializeApp(config);

//   //Create references
//   const dbRefObject = firebase.database().ref().child('Jumpstart').child('SME2');
//   const auth = firebase.auth();
//   // var uid = document.getElementById("uid");
//   var storageRef = firebase.storage().ref();
  
//   var uploader = document.getElementById('uploader');
//   var fileButton = document.getElementById('fileButton');
//   var pLocation = "gs://jumpstart-db0c6.appspot.com/Milestone/";

//   fileButton.addEventListener('change', function (e){
//       var photosLength = e.target.length;
//       var photos = [];
//       var photoName = [];

//       for(var i = 0;i < photosLength;i++){
//         photos.push(e.target.files[i]);
//       }

//         var uploadTask;
//         for (var o = 0; o < fileLength; o++) {
//             uploadTask = storageRef.child('Milestone/' + files[o].name).put(files[o]);
//                  photos = files[o].name; // dili ni pwede butngnan og var ang Songs?          
//           // mao ni ang pag retrieve gkan firebase
             
//         }

//         uploadTask.on('state_changed',
//                 function (snapshot) {
//                     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                     console.log('Upload is ' + progress + '% done');
//                     uploader.value = progress;
//                     switch (snapshot.state) {
//                         case firebase.storage.TaskState.PAUSED:
//                             console.log('Upload is paused');
//                             break;
//                         case firebase.storage.TaskState.RUNNING:
                            
//                             break;
                       
//                     }
//                 }, function (error) {
//                     switch (error.code) {
//                         case 'storage/unauthorized':
//                             // User doesn't have permission to access the object
//                             break;

//                         case 'storage/canceled':
//                             // User canceled the upload
//                             break;

//                         case 'storage/unknown':
//                             // Unknown error occurred, inspect error.serverResponse
//                             break;
//                     }
//                 }, function () {
//                     // Upload completed successfully, now we can get the download URL
//                     var downloadURL = uploadTask.snapshot.downloadURL; // unsaon ni pag apil sa loop? dli siya pareha sa android nga pwede ra tawgon ang variable sa ubos padung sa taas

//                 });

                   
//   }); 

//   }());