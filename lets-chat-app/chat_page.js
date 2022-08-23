
	// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA48T0E2DCT2IJn2FgYW3Y65FqyQH5j854",
    authDomain: "lets-chat-app-891d8.firebaseapp.com",
    databaseURL: "https://lets-chat-app-891d8-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-891d8",
    storageBucket: "lets-chat-app-891d8.appspot.com",
    messagingSenderId: "239289994978",
    appId: "1:239289994978:web:95bab9f562ab012b08d8bb"
  };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");


user_name = localStorage.getItem("user_name");

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({name:user_name,message:msg, like:0});

    document.getElementById("msg").value = "";
}