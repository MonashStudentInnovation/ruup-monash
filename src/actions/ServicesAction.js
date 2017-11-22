import * as firebase from 'firebase';
import 'firebase/firestore';
import { GET_SERVICES } from "./types"

export function getServices() {
    return (dispatch) => {
        const db = firebase.firestore();
        db.collection("services")
            .get()
            .then(snapshot => {
                const services = snapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()};
                });
                dispatch({ type: GET_SERVICES, payload: services });
            });
        db.collection("services")
            .onSnapshot((snapshot) => {
                const services = snapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()};
                });
                dispatch({ type: GET_SERVICES, payload: services });
            });
    }
}

export function updateService(id, value) {
    return (dispatch) => {
        const db = firebase.firestore();

        db.collection("services")
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

