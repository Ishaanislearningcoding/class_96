var firebaseConfig = {
      apiKey: "AIzaSyCpSp7mCzdUVj8TRYvR5d05ZprkX9nyoMA",
      authDomain: "kwitter-c715b.firebaseapp.com",
      databaseURL: "https://kwitter-c715b-default-rtdb.firebaseio.com",
      projectId: "kwitter-c715b",
      storageBucket: "kwitter-c715b.appspot.com",
      messagingSenderId: "339654987152",
      appId: "1:339654987152:web:24fb0f54b475b952e2f715"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }