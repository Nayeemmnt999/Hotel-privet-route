import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import app from '../Firebase/Firebase';

const auth= getAuth(app)
export const AuthContex = createContext();

const UserContex = ({ children }) => {

    const [users, setUsers] = useState()

    const emailVerify = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authValue = {emailVerify}
    return (
        <AuthContex.Provider value={authValue}>
            {children}
        </AuthContex.Provider>
    );
};

export default UserContex;