import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import ScrollImage from '../common/scrollImage';
const {width} = Dimensions.get('window');

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={[styles.flex,styles.center,{backgroundColor: '#ffffff'}]}>
                <View style={styles.homeHeader}>
                    <Text style={{fontSize: 30}}>Hello {this.props.userDetails.chName}</Text>
                </View>
                <ScrollImage/>
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
    }
});