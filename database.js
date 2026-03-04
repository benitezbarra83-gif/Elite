// database.js

const { Firestore } = require('@google-cloud/firestore');

// Initialize Firestore
const firestore = new Firestore();

// Functionality for managing habits
const createHabit = async (userId, habitData) => {
    const habitRef = firestore.collection('habits').doc();
    await habitRef.set({ userId, ...habitData });
    return habitRef.id;
};

const getHabits = async (userId) => {
    const habitsSnapshot = await firestore.collection('habits').where('userId', '==', userId).get();
    return habitsSnapshot.docs.map(doc => doc.data());
};

// Functionality for managing readings
const createReading = async (readingData) => {
    const readingRef = firestore.collection('readings').doc();
    await readingRef.set(readingData);
    return readingRef.id;
};

const getReadings = async () => {
    const readingsSnapshot = await firestore.collection('readings').get();
    return readingsSnapshot.docs.map(doc => doc.data());
};

// Functionality for evaluations
const createEvaluation = async (evaluationData) => {
    const evaluationRef = firestore.collection('evaluations').doc();
    await evaluationRef.set(evaluationData);
    return evaluationRef.id;
};

const getEvaluations = async () => {
    const evaluationsSnapshot = await firestore.collection('evaluations').get();
    return evaluationsSnapshot.docs.map(doc => doc.data());
};

// Functionality for user management
const createUser = async (userData) => {
    const userRef = firestore.collection('users').doc();
    await userRef.set(userData);
    return userRef.id;
};

const getUser = async (userId) => {
    const userRef = firestore.collection('users').doc(userId);
    const userSnapshot = await userRef.get();
    return userSnapshot.exists ? userSnapshot.data() : null;
};

module.exports = { createHabit, getHabits, createReading, getReadings, createEvaluation, getEvaluations, createUser, getUser };