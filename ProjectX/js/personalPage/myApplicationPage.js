import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Image,
    Alert,
    Console
} from 'react-native';
import RNAnimatedTabs from 'rn-animated-tabs';
import Tabs from 'react-native-tabs';
import PersonalPage from "./personalPage";
import OTPage from '../otApply/otApplyMain';
import {BackBtnSvg} from '../image/backSvg';
import {MenuBtnSvg} from '../image/meunSvg';
const DATA = [PersonalPage, OTPage];

export default class ApplicationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: undefined
        }
    }

    _pressBackButton() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    handleTabChange = (value) => this.setState(
        {currentTab: DATA[value]}
    );

    render() {
        var CurrentTab = PersonalPage;
        if (this.state.currentTab) {
            CurrentTab = this.state.currentTab;
        }
        return (
            <View style={styles.ApplicationCont}>
                <View style={styles.header}>
                    <TouchableWithoutFeedback onPress={this._pressBackButton.bind(this)}>
                        {BackBtnSvg}
                    </TouchableWithoutFeedback>

                    <View style={styles.headerText}>
                        <Text style={styles.fogtPswTxt}>My Application</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => {

                    }}>{MenuBtnSvg}</TouchableWithoutFeedback>
                </View>
                <View style={styles.container}>
                    <RNAnimatedTabs
                        tabTitles={['OT Application', 'Leave Application']}
                        onChangeTab={this.handleTabChange}/>
                    <View style={[styles.container, styles.center]}>
                        <CurrentTab/>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    ApplicationCont: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        backgroundColor: '#00897b',
    },
    backIcon: {
        width: 45,
    },
    headerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fogtPswTxt: {
        color: '#ffffff',
        fontSize: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 10,
    },
});
AppRegistry.registerComponent('ApplicationPage', () => ApplicationPage);