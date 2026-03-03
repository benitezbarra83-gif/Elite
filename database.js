// database.js

// Firestore database functions for managing habits, users, evaluations, and readings

const admin = require('firebase-admin');

// Initialize Firestore
admin.initializeApp();
const db = admin.firestore();

// Function to add a new user
const addUser = async (userId, userData) => {
    await db.collection('users').doc(userId).set(userData);
};

// Function to get a user by ID
const getUser = async (userId) => {
    const userDoc = await db.collection('users').doc(userId).get();
    return userDoc.exists ? userDoc.data() : null;
};

// Function to add a new habit
const addHabit = async (habitId, habitData) => {
    await db.collection('habits').doc(habitId).set(habitData);
};

// Function to get a habit by ID
const getHabit = async (habitId) => {
    const habitDoc = await db.collection('habits').doc(habitId).get();
    return habitDoc.exists ? habitDoc.data() : null;
};

// Function to add an evaluation
const addEvaluation = async (evaluationId, evaluationData) => {
    await db.collection('evaluations').doc(evaluationId).set(evaluationData);
};

// Function to get an evaluation by ID
const getEvaluation = async (evaluationId) => {
    const evaluationDoc = await db.collection('evaluations').doc(evaluationId).get();
    return evaluationDoc.exists ? evaluationDoc.data() : null;
};

// Function to add a reading
const addReading = async (readingId, readingData) => {
    await db.collection('readings').doc(readingId).set(readingData);
};

// Function to get a reading by ID
const getReading = async (readingId) => {
    const readingDoc = await db.collection('readings').doc(readingId).get();
    return readingDoc.exists ? readingDoc.data() : null;
};

module.exports = {
    addUser,
    getUser,
    addHabit,
    getHabit,
    addEvaluation,
    getEvaluation,
    addReading,
    getReading,
};