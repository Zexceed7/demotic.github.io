
var firebaseConfig = {
	apiKey: "AIzaSyAUURAIvtgGFPF1fzGhGJc23ldDSD-I8vg",  
	authDomain: "rifa-amzn.firebaseapp.com",
	databaseURL: "https://rifa-amzn-default-rtdb.firebaseio.com",
	projectId: "rifa-amzn",
	storageBucket: "rifa-amzn.appspot.com",
	messagingSenderId: "36339791681",
	appId: "1:36339791681:web:5a3af7337054fe329793c0"
  };
// Initialize Firebase
var firebase;
firebase.initializeApp(firebaseConfig);



function post_daddy(){
    var blog ={
        text: document.getElementById("daddy-ticket").value
    }
    firebase.database().ref("Daddy/").set(blog)
    document.getElementById("daddy-ticket").value="" 
};

function post_maluma(){
  var blog ={
      text: document.getElementById("maluma-ticket").value
  }
  firebase.database().ref("Maluma/").set(blog)
  document.getElementById("maluma-ticket").value="" 
};

function post_fobia(){
  var blog ={
      text: document.getElementById("fobia-ticket").value
  }
  firebase.database().ref("Fobia/").set(blog)
  document.getElementById("fobia-ticket").value="" 
};

function post_iron(){
  var blog ={
      text: document.getElementById("iron-ticket").value
  }
  firebase.database().ref("Iron/").set(blog)
  document.getElementById("iron-ticket").value="" 
};

function post_ramm(){
  var blog ={
      text: document.getElementById("ramm-ticket").value
  }
  firebase.database().ref("Rammstein/").set(blog)
  document.getElementById("ramm-ticket").value="" 
};

function post_mon(){
  var blog ={
      text: document.getElementById("mon-ticket").value
  }
  firebase.database().ref("Mon/").set(blog)
  document.getElementById("mon-ticket").value="" 
};

function post_will(){
  var blog ={
      text: document.getElementById("will-ticket").value
  }
  firebase.database().ref("Will/").set(blog)
  document.getElementById("will-ticket").value="" 
};