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
            <hr className="trackerHr"/>
            <h2 className="suggestedGoalsTitle">Suggested Goals</h2>
            <div className="suggestedGoals">
                <div className="radioGoal">
                    <input 
                        type="radio" 
                        name="goal" id="goal1" 
                        onClick={(e) => setGoal(e.target.value)} 
                        value="Recycle all paper products" 
                    />
                    <label for="goal1">Recycle all paper products</label>
                </div>
                <div className="radioGoal">
                    <input 
                        type="radio" 
                        name="goal" 
                        id="goal2" 
                        onClick={(e) => setGoal(e.target.value)} 
                        value="Call my representatives" 
                    />
                    <label for="goal2">Call my representatives</label>
                </div>
                <div className="radioGoal">
                        <input 
                        type="radio" 
                        name="goal" 
                        id="goal3" 
                        onClick={(e) => setGoal(e.target.value)} 
                        value="Read a book about the Green New Deal" 
                    />
                    <label for="goal3">Read a book about the Green New Deal</label>
                </div>
                <div className="radioGoal">
                        <input 
                        type="radio" 
                        name="goal" 
                        id="goal4" 
                        onClick={(e) => setGoal(e.target.value)} 
                        value="Bring reusable bags to the store" 
                    />
                    <label for="goal4">Bring reusable bags to the store</label>
                </div>
                <div className="radioGoal">
                        <input 
                        type="radio" 
                        name="goal" 
                        id="goal5" 
                        onClick={(e) => setGoal(e.target.value)} 
                        value="Switch to LEDs" 
                    />
                    <label for="goal5">Switch to LEDs</label>
                </div>
            </div>
            <br></br>
            <button className="addButton" onClick={() => add()}>Add Goal</button>
            <hr className="trackerHr"/>
        </div>
    )
}