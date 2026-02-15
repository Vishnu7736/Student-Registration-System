import { signInWithEmailAndPassword } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = async function() {

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
}
