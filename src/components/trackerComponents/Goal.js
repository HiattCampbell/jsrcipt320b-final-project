import React, { useState, useEffect, useContext  } from 'react';
import AddGoal from './AddGoal';
import firebase from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../../auth/Auth';
import Welcome from '../signUpComponenets/Welcome';

export default function Goal() {
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser ? currentUser.uid : null;
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const ref = firebase.firestore().collection("goals");

  function getGoals() {
    setLoading(true);
    ref.where("owner", "==", currentUserId).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setGoals(items);
      setLoading(false);
    })
  }

  useEffect(() => {
    getGoals();
  }, []);

  function onDelete(goal) {
    ref
      .doc(goal.id)
      .delete()
      .catch((err) => {
        console.error(err);
      })
  }

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div>
        <Welcome />
        <h1>Track Your Progress</h1>
        <AddGoal id={uuidv4()}/>
        <h2>My Goals</h2>
        {goals.map((goal) => (
          <div key={goal.goal} className="goals"> 
            <div className="goal">
              <h4 key={goal.goal}>{goal.goal}</h4>
              <div>
                <button onClick={() => {
                  onDelete(goal);
                }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}