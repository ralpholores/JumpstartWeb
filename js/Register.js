(function(){   
    var config = {
        apiKey: "AIzaSyA_n29APXCRX63dO-tPtQxSBm0kBjALzmU",
        authDomain: "jumpstart-db0c6.firebaseapp.com",
        databaseURL: "https://jumpstart-db0c6.firebaseio.com",
        storageBucket: "jumpstart-db0c6.appspot.com",
        messagingSenderId: "192149858763"
    };
    firebase.initializeApp(config);
    
    const mbtnSignUp = document.getElementById('btnSignUp');

     const mbtnLogin = document.getElementById('btnLogin');
    
    var databaseRef = firebase.database().ref();

  

mbtnSignUp.addEventListener('click', e=>{

  var mFirstname = document.getElementById('txtFirstName').value;
  var mLastname = document.getElementById('txtLastName').value;
  var mEmail = document.getElementById('txtEmail').value;
    var mPass = document.getElementById('txtPass').value;
  const mAuth = firebase.auth();
  console.log(mEmail);
 console.log(mPass);
     // const promise = firebase.auth().CreateUserWithEmailAndPassword(email, pass);
     // promise.catch(e => console.log(e.message));

	var test = firebase.auth().createUserWithEmailAndPassword(mEmail, mPass).then(function() {
		var user = firebase.auth().currentUser;

           user.sendEmailVerification().then(function() {
             alert('Email Verification Sent!');
            }, function(error) {
				console.log(error);
            });		

		var mAccount = 
        { 
          Firstname: mFirstname,
          Lastname: mLastname,
          email: mEmail, 
          pass: mPass 
        };

        var database = databaseRef.child('WEBSME');
            database.push().set(mAccount);

        
	},function(error) {
		console.log(error.code)
		alert(error.message);
    });

     console.log(test);

     
 
});

function login()
{
 alert('ok');
}

mbtnLogin.addEventListener('click', e=>{

  var mLemail = document.getElementById("txtLEmail").value;
  var mLpassword = document.getElementById("txtLPassword").value;
  const mAuth = firebase.auth();
  console.log(mLemail);
 console.log(mLpassword);


	var testing = firebase.auth().signInWithEmailAndPassword(mLemail, mLpassword).then(function() {
		var mAccount = 
		{ 
		  email: mLemail, 
		  pass: mLpassword 
		};

		var database = databaseRef.child('LOGGED');
			database.push().set(mAccount);
		console.log(database);
		window.location = "../JumpstartWEBfinal/pages/index.html";  
	}, function(error){
		alert(error.message)
	});



});




 function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
      if( $this.val() === '' ) {
        label.removeClass('active highlight'); 
      } else {
        label.removeClass('highlight');   
      }   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
        label.removeClass('highlight'); 
      } 
      else if( $this.val() !== '' ) {
        label.addClass('highlight');
      }
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});
}());
