import { signOut } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.logout = async function() {
  await signOut(auth);
  alert("Logged Out");
  window.location.href = "login.html";
}
