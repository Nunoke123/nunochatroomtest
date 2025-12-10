// Firebase importeren
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 🔥 --> JOUW CONFIG HIER INPLAKKEN
const firebaseConfig = {
  apiKey: "AIzaSyDlxosSSVvlw21PCgYqXLfgppWZ3x9Lhww",
  authDomain: "nunochatroomtest.firebaseapp.com",
  databaseURL: "https://nunochatroomtest-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nunochatroomtest",
  storageBucket: "nunochatroomtest.firebasestorage.app",
  messagingSenderId: "311873472696",
  appId: "1:311873472696:web:1622af7d8ab3ebb0dacc4d",
  measurementId: "G-3ZBLM6DDWL"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const messagesRef = ref(db, "messages");

// Verzend bericht
document.getElementById("sendBtn").onclick = () => {
  const text = document.getElementById("messageInput").value;

  if (text.trim() !== "") {
    push(messagesRef, {
      text: text,
      timestamp: Date.now()
    });
  }

  document.getElementById("messageInput").value = "";
};

// Ontvang berichten realtime
onChildAdded(messagesRef, (data) => {
  const message = data.val();
  const div = document.getElementById("messages");

  const p = document.createElement("p");
  p.textContent = message.text;

  div.appendChild(p);
});
