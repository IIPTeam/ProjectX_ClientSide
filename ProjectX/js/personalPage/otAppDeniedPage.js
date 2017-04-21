import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class OTAppDenied extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.ApplicationCont}>
                <Text>OT Application Denied</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    ApplicationCont: {
        flex: 1,
    }
});