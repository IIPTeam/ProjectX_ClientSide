import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView
} from 'react-native';

import ScrollImage from '../common/scrollImage';
const {width} = Dimensions.get('window');
import OTApplyMain from '../otApply/otApplyMain';
import LeaveApplyMain from '../leaveApply/leaveApplyMain';
import SwipeList from '../common/swipeList';
import OfficeSupplyIcon from '../image/OfficeSupplyIcon';

export default class MainPage extends Component {
    constructor(props) {
        super(props);

    }

    _goToOTPage() {
        const {navigator} = this.props.homeProps;
        if (navigator) {
            navigator.push({
                name: 'OTApplyMainPage',
                component: OTApplyMain,
                params: {}
            })
        }
    }

    _goToLeavePage(){
        const {navigator} = this.props.homeProps;
        if (navigator) {
            navigator.push({
                name: 'LeaveApplyMainPage',
                component: LeaveApplyMain,
                params: {}
            })
        }
    }

    render() {
        return (
            <View style={[styles.flex, styles.center, {backgroundColor: '#ffffff'}]}>
                <View style={styles.homeHeader}>
                    <Text style={{fontSize: 30,color:'#ffffff'}}>Hello {this.props.homeProps.userDetails.chName}</Text>
                </View>
                <ScrollView ref={(scrollView) => {
                    _scrollView = scrollView;
                }}>
                    <ScrollImage/>
                    <View style={styles.functionBar}>
                        <View style={styles.functionBarRow}>
                            <View style={styles.functionIcon}>
                                <OfficeSupplyIcon iconInfo='Time sheet'/>
                            </View>
                            <View style={styles.functionIcon}>
                                <OfficeSupplyIcon iconInfo='OT Apply' pressEvent={() => this._goToOTPage()}/>
                            </View>
                            <View style={styles.functionIcon}>
                                <OfficeSupplyIcon iconInfo='Leave Apply' pressEvent={() => this._goToLeavePage()}/>
                            </View>
                            <View style={styles.functionIcon}>
                                <OfficeSupplyIcon iconInfo='Cust-Workflow'/>
                            </View>
                        </View>
                        <View style={styles.functionBarRow}>
                            <View style={styles.functionIcon}>
                                <OfficeSupplyIcon iconInfo='Knowledge'/>
                            </View>
                            <View style={styles.functionIcon}>
                                <OfficeSupplyIcon iconInfo='Office Supply'/>
                            </View>
                            <View style={styles.functionIcon}>
                                <OfficeSupplyIcon iconInfo='Activity'/>
                            </View>
                            <View style={styles.functionIcon}>
                                <OfficeSupplyIcon iconInfo='Other'/>
                            </View>
                        </View>
                    </View>

                    <View>
                        <SwipeList />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    center: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    img: {
        width: 40,
        height: 33,
    },
    homeHeader: {
        alignItems: 'center',
        height: 52,
        backgroundColor: '#00897b',
        justifyContent: 'center',
        marginBottom: 5,
        width
    },
    FocusBorder: {
        flex: 2,
    },
    toolbox: {
        backgroundColor: '#00897b',
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title_view: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27b5ee',
    },
    title_text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    three_image_view: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    vertical_view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 15,
    },
    top_text: {
        marginTop: 5,
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },
    rectangle_view: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#dedfe0',
        borderBottomWidth: 1
    },
    rectangle_text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        paddingLeft: 8,
    },
    button: {
        margin: 7,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
    },
    functionBar: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#00897b',
        marginTop: 5,
    },
    functionBarRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 10
    },
    functionIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});