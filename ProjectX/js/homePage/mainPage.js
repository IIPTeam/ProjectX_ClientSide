import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

import ScrollImage from '../common/scrollImage';
const {width} = Dimensions.get('window');
import {BackBtnSvg} from '../image/backSvg';
import OTApplyMain from '../otApply/otApplyMain';
import SwipeList from '../common/swipeList';

export default class MainPage extends Component {
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
                    <Text style={{fontSize: 30}}>Hello {/*this.props.homeProps.userDetails.chName*/}</Text>
                </View>
                    <ScrollView  ref={(scrollView) => { _scrollView = scrollView; }}>
                        <ScrollImage/>
                        <View>

                        </View>
                        {/*<View style={styles.toolbox}>*/}
                            {/*<TouchableWithoutFeedback onPress={()=>{*/}
                                {/*this._goToOTPage();*/}
                            {/*}}>*/}
                                {/*{BackBtnSvg}*/}
                            {/*</TouchableWithoutFeedback>*/}
                        {/*</View>*/}

                        <View>
                            <SwipeList />
                        </View>
                    </ScrollView>
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
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title_view:{
        flexDirection:'row',
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#27b5ee',
    },
    title_text:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    },
    three_image_view:{
        paddingTop: 15,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'white',
    },
    vertical_view:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        paddingBottom:15,
    },
    top_text:{
        marginTop:5,
        color:'black',
        fontSize:16,
        textAlign:'center'
    },
    rectangle_view:{
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:15,
        paddingRight:15,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'white',
        borderBottomColor:'#dedfe0',
        borderBottomWidth:1,
    },
    rectangle_text:{
        color:'black',
        fontSize:16,
        textAlign:'center',
        paddingLeft:8,
    },
    button: {
        margin: 7,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
    },
});