authentication function or finlfunction login(username, password) {
  const validUsername = "admin";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    console.log("✅ Login successful! Welcome back, " + username);
    return true;
  } else {
    console.log("❌ Invalid credentials. Please try again.");
    return false;
  }
}

// Test the login function locally
login("admin", "1234");  // should show "Login successful!"
login("user", "wrong");  // should show "Invalid credentials"
