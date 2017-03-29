import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class Logon extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.logonText}>Log On</Text>
                    <TextInput
                        style={styles.userNameInput}
                        placeholder="Please enter username"
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userNameInput: {
        flex: 1,
        fontSize: 16,
        padding: 4,
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 20,
    },
    logonText: {
        padding: 5,
        fontSize: 16,
        marginRight: 10,
        fontWeight: 'bold'
    }
});