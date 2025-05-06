const CLIENT_ID = '385129490778-vhac48l5qfcujq1ov8pvmaf1hn88ieen.apps.googleusercontent.com';
const REDIRECT_URI = 'https://skokkula131.github.io/Dynamic_website';
const RESPONSE_TYPE = 'id_token token';
const SCOPE = 'openid profile email';

function loginWithGoogle() {
  console.log("✅ Login button clicked");
  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  url.searchParams.set("client_id", CLIENT_ID);
  url.searchParams.set("redirect_uri", REDIRECT_URI);
  url.searchParams.set("response_type", RESPONSE_TYPE);
  url.searchParams.set("scope", SCOPE);
  url.searchParams.set("prompt", "consent");

  window.location = url.toString();
}

function decodeJWT(token) {
  try {
    const parts = token.split('.');
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''));
    return JSON.parse(jsonPayload);
  } catch (err) {
    return { error: "Invalid JWT token" };
  }
}

window.addEventListener('load', () => {
  console.log("✅ main.js loaded");

  if (window.location.hash) {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const idToken = params.get("id_token");
    const accessToken = params.get("access_token");

    let output = "";

    if (idToken) {
      const decoded = decodeJWT(idToken);
      output += "🔓 Decoded ID Token:\n" + JSON.stringify(decoded, null, 2) + "\n\n";
    }

    if (accessToken) {
      output += "🔐 Access Token:\n" + accessToken;
    }

    const outputEl = document.getElementById("output");
    if (outputEl) {
      outputEl.innerText = output;
    }
  }
});
