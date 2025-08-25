// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCrBfNKqJyvxOXMMeR8-5Lawauze3YZqys",
  authDomain: "powerelectronics-maxwellium.firebaseapp.com",
  projectId: "powerelectronics-maxwellium",
  storageBucket: "powerelectronics-maxwellium.firebasestorage.app",
  messagingSenderId: "69351680581",
  appId: "1:69351680581:web:c4b979ba8917125c6e512c",
  measurementId: "G-2XE11H7676"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Handle Register
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch(err => alert(err.message));
  });
}

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch(err => alert(err.message));
  });
}

// Show user on Dashboard
auth.onAuthStateChanged((user) => {
  if (document.getElementById("welcomeMessage")) {
    if (user) {
      document.getElementById("welcomeMessage").innerText = "Welcome, " + user.email;
    } else {
      window.location.href = "login.html"; // redirect if not logged in
    }
  }
});

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    auth.signOut().then(() => {
      window.location.href = "login.html";
    });
  });
}
