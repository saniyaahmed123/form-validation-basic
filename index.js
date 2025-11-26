 // Your Firebase Config
  const firebaseConfig = {
    apiKey: "AIzaSyAYi1T-1h4e5i7Xpall_I08DSc5YlyZkuI",
    authDomain: "fir-form-26dc5.firebaseapp.com",
    projectId: "fir-form-26dc5",
    storageBucket: "fir-form-26dc5.firebasestorage.app",
    messagingSenderId: "695171397080",
    appId: "1:695171397080:web:dc44940abe9a12dde16ead",
    measurementId: "G-ZHTPB3ZNQ1"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Save Data Function
  function saveData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
      db.collection("students").add({
        name: name,
        email: email,
        timestamp: new Date()
      })
      .then(() => {
        alert("Data saved successfully!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    } else {
      alert("Please fill in both fields!");
    }
  }