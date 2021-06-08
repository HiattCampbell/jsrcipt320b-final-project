import React, { useState, useContext } from 'react'
import firebase from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../../auth/Auth';


export default function AddGoal() {
    const [goal, setGoal] = useState('');
    const { currentUser } = useContext(AuthContext);
    const ref = firebase.firestore().collection('goals');

    function add() {
        const owner = currentUser ? currentUser.uid : 'unknown';
        const ownerEmail = currentUser ?currentUser.email : 'unknown';
        const newGoal = {
            goal,
            id: uuidv4(),
            owner,
            ownerEmail,
        };
        ref
            .doc(newGoal.id)
            .set(newGoal)
            .catch((err) => {
                console.error(err);
            });
        }

    return (
        <div>
            <h2>Add Goal</h2>
            <input type='text' onChange={(e) => setGoal(e.target.value)} />
            <button onClick={() => add()}>
                Add Goal
            </button>
        </div>
    )
}