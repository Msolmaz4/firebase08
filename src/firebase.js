import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


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
  const firebaseConfig = {
    apiKey: "AIzaSyAI8Nfcppf9YSa1gdkRbjtHYmHZMIamT9s",
    authDomain: "loginreact-df48a.firebaseapp.com",
    projectId: "loginreact-df48a",
    storageBucket: "loginreact-df48a.appspot.com",
    messagingSenderId: "659289272402",
    appId: "1:659289272402:web:ea46c70b4714a1295b2f8b"
  };

//degiskeni dogrulamak icin disariya aktariyoruz

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app