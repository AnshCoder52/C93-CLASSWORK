
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBRwYSBuRIBjyx8bRsdmLUOSFWXiOHSa6w",
      authDomain: "kwitter-748b8.firebaseapp.com",
      projectId: "kwitter-748b8",
      storageBucket: "kwitter-748b8.appspot.com",
      messagingSenderId: "117047365859",
      appId: "1:117047365859:web:859157d8ccfc12c10835d6",
      measurementId: "G-DEZ2DSPMQG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
