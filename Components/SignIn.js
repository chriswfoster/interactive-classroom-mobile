import React, {Component, useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
    input: {
        borderRadius: 12,
        borderColor: 'grey',
        borderWidth: 1,
        borderStyle: 'solid',
        // flex: 1,
        height: 40,
    },
    sendButton: {
        backgroundColor: 'green',
        width: 200,
        color: 'green'
    }
})

const SignIn = () => {
    const [firstNameText, setFirstNameText] = useState('');
    const [pinText, setPinText] = useState('');

    const getChild = () => {

    }

    return (
        <View>
            <Text>Sign in Page!</Text>
            <TextInput
                style={styles.input} 
                placeholder='Enter childs first name'
                onChangeText={(e) => setFirstNameText(e)}
            />
            <TextInput 
                style={styles.input}
                placeholder='Enter childs pin'
                onChangeText={(e) => setPinText(e)}
            />
            <Button 
                title="Send" 
                // color='green'
                onPress={getChild}
                buttonStyle={styles.sendButton}
            ></Button>
        </View>
    )
}



const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
    return {
        addChild: (child) => {
            dispatch({
                type: 'ADD_CHILD',
                payload: child
            })
        }
    //   add: (name) => {
    //     dispatch(addPlace(name))
    //   }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);