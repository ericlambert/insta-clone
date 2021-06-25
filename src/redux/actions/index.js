import { USER_STATE_CHANGE } from "../constants/index";
import firebase from "firebase";

export function fetchUser() {
    return((dispatch) => {
        firebase.firestore()
            .collection('user')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    console.log(snapshot)
                    dispatch({type : USER_STATE_CHANGE, currentUser: snapshot.data});
                } else {
                    alert('user does not exist');
                }
            })
            .catch((error) => alert(error))
    });
}