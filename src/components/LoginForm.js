import React, { Component } from 'react';
import { Card, CardSection, Input, CustomButton } from './common';
import {connect} from "react-redux";
import {emailChanged} from '../actions';
import {passwordChanged} from '../actions'

class LoginForm extends Component {


    onEmailChange(text){
        this.props.emailChanged(text);

    }
    render() {

        return (

            <Card>

                <CardSection>

                    <Input
                        autoCorrect
                        placeholder="user@email.com"
                        label="Email: "
                     onChangeText = {this.onEmailChange.bind(this)}   
                     value={this.props.password}  // check it
                    />
                </CardSection>


                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.props.password} // check it
                    />
                </CardSection>
                <CardSection>
<CustomButton>Sign In</CustomButton>
</CardSection>
            </Card>

        );


    }


}
const mapStateToProps = state => {
    return {
    email: state.auth.email,
    password: state.auth.password
    };
    };
    
    export default connect(
    mapStateToProps,
    { emailChanged, passwordChanged }
    )(LoginForm);

   