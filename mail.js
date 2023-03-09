const firebaseConfig = {
    apiKey: "AIzaSyBH0QDNiz3Xc30KP2uKDcPkfc6oX3oSMtA",
    authDomain: "pay-in-portal.firebaseapp.com",
    projectId: "pay-in-portal",
    storageBucket: "pay-in-portal.appspot.com",
    messagingSenderId: "976371145354",
    appId: "1:976371145354:web:12570d2455b88f942feb73"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

// var contactFormDB = firebase.database().ref("contactForm");
// document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm() {
    e.preventDefault();
    var name = getElementVal("name");
    var password = getElementVal("pass");
    console.log("Hello");
    console.log(name);
}
const getElementVal = (id) => {
    return document.getElementById(id).value;
};