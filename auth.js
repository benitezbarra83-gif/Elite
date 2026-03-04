// Authentication module for Elite app

const firebase = require('firebase/app');
require('firebase/auth');

// Register a new user
function registerUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

// Login a user
function loginUser(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

// Login with Google
function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}

// Logout the user
function logoutUser() {
    return firebase.auth().signOut();
}

// Get current user data
function getCurrentUserData() {
    return firebase.auth().currentUser;
}

// Update user data
function updateUserData(updatedData) {
    const user = getCurrentUserData();
    return user.updateProfile(updatedData);
}

module.exports = {
    registerUser,
    loginUser,
    loginWithGoogle,
    logoutUser,
    getCurrentUserData,
    updateUserData
};