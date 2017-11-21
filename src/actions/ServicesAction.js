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
    }
}