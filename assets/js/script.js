// ---- Firebase Setup ---- //
const firebaseConfig = {
  apiKey: "AIzaSyCrBfNKqJyvxOXMMeR8-5Lawauze3YZqys",
  authDomain: "powerelectronics-maxwellium.firebaseapp.com",
  projectId: "powerelectronics-maxwellium",
  storageBucket: "powerelectronics-maxwellium.firebasestorage.app",
  messagingSenderId: "69351680581",
  appId: "1:69351680581:web:c4b979ba8917125c6e512c",
  measurementId: "G-2XE11H7676"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ---- Login ---- //
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// ---- Register ---- //
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// ---- Protect Dashboard ---- //
if (window.location.pathname.includes("dashboard.html")) {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "login.html"; // not logged in
    } else {
      document.getElementById("welcomeMsg").innerText =
        `Welcome, ${user.email}`;
    }
  });
}
