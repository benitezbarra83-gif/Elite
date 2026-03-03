// auth.js

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

// Login function
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(errorMessage);
        });
};

// Register function
export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registered
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(errorMessage);
        });
};

// Logout function
export const logout = () => {
    return signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log('User signed out.');
        })
        .catch((error) => {
            console.error('Error signing out: ', error);
        });
};
