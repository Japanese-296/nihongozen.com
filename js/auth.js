// ============================================================
// NihongoZen — auth.js
// Google Login + Email/Password
// Apple / Facebook: Coming Soon placeholders
// Dashboard redirect: index.html (fixed from dashboard.html)
// ============================================================

import { initializeApp }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup,
  sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ── Firebase Config ───────────────────────────────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyCP2Uwo1lx996q0l3nkC7RhAesVuIHEXiA",
  authDomain:        "nihongo-zen-cd97d.firebaseapp.com",
  projectId:         "nihongo-zen-cd97d",
  storageBucket:     "nihongo-zen-cd97d.firebasestorage.app",
  messagingSenderId: "513320956483",
  appId:             "1:513320956483:web:a1069825e0df3587f65af6",
  measurementId:     "G-1WTJ5ML3R2"
};

const app      = initializeApp(firebaseConfig);
const auth     = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// ── DESTINATION ───────────────────────────────────────────────
const DASHBOARD = "index.html"; // Fixed: was dashboard.html

// ── GOOGLE LOGIN ──────────────────────────────────────────────
["googleLogin", "loginBtn", "btn-google-login", "btn-google-signup"].forEach(id => {
  document.getElementById(id)?.addEventListener("click", async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.replace(DASHBOARD);
    } catch (err) {
      if (err.code !== "auth/popup-closed-by-user") showLoginError(err.message);
    }
  });
});

// ── EMAIL LINK LOGIN ──────────────────────────────────────────
const actionCodeSettings = {
  url:             window.location.origin + "/" + DASHBOARD,
  handleCodeInApp: true
};

document.getElementById("emailLogin")?.addEventListener("click", async () => {
  const email = document.getElementById("emailInput")?.value?.trim();
  if (!email) return showLoginError("Please enter your email address.");
  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    localStorage.setItem("nz_emailForSignIn", email);
    showLoginSuccess("Login link sent! Check your inbox.");
  } catch (err) {
    showLoginError(err.message);
  }
});

if (isSignInWithEmailLink(auth, window.location.href)) {
  let email = localStorage.getItem("nz_emailForSignIn");
  if (!email) email = window.prompt("Please confirm your email address:");
  if (email) {
    signInWithEmailLink(auth, email, window.location.href)
      .then(() => { localStorage.removeItem("nz_emailForSignIn"); window.location.replace(DASHBOARD); })
      .catch(err => showLoginError(err.message));
  }
}

// ── APPLE / FACEBOOK — Coming Soon ───────────────────────────
["btn-apple-login","btn-apple-signup","btn-facebook-login"].forEach(id => {
  document.getElementById(id)?.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof showComingSoon === "function") {
      const name = id.includes("apple") ? "Apple Sign-In" : "Facebook Sign-In";
      showComingSoon(name);
    }
  });
});

// ── UI helpers ────────────────────────────────────────────────
function showLoginError(msg) {
  const el = document.getElementById("login-error") || document.getElementById("error-msg");
  if (el) { el.textContent = msg; el.style.display = "block"; }
  else alert(msg);
}
function showLoginSuccess(msg) {
  const el = document.getElementById("login-success") || document.getElementById("success-msg");
  if (el) { el.textContent = msg; el.style.display = "block"; }
}

window.goSignup = () => { window.location.href = "signup.html"; };
