import React, {Component} from 'react';

import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
// import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import { Card, CardSection, Input, Button, Badge } from './common';
import axios from 'axios';

import baseURL from "../communication/HttpCommunication"
import {connect} from "react-redux";
import {dietChanged, updateMenu} from "../actions";

var radio_props = [
    {label: 'None', value: 0 },
    {label: 'Milk', value: 1 },
    {label: 'Soy', value: 2 },
    {label: 'egg', value: 3 },
    {label: 'seashell', value: 4 },
    {label: 'peanuts', value: 5 },
    {label: 'vegetarian', value: 6 },
];

class ProfileScreen extends Component {
    onDietChanged = (value) => {
        console.log(value);
        this.props.dietChanged(value);
        this.props.updateMenu({allergy: value});
    };

    onSelect(index, value){
        console.log(value)
    };

    renderOptions () {
        return(
            <View>
                {radio_objects.map((obj) => {
                    <RadioButton value={obj.value} >
                        <Text>{"babba"}</Text>
                    </RadioButton>
                })}
            </View>
        )

    };

    render() {

        return(

            <View style={{flex:1, alignItems:'center'}}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={false}
                    buttonColor={'#2196f3'}
                    animation={true}
                    onPress={(value) => {this.onDietChanged(value)}}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    scoreTitleStyle: {
        flex: 1,
        fontSize: 40,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        textAlignVertical:'center',

    },
    scoreStyle: {
        flex: 1,
        fontSize: 35,
        textAlign: 'center',
        margin: 0,
        textAlignVertical:'center',
    },
    badgeRowStyle:{
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
});

const mapStateToProp = state => {
    const { diet } = state.diet;

    return { diet };
};

export default connect(mapStateToProp, {dietChanged, updateMenu})(ProfileScreen);
