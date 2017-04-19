import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Animated,
    Easing,
    Dimensions,
    BackAndroid
} from 'react-native';
import Toast from 'react-native-easy-toast';
import HudView from 'react-native-easy-hud';
import ModifyPsw from "./modifyPsw";
import CallService from "../until/CallService";
import Platform from 'Platform';
const dismissKeyboard = require('dismissKeyboard');
const {width, height} = Dimensions.get('window');  
const navigatorH = 100; // navigator height  
const [aWidth, aHeight] = [330, 260];  
const [left, top] = [0, 0];  
const [middleLeft, middleTop] = [(width - aWidth) / 2, (height - aHeight) / 2];  
   
export default class PopSpan extends Component {  

    constructor(props) {  
        super(props); 
         
        this.state = {  
            offset: new Animated.Value(0),  
            opacity: new Animated.Value(0),  
            title: "",  
            inputBoxName: "",  
            buttonName: "",  
            hide:true,    
            staffId:""
        };
        this.pagedata={
            staffId:this.state.staffId,
            vCode:''
        };
        this.parent = {}; 
    }  


    showPop (title,inputBoxName,buttonName,isCurrentPage,pageData) {  
        this.parent = pageData; 
        this.parent.isCurrentPage = isCurrentPage;
        if(this.state.hide){  
              this.setState({
                staffId:this.parent.state.staffId, 
                title: title, 
                inputBoxName: inputBoxName, 
                buttonName: buttonName, 
                hide: false
            },this.showIn());  
        }  
    } 

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        if(!this.state.hide){ 
            this.exitOut();
            return true;//接管默认行为
        }
        return false;
    }

    //显示动画  
    showIn () {  
        Animated.parallel([  
            Animated.timing(  
                this.state.opacity,  
                {  
                  easing: Easing.linear,  
                  duration: 500,  
                  toValue: 0.8,  
                }  
            ),  
            Animated.timing(  
                this.state.offset,  
                {  
                  easing: Easing.linear,  
                  duration: 500,  
                  toValue: 1,  
                }  
            )
        ]).start();
    }  
    
    //隐藏动画  
    exitOut(){  
        Animated.parallel([  
            Animated.timing(  
                this.state.opacity,  
                {  
                  easing: Easing.linear,  
                  duration: 500,  
                  toValue: 0.8,  
                }  
            ),  
            Animated.timing(  
                this.state.offset,  
                {  
                  easing: Easing.linear,  
                  duration: 500,  
                  toValue: 1,  
                }  
            )
        ]).start();
        setTimeout(() => this.setState({hide: true}),500);  
    }
    
    //cancel
    cancelBack() {
        this.exitOut();
    }

    callservices(){
        let url = 'http://192.168.1.103:8083/fgtPaswrd/fgtPaswrd';
        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "user": {
                    "userName": this.state.staffId
                }
            })
        };

        CallService.fetchNetRepository(url, options).then((res) => {
            this._hud.hide();
            if (res) {
                res.staffId= this.state.staffId;
                console.log('[callservice success] normal ');
                console.log(res);
                const {navigator} = this.parent.props;
                if (navigator) {
                    navigator.push({
                        name: 'ModifyPswPswPageComponent',
                        component: ModifyPsw,
                        params: res
                    })
                    console.log('[gotoModifyPswPage]this is sent to ModifyPsw page data ');
                    console.log(this.pagedata);
                }              
            } else {
                if (!res.vCode.validUesr){
                   Alert.alert("Failed", "unknow");
                   console.log('[callservice success] adnormal ');
                   console.log(res);
                }
            }
        }).catch((error) => {
            this._hud.hide();
            // this.pagedata = error;
            return error;
            console.log('[callservice Failed] error messages: ');
            console.log(error);
        })
    }

    hideKeyboard(){
        dismissKeyboard();
    }

    //submit
    sendRequest() {  
        //console.log(msg);  
        dismissKeyboard();
        if(!this.state.hide){  
            if(this.state.staffId.length===10){
                this._hud.show();
                this.callservices();
                this.exitOut();
            } else {
                this.refs.popToast.show("need 10 bit Staff ID", 500);
            }
            this.parent.setState({staffId:this.parent.staffId});  
        }
    }

    gotoModifyPswPage(pageData) {
        const {navigator} = this.parent.props;
        if (navigator) {
            navigator.push({
                name: 'ModifyPswPswPageComponent',
                component: ModifyPsw,
                params: this.pageData
            })
            console.log('[gotoModifyPswPage]this is sent to ModifyPsw page data ');
            console.log(this.pagedata);
        }
    }
    
    render() {  
        if(this.state.hide){  
            return (<View/>);
        } else {  
            return (  
            <View style={styles.container}>
                <Animated.View style={ styles.mask }>
                    <Text> </Text>
                </Animated.View>

                <Animated.View
                    style={[
                        styles.tip, 
                        {transform: [{  
                            translateY: this.state.offset.interpolate({  
                                inputRange: [0, 1],  
                                outputRange: [height, navigatorH]  
                            }),  
                        }]}
                    ]}
                >
                    <View style={styles.tipTitleView}>
                        <Text style={styles.tipTitleText}>{this.state.title}</Text>
                    </View>



                    <View style={styles.tipContentView}>
                        <HudView
                            ref={(hud) => {
                                this._hud = hud
                            }}
                            delay={0}
                        />
                        <View style={styles.tipInputBox}>                        
                            <Text style={styles.tipText}>{this.state.inputBoxName}</Text>
                            <TextInput
                                style={styles.userNameInput}
                                underlineColorAndroid="transparent"
                                testID="staffId"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={() => this.hideKeyboard()}
                                onChangeText={(staffId) => this.setState({staffId})}
                                value={this.state.staffId}
                            />
                        </View>
                        <TouchableHighlight 
                            style={styles.button} 
                            activeOpacity={0.7}
                            underlayColor='#f0f0f0' 
                            onPress={this.sendRequest.bind(this,this.state.staffId)}
                        >
                            <Text style={styles.buttonText} >{this.state.buttonName}</Text>
                        </TouchableHighlight>
                    </View>

                    <Toast ref="popToast" style={styles.toastInfo} position='top'/>
                </Animated.View>
            </View>
            );
        }
    } 
} 
const styles = StyleSheet.create({
    container: {
        position:"absolute",  
        width:width,  
        height:height,  
        left:left,  
        top:top,  
    },  
    mask: {  
        justifyContent:"center",  
        backgroundColor:"#383838",  
        opacity:0.8,  
        position:"absolute",  
        width:width,  
        height:height,  
        left:left,  
        top:top,  
    },  
    tip: {  
        width:aWidth,  
        height:aHeight,  
        left:middleLeft,  
        backgroundColor:"#fff",  
        alignItems:"center",  
        justifyContent:"space-between",  
    },
    tipTitleView: {  
        height:60, 
        borderBottomWidth:1, 
        borderBottomColor:"#888", 
        alignItems:'center',
        flexDirection: 'column',
        justifyContent:'center',
        paddingLeft:12,  
        paddingRight:12,  
    },
    tipTitleText:{  
        color:"#00897b",  
        fontSize:18,  
    },
    tipContentView: {  
        width:aWidth,  
        height:200,  
        flexDirection:'column',  
        alignItems:'center',  
        justifyContent:'center',  
    },  
    tipInputBox: {  
        height:60,
        width:aWidth-40,
        borderWidth:1, 
        borderColor:"#00897b",   
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'center',
        paddingLeft:12,  
        paddingRight:12,
        marginBottom: 30,  
    },  
    tipText:{  
        color:"#00897b",  
        fontSize:18,
        textAlign:"left",  
    },
    userNameInput:{
        height:60,  
        width:aWidth-130,
        marginLeft: 10,  
    },  
    button: {  
        height: 45,
        width:aWidth-40,
        backgroundColor: '#00897b',  
        justifyContent: 'center',  
        // borderColor: '#e6454a',  
        //borderWidth: 1,  
        //borderRadius: 4,  
        //alignSelf: 'stretch',  
        //marginLeft: 10,  
        //marginRight: 10,  
    },  
    buttonText: {  
        color:"#fff",  
        fontSize:18,  
        textAlign:"center",  
    },  
    gap:{  
        height:1,  
        width:aWidth*0.8,  
        backgroundColor:'#383838',  
        opacity:0.8,  
    },

    toastInfo: {
        backgroundColor: '#000'
    }
});
  