var firebaseConfig = {
    apiKey: "AIzaSyAPSntXOWgXcjhIbi2D19YWiqQoj2kws-I",
    authDomain: "class-test-da4bb.firebaseapp.com",
    databaseURL: "https://class-test-da4bb-default-rtdb.firebaseio.com",
    projectId: "class-test-da4bb",
    storageBucket: "class-test-da4bb.appspot.com",
    messagingSenderId: "679376957836",
    appId: "1:679376957836:web:13423293ba9040785f66a9",
    measurementId: "G-Z8PFFQXXHB"
};
firebase.initializeApp(firebaseConfig);
function addUser(){
    username = document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        purpose : "adding user"
    });
}