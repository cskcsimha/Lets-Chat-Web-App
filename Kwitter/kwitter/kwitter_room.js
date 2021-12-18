
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD49qN6C-ivo5gUS9-rbwbCJQLQkaT-N1Y",
  authDomain: "classtest-33a16.firebaseapp.com",
  databaseURL: "https://classtest-33a16-default-rtdb.firebaseio.com",
  projectId: "classtest-33a16",
  storageBucket: "classtest-33a16.appspot.com",
  messagingSenderId: "1085496123529",
  appId: "1:1085496123529:web:7f638864d1c95127d6e658"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location.replace("kwitter_page.html");
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}