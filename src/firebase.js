import firebase from 'firebase/app'
import 'firebase/auth'

/**
 * firebase alinca direk boyle ama biy dkendimiz duyenlicegiy kodleri bir kismi silindi
 * const firebaseConfig = {
    apiKeI8NfcpZMIamT9s",
    authDomain: "logp.com",
    projectId: "loginreact-df48a",
    storageBucket: "t.com",
    messagingSenderId: "659289272402",
    appId: "1:61295b2f8b"
  };

  const app = initializeApp(firebaseConfig);
 * 
  ama biy yeniden yapacagiy

 */
const app =firebase.initializeApp({
     
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINSENDERID,
    appId:process.env.REACT_APP_FIREBASE_APPID

})

//degiskeni dogrulamak icin disariya aktariyoruz
export const auth =app.auth()
 
export default app