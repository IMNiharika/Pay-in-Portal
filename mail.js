import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBH0QDNiz3Xc30KP2uKDcPkfc6oX3oSMtA",
    authDomain: "pay-in-portal.firebaseapp.com",
    projectId: "pay-in-portal",
    storageBucket: "pay-in-portal.appspot.com",
    messagingSenderId: "976371145354",
    appId: "1:976371145354:web:12570d2455b88f942feb73"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const form = document.getElementById('contactForm');


//make a eventlistener for the form and then call the function
function login(){


    signInWithEmailAndPassword(auth, document.getElementById("name").value, document.getElementById("pass").value).then(() => {
        console.log("Done");
    })
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the default form submission
    submitForm(); // Calls the submitForm function
});


function submitForm() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    console.log("Hello");
    console.log(name);

    createUserWithEmailAndPassword(auth, name, password).then(() => {
        // var usr = auth.currentUser;
        console.log("Done");
    })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // window.alert("Message : " + errorMessage);
        })
}


