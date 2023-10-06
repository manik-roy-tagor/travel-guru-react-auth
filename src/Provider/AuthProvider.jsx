import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setloading] = useState(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setloading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const userLogIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }


    const logOut = () => {
        setloading(true);
        signOut(auth)
            .then(result => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    const AuthInfo = { user, loading, createUser, userLogIn, logOut }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;