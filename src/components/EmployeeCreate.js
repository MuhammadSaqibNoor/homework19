import React, { Component } from "react";
import { Picker } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
import { Card, CardSection, Input, CustomButton} from "./common";
import { Picker } from "react-native";

onChangeText={text => this.props.employeeUpdate({ prop: "name",value: text })}
    onChangeText={text => this.props.employeeUpdate({ prop: "phone",value: text })}
    
    const mapStateToProps = state => {
    const { name, phone, shift } =
    state.employeeForm;
    return { name, phone, shift };
    };
    export default connect(
    mapStateToProps,
    { employeeUpdate }
    )(EmployeeCreate);

    <Picker>
<Picker.Item label="Monday" value="Monday" />
<Picker.Item label="Tuesday" value="Tuesday" />
<Picker.Item label="Wednesday" value="Wednesday" />
<Picker.Item label="Thursday" value="Thursday" />
<Picker.Item label="Friday" value="Friday" />
<Picker.Item label="Saturday" value="Saturday" />
<Picker.Item label="Sunday" value="Sunday" />
</Picker>
<Picker

style={{ flex:1 }}

selectedValue={this.props.shift}
onValueChange={day =>
this.props.employeeUpdate({ prop:
"shift", value })
} 