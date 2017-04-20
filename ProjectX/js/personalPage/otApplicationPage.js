import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import RNAnimatedTabs from 'rn-animated-tabs';
import OTAppSubmitted from './otAppSubmittedPage';
import OTAppApproved from './otAppApprovedPage';
import OTAppDenied from './otAppDeniedPage';
import OTAppHistory from './otAppHistoryPage';
const DATA = [OTAppSubmitted, OTAppApproved, OTAppDenied, OTAppHistory];

export default class OTApplication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: undefined
        }
    }

    handleTabChange = (value) => this.setState(
        {currentTab: DATA[value]}
    );

    render() {
        var CurrentTab = OTAppSubmitted;
        if (this.state.currentTab) {
            CurrentTab = this.state.currentTab;
        }
        return (
            <View style={styles.ApplicationCont}>
                <View style={styles.container}>
                    <RNAnimatedTabs
                        tabTitles={['Submitted', 'Approved','Denied', 'History']}
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