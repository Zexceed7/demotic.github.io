
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

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
  });
  }

//second function
function aviso() {
  setTimeout(function(){
    alert("La rifa esta limitada a dos registros, mas intentos de registro seran motivo de descalificacion ");
    window.location.href = "https://zexceed7.github.io/#";
}, 2000);
}
//main function
function post_daddy(){
    var blog ={
        text: document.getElementById("daddy-ticket").value
    }
    firebase.database().ref("Daddy/"+uuidv4()).set(blog)
    document.getElementById("daddy-ticket").value="" 
    //it needs to wait 2 seconds
    aviso()
};

function post_maluma(){
  var blog = document.getElementById("maluma-ticket").value
  firebase.database().ref("Maluma/"+uuidv4()).set(blog)
  document.getElementById("maluma-ticket").value="" 
  aviso()
};

function post_fobia(){
  var blog ={
      text: document.getElementById("fobia-ticket").value
  }
  firebase.database().ref("Fobia/"+uuidv4()).set(blog)
  document.getElementById("fobia-ticket").value="" 
  aviso()
};

function post_iron(){
  var blog ={
      text: document.getElementById("iron-ticket").value
  }
  firebase.database().ref("Iron/"+uuidv4()).set(blog)
  document.getElementById("iron-ticket").value="" 
  aviso()
};

function post_ramm(){
  var blog ={
      text: document.getElementById("ramm-ticket").value
  }
  firebase.database().ref("Rammstein/"+uuidv4()).set(blog)
  document.getElementById("ramm-ticket").value="" 
  aviso()
};

function post_mon(){
  var blog ={
      text: document.getElementById("mon-ticket").value
  }
  firebase.database().ref("Mon/"+uuidv4()).set(blog)
  document.getElementById("mon-ticket").value="" 
  aviso()
};

function post_will(){
  var blog ={
      text: document.getElementById("will-ticket").value
  }
  firebase.database().ref("Will/"+uuidv4()).set(blog)
  document.getElementById("will-ticket").value="" 
  aviso()
};

function registro(){
  var badge = prompt('Registra tu badge');
  if (badge === null || badge === "") {
    registro()
  }else{
    
    if (badge) {
      
    }

  }
}