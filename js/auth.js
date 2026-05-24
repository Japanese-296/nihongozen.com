// ============================================================
// NihongoZen — auth.js
// Handles: Google login, Email link login
// After login: redirects to index.html (main dashboard)
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ── Firebase Config ──────────────────────────────────────────
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

// Always prompt account selection on Google login
provider.setCustomParameters({ prompt: "select_account" });

// ── DESTINATION after login ──────────────────────────────────
const DASHBOARD = "index.html";

// ── Google Login ─────────────────────────────────────────────
// Supports both button IDs used across login page versions
["googleLogin", "loginBtn"].forEach(id => {
  document.getElementById(id)?.addEventListener("click", async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.replace(DASHBOARD);
    } catch (err) {
      console.error("Google login error:", err);
      showLoginError(err.message);
    }
  });
});

// ── Email Link Login — Step 1: Send link ─────────────────────
const actionCodeSettings = {
  url:              window.location.origin + "/" + DASHBOARD,
  handleCodeInApp:  true
};

document.getElementById("emailLogin")?.addEventListener("click", async () => {
  const email = document.getElementById("emailInput")?.value?.trim();
  if (!email) return showLoginError("Please enter your email address.");

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    localStorage.setItem("nz_emailForSignIn", email);
    showLoginSuccess("Login link sent! Check your inbox.");
  } catch (err) {
    console.error("Email link error:", err);
    showLoginError(err.message);
  }
});

// ── Email Link Login — Step 2: Complete sign-in ──────────────
if (isSignInWithEmailLink(auth, window.location.href)) {
  let email = localStorage.getItem("nz_emailForSignIn");
  if (!email) {
    email = window.prompt("Please confirm your email address:");
  }
  if (email) {
    signInWithEmailLink(auth, email, window.location.href)
      .then(() => {
        localStorage.removeItem("nz_emailForSignIn");
        window.location.replace(DASHBOARD);
      })
      .catch(err => showLoginError(err.message));
  }
}

// ── UI helpers ───────────────────────────────────────────────
function showLoginError(msg) {
  const el = document.getElementById("login-error") || document.getElementById("error-msg");
  if (el) { el.textContent = msg; el.style.display = "block"; }
  else alert(msg);
}
function showLoginSuccess(msg) {
  const el = document.getElementById("login-success") || document.getElementById("success-msg");
  if (el) { el.textContent = msg; el.style.display = "block"; }
  else alert(msg);
}

// ── Navigation ───────────────────────────────────────────────
window.goSignup = () => { window.location.href = "signup.html"; };
