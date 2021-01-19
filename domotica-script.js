function encender1(){
    var ref = firebase.database().ref().child("objects/obj1");
        ref.set("1");
}
function apagar1(){
    var ref = firebase.database().ref().child("objects/obj1");
    ref.set("0");
}
function ejecutar1(){
    encender1();
    setTimeout(apagar1,1500);
}

function encender2(){
    var ref = firebase.database().ref().child("objects/obj2");
        ref.set("1");
}
function apagar2(){
    var ref = firebase.database().ref().child("objects/obj2");
    ref.set("0");
}
function ejecutar2(){
    encender2();
    setTimeout(apagar2,1500);
}

function encender3(){
    var ref = firebase.database().ref().child("objects/obj3");
        ref.set("1");
}
function apagar3(){
    var ref = firebase.database().ref().child("objects/obj3");
    ref.set("0");
}
function ejecutar3(){
    encender3();
    setTimeout(apagar3,1500);
}

function encender4(){
    var ref = firebase.database().ref().child("objects/obj4");
        ref.set("1");
}
function apagar4(){
    var ref = firebase.database().ref().child("objects/obj4");
    ref.set("0");
}
function ejecutar4(){
    encender4();
    setTimeout(apagar4,1500);
}
