import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class OTAppHistory extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.ApplicationCont}>
                <Text>OT Application History</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    ApplicationCont: {
        flex: 1,
    }
});