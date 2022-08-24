
import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    
} from 'firebase/auth'
import {auth} from '../firebase'

const  userAuthContext = createContext()


export function UserAuthContextProvider({children}){

    const [user,setUser]= useState()


   function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
   }

   function login(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
   }

    useEffect(()=>{
      const unsubcribe=  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubcribe()
        }
    },[])

 
    return(
        <UserAuthContextProvider value={{signup}} >
          {children}
        </UserAuthContextProvider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext)
}























/*

import React ,{useContext, useEffect, useState} from 'react'
//4
import {auth}  from '../firebase'
import {
    createUserWithEmailAndPassword,
    onStateChanged


} from 'firebase/auth'


const AuthContext = React.createContext()
//2 burada diger taraflarda daha kolay cagiririz
export function useAuth(){
    return useContext(AuthContext)
}



//1
export function AuthProvider({children}){

    //3
    const [currentUser,setCurrentUser]= useState()

    //5
    function signup (email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    

    }
  //7
   useEffect(()=>{
    //burada degisken atiyoruz sonra silerken kullanacagiz
   const unsubcribe=  auth.onStateChanged(user=>{
        setCurrentUser(user)
    })
  return unsubcribe
   },[])

    //6 bu sonra useffe te kes kopazala
    /*
    bu kullaniciyi ayarlamak icin
    auth.onAuthStateChanged(user=>{
        setCurrentUser(user)
    })

    */
    //3
    /**
     *  const value={
        currentUser,
        signup
    }
     */
   

/**
 *     return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
 */


