const initFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDY1bvNdfi3YZ4TLWZqpunc8HPqNvyAqmU",
        authDomain: "book-visit.firebaseapp.com",
        projectId: "book-visit",
        storageBucket: "book-visit.appspot.com",
        messagingSenderId: "1049607115705",
        appId: "1:1049607115705:web:b47fa97c426b7f00e39c68",
        measurementId: "G-2RMC15RRQR"
      };

      var app = firebase.initializeApp(firebaseConfig);
      app;
      var db = firebase.firestore(app);

}

export default initFirebase;
