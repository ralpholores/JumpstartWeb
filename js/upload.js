
function uploadFile(){

  // selectedFile = event.target.files[0];
  // // var filename = selectedFile.name;
  // var storageRef = firebase.storage().ref('/milestone/' + filename);
  var uploadTask = storageRef.put(selectedFile);

}