import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./FirebaseConfig";

export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {
    const [user,setUser]=useState(null)
    console.log(user);
    console.log(typeof children);


    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(()=>{
      onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)
        }
      })
    },[])

    const allValues = { createUser, signInUser };
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;