import { Actions } from "react-native-router-flux";
export * from "./AuthActions";
export * from "./EmployeeActions";

const loginUserSuccess = (dispatch, user) => {
    dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
    });
    Actions.employeeList();
    };

    <Router>
<Scene key="root" hideNavBar>
<Scene key="auth">
<Scene
key="login"
component={LoginForm}
title="Please Login"
initial
/>
</Scene>

<Scene key="main">
<Scene
key="employeeList"
component={EmployeeList}
title="Employees"
/>
</Scene>
</Scene>
<Scene
key="employeeList"
rightTitle="Add"
onRight={() => {
Actions.employeeCreate();
}}
component={EmployeeList}
title="Employees"
/>
<Scene
key="employeeCreate"
title="Add Employee"
component={EmployeeCreate}
/>
</Router>


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