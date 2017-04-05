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
import {CommonStyle} from '../theme/common-style';

export default class PersonalPage extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
     _pressButtoon(){
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'EditComponent',
                component:Edit,
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
                        <Image style={{width:30,height:40,}} source={require('../image/personalPage/menuIcon.jpg')}/>
                    </View>                                           
                </View>              
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#D1D1D1',flex: 1,height: 100,flexDirection: 'row',
                                    justifyContent: 'center',alignItems: 'center',}}> 
                        <Image style={{width:80,height:80,borderRadius:27}} source={require('../image/personalPage/man.jpg')}/>
                        <Text style={{fontSize: 20,color: 'white'}}> 王昌 & Scott C Wang {'\n'}{'\n'} SE @ HSBC line </Text>
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
                        <Image style={{width:40,height:20,}} source={require('../image/personalPage/modifyIcon.jpg')}/>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}}> My Application</Text>  
                        </View>                      
                        <Image style={{width:20,height:40,margin:10}} source={require('../image/personalPage/onIcon.jpg')}/>
                    </View>
                </View>                                            
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#ffffff',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'flex-start',alignItems: 'center',borderWidth: 1,
                                    borderColor: '#00897b'}}>
                        <Image style={{width:40,height:20,}} source={require('../image/personalPage/pencilIcon.jpg')}/>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}}> My Approval</Text>
                        </View>   
                    <Image style={{width:20,height:40,margin:10}} source={require('../image/personalPage/onIcon.jpg')}/>
                    </View>                      
                </View>                                            
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#ffffff',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'flex-start',alignItems: 'center',borderWidth: 1,
                                    borderColor: '#00897b'}}>
                        <Image style={{width:40,height:20,}} source={require('../image/personalPage/flagIcon.jpg')}/>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}}> TBC</Text>
                        </View>   
                    <Image style={{width:20,height:40,margin:10}} source={require('../image/personalPage/onIcon.jpg')}/>
                    </View>                      
                </View>                                            
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#ffffff',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'flex-start',alignItems: 'center',borderWidth: 1,
                                    borderColor: '#00897b'}}>
                        <Image style={{width:40,height:20,}} source={require('../image/personalPage/clockIcon.jpg')}/>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}}> TBC</Text>
                        </View>   
                    <Image style={{width:20,height:40,margin:10}} source={require('../image/personalPage/onIcon.jpg')}/>
                    </View>                      
                </View>                                            
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#ffffff',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'flex-start',alignItems: 'center',borderWidth: 1,
                                    borderColor: '#00897b'}}>
                        <Image style={{width:40,height:20,}} source={require('../image/personalPage/piceIcon.jpg')}/>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}}> TBC</Text>
                        </View>   
                    <Image style={{width:20,height:40,margin:10}} source={require('../image/personalPage/onIcon.jpg')}/>
                    </View>                      
                </View>                                            
                <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                    <View style={{backgroundColor: '#ffffff',flex: 1,height: 50,flexDirection: 'row',
                                    justifyContent: 'flex-start',alignItems: 'center',borderWidth: 1,
                                    borderColor: '#00897b'}}>
                        <Image style={{width:40,height:20,}} source={require('../image/personalPage/setIcon.jpg')}/>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20,color: '#00897b'}}> My Setting</Text>  
                        </View>   
                    <Image style={{width:20,height:40,margin:10}} source={require('../image/personalPage/onIcon.jpg')}/>
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