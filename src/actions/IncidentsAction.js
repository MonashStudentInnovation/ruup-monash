import * as firebase from 'firebase';
import 'firebase/firestore';
import { GET_INCIDENTS } from "./types"

export function getIncidents() {
    return (dispatch) => {
        const db = firebase.firestore();
        db.collection("incidents")
            .get()
            .then(snapshot => {
                const incidents = snapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()};
                });
                console.log("INCIDENTS");
                console.log(incidents);
                dispatch({ type: GET_INCIDENTS, payload: incidents });
            });
        db.collection("incidents")
            .onSnapshot(snapshot => {
                const incidents = snapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()};
                });
                dispatch({ type: GET_INCIDENTS, payload: incidents });
            });
    }
}

export function updateIncident(id, value) {
    return (dispatch) => {
        const db = firebase.firestore();

        db.collection("incidents")
            .doc(id)
            .set(value, { merge: true })
            .then(() => {
                console.log("update done!");
            })
            .catch(e => {
                console.log("update failed!");
            })
    }
}

