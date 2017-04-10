import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';

import ScrollImage from '../common/scrollImage';
const {width} = Dimensions.get('window');
import {BackBtnSvg} from '../image/backSvg';
import OTApplyMain from '../otApply/otApplyMain';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    _goToOTPage(){
        const {navigator} = this.props.homeProps;
        if (navigator) {
            navigator.push({
                name: 'OTApplyMainPage',
                component: OTApplyMain,
                params: {}
            })
        }
    }

    render(){
        return (
            <View style={[styles.flex,styles.center,{backgroundColor: '#ffffff'}]}>
                <View style={styles.homeHeader}>
                    <Text style={{fontSize: 30}}>Hello {this.props.homeProps.userDetails.chName}</Text>
                </View>
                <ScrollImage/>
                <View style={styles.toolbox}>
                    <TouchableWithoutFeedback onPress={()=>{
                        this._goToOTPage();
                    }}>
                        {BackBtnSvg}
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    center:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    img: {
        width: 40,
        height: 33,
    },
    homeHeader:{
        alignItems: 'center',
        height:52,
        backgroundColor: '#00897b',
        justifyContent: 'center',
        marginBottom:5,
        width
    },
    FocusBorder:{
        flex:2,
    },
    toolbox:{
        backgroundColor: '#00897b',
    }
});