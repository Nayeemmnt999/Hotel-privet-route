import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../Firebase/Firebase';
import { toast } from 'react-toastify';

const auth= getAuth(app)
export const AuthContex = createContext();

const UserContex = ({ children }) => {

    const [users, setUsers] = useState()
// emial register with email and pass-------------------------------------------------------------
    const emailVerify = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email password

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

// user update-----------------------------------------------------------------------
    const userUpdate = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
    }
    // signOut section---------------------------------------------------------------=
    const logOut = () => {
        return signOut(auth)
            .then(() => {
                toast.success("Log Out success")
            })
    }
    // on auth state chang----------------------------------------------------------
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authValue = {emailVerify, login,  setUsers, users,  userUpdate, logOut}
    return (
        <AuthContex.Provider value={authValue}>
            {children}
        </AuthContex.Provider>
    );
};

export default UserContex;