import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../Firebase/Firebase';
import { toast } from 'react-toastify';

const auth= getAuth(app)
export const AuthContex = createContext();

const UserContex = ({ children }) => {

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
// emial register with email and pass-------------------------------------------------------------
    const emailVerify = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email password

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

// user update-----------------------------------------------------------------------
    const userUpdate = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name })
    }
    // signOut section---------------------------------------------------------------=
    const logOut = () => {
        return signOut(auth)
        // setLoading(true)
            .then(() => {
                toast.success("Log Out success")
            })
    }
    // on auth state chang----------------------------------------------------------
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authValue = {emailVerify, login,  setUsers, users,  userUpdate, logOut, loading, auth}
    return (
        <AuthContex.Provider value={authValue}>
            {children}
        </AuthContex.Provider>
    );
};

export default UserContex;