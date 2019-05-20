/*    
    import { EMAIL_CHANGED } from "./types";

    export const emailChanged = text => {
    return {
    type: EMAIL_CHANGED,
    payload: text
    };
    };

    export const loginUser = ({ email, password }) => {
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user=>console.log(user));
    };

export const loginUser = ({ email, password }) => {
return dispatch => {
firebase
.auth()
.signInWithEmailAndPassword(email,
password)
.then(user => console.log(user));
};
};
*/
const loginUserSuccess = (dispatch, user) => {
dispatch({
type: LOGIN_USER_SUCCESS,
payload: user
});
};
export const loginUser = ({ email, password }) => {
    return dispatch => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => this.loginUserSuccess(dispatch, user))
    .catch(() => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => this.loginUserSuccess(dispatch, user));
    });
    };
    };