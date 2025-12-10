// Laad bestaande username in het inputveld
document.getElementById("usernameInput").value =
  localStorage.getItem("username") || "";

// Sla username op
document.getElementById("saveSettings").onclick = () => {
  const username = document.getElementById("usernameInput").value.trim();

  if (username.length === 0) {
    localStorage.setItem("username", "Anoniem");
  } else {
    localStorage.setItem("username", username);
  }

  alert("Instellingen opgeslagen!");
};
