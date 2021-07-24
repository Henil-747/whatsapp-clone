import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDFapxNfc2vhVQL4b3bbKJ5eBPlYVFK3us",
    authDomain: "whatsapp-mern-96.firebaseapp.com",
    projectId: "whatsapp-mern-96",
    storageBucket: "whatsapp-mern-96.appspot.com",
    messagingSenderId: "1051663309711",
    appId: "1:1051663309711:web:f5dce84bb6676215fe09fa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};