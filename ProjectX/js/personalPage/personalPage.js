import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image
} from 'react-native';
// import Edit from "./edit";
import ApplicationPage from "./myApplicationPage";
import MySetPage from "./mySettingPage";
import MyApprovalPage from "./myApprovalPage";
import {CommonStyle} from '../theme/common-style';
import {MenuBtnSvg} from '../image/meunSvg';
import {PersonalBtnSvg} from '../image/PersonalSvg';
import {BackBtnSvg} from '../image/backSvg';
import {MyApplicationBtnSvg} from '../image/MyApplicationSvg';
import {MyApprovalBtnSvg} from '../image/MyApprovalSvg';
import {Tbc1BtnSvg} from '../image/TBC1Svg';
import {Tbc2BtnSvg} from '../image/TBC2Svg';
import {Tbc3BtnSvg} from '../image/TBC3Svg';
import {MySettingBtnSvg} from '../image/MySettingSvg';
import {ApplyBtnSvg} from '../image/TBC2Svg';





export default class PersonalPage extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
     _myAppPressButtoon(){
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'ApplicationPageComponent',
                component: ApplicationPage
            })
        }
    }
    _mySetPressButtoon(){
        const{navigator}=this.props;
        if(navigator){
            navigator.push({
                name:'MySetPageComponent',
                component:MySetPage
            })
        }   

     }
     _myApprovalBtn(){
        const{navigator}=this.props;
        if(navigator){
            navigator.push({
                name:'MyApprovalPageComponent',
                component:MyApprovalPage
            })
        }
     }
    render() {
        return (
            <View style={[styles.container,CommonStyle.themeColor]}>               
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#00897b',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'center',alignItems: 'center',}}>
                        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}> 
                            <Text style={{fontSize: 20,color: 'white'}}>Personal Page</Text> 
                        </View> 
                        {MenuBtnSvg}
                    </View>                                           
                </View>              
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#D1D1D1',flex: 1,height: 100,flexDirection: 'row',
                                    justifyContent: 'center',alignItems: 'center',}}> 
                       {PersonalBtnSvg}
                        <Text style={{fontSize: 20,color: 'white'}}> 董静 & Eline J Dong {'\n'}{'\n'} SE @ HSBC line </Text>
                    </View>
                </View> 
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#D1D1D1',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'center',alignItems: 'center',}}> 
                        <View style={{height: 35,width:120,borderRadius:10,backgroundColor: 'grey',
                                        borderWidth: 1,borderColor: 'white',justifyContent: 'center',alignItems: 'center'}}>            
                            <Text style={{fontSize: 20,color: 'white'}}>Edit</Text> 
                        </View>
                    </View>
                </View>                           
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#ffffff',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'flex-start',alignItems: 'center',borderWidth: 1,
                                    borderColor: '#00897b'}}>
                        {MyApplicationBtnSvg}
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}} onPress={this._myAppPressButtoon.bind(this)}> My Application</Text>  
                        </View>                      
                        {ApplyBtnSvg}
                    </View>
                </View>                                            
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#ffffff',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'flex-start',alignItems: 'center',borderWidth: 1,
                                    borderColor: '#00897b'}}>
                        {MyApprovalBtnSvg}
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}} onPress={this._myApprovalBtn.bind(this)}> My Approval</Text>
                        </View>   
                    {ApplyBtnSvg}
                    </View>                      
                </View>                                            
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#ffffff',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'flex-start',alignItems: 'center',borderWidth: 1,
                                    borderColor: '#00897b'}}>
                        {Tbc3BtnSvg}
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}}> TBC</Text>
                        </View>   
                   {ApplyBtnSvg}
                    </View>                      
                </View>                                            
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#ffffff',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'flex-start',alignItems: 'center',borderWidth: 1,
                                    borderColor: '#00897b'}}>
                        {Tbc2BtnSvg}
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}}> TBC</Text>
                        </View>   
                   {ApplyBtnSvg}
                    </View>                      
                </View>                                            
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#ffffff',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'flex-start',alignItems: 'center',borderWidth: 1,
                                    borderColor: '#00897b'}}>
                        {Tbc1BtnSvg}
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}}> TBC</Text>
                        </View>   
                   {ApplyBtnSvg}
                    </View>                      
                </View>                                            
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#ffffff',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'flex-start',alignItems: 'center',borderWidth: 1,
                                    borderColor: '#00897b'}}>
                        {MySettingBtnSvg}
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}} onPress={this._mySetPressButtoon.bind(this)}> My Setting</Text>  
                        </View>   
                    {ApplyBtnSvg}
                    </View>                      
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
        //backgroundColor: '#ffffff',
    },
    headBox: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    logonButtonBox: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    logonButton: {
        backgroundColor: '#00897b',
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logonButtonText: {
        fontSize: 20,
        color: 'white'
    },
    optionButtonText: {
        fontSize: 20,
        color: 'white'
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#00897b',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    }
});