import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';

export default class Logon extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <Text style={styles.logonText}>Staff ID:</Text>
                    <TextInput
                        style={styles.userNameInput}
                        placeholder="Please enter username"
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.logonText}>Password:</Text>
                    <TextInput
                        style={styles.userNameInput}
                        placeholder="Please enter password"
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.logonButtonBox}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        activeOpacity={0.7}
                        style={styles.logonButton}
                        underlayColor='darkgreen'
                    >
                        <Text style={styles.logonButtonText}>Login</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logonButtonBox: {
        flexDirection: 'row',
    },
    logonButton: {
        backgroundColor: 'green',
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    logonButtonText: {
        fontSize: 20,
        color: 'white'
    },
    inputBox: {
        borderWidth: 2,
        borderColor: 'green',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    userNameInput: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 20,
        borderWidth: 1,
    },
    logonText: {
        padding: 5,
        fontSize: 20,
        marginRight: 5,
        marginTop: 5,
        fontWeight: 'bold',
        color: 'green'
    }
});