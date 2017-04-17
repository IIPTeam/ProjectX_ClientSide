import React, {Component} from 'react';
import {
	StyleSheet,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    BackAndroid,
    Dimensions
} from 'react-native';
import Toast from 'react-native-easy-toast';
import HudView from 'react-native-easy-hud';
import {BackBtnSvg} from '../image/backSvg';
import {MenuBtnSvg} from '../image/meunSvg';
import HomePage from "../homePage/homePage";
import Platform from 'Platform';
const dismissKeyboard = require('dismissKeyboard');
const {width} = Dimensions.get('window');
export default class ModifyPsw extends Component {

    constructor(props){
        super(props);
        this.state= {
          //  staffId:this.props.pageData.staffId,
          staffId:"1234567890",
            //verifyCode:this.props.pageData.vCodes,
            newPsw:'',
            verifyCode:'',
            timerCount:5,
            timerTitle:'sec left for re-send code'
        };
    }

    componentWillMount() {
        //start timer for resend verify code
        this._timeForResend();
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
		//clear the timer for resend verify code
        clearInterval(this.interval);
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const { navigator } = this.props;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：'+routers.length);
        if (routers.length > 1) {
            navigator.pop();
            return true;//接管默认行为
        }
        return false;//默认行为
    };

    // 返回
    _pressBackButton(){
    	const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }

    //提交修改密码
    _pressConfirmButtoon(){
        dismissKeyboard();
        if(this._checkValidation()){
            this.refs.toast.show("successfully!!!", 500);

            this._gotoHomePage();
        } else {
            this.refs.toast.show(" 6 bit verify code or 6-12 bit new password", 1000);
        }
        
    }

    _gotoHomePage(pageDate){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                    name:'HomePageComponent',
                    component:HomePage,
                    // params: pageDate
                    params: {
                        userDetails: {
                            chName: '吴海涛'
                        }
                    }
            })
        }
    }

    _timeForResend(){
        let leftTimerCount=this.state.timerCount;
        this.interval=setInterval(() =>{
            leftTimerCount=this.state.timerCount-1;
            if(leftTimerCount===0){
                this.interval&&clearInterval(this.interval);
                this.setState({
                    timerCount:"",
                    timerTitle:'resend verify code'
                });
                }else{
                    this.setState({
                    timerCount:leftTimerCount,
                });
            }
        },1000)
    }

    _resendVerifyCode(){
        if (!this.state.timerCount) {
            this._resendVerifyCodeCallService(this);

        }
    }

    _resendVerifyCodeCallService(){
        dismissKeyboard();
        if (this.state.staffId&&this.state.staffId.length===10) {
            // this._callForgotPaw().then((res) => {
            //     if (!res.err){
                    // this.state.verifyCode = res.vCode.vCode;
                    this.refs.toast.show("send verify code successfully", 500);   
                    this.state.timerCount=6;
                    this._timeForResend();                 
            //     }
            //     this.refs.toast.show("send verify code FAILED", 500);
            // });
        } else {
                this.refs.toast.show("staffId is : "+this.state.staffId, 500);
        }
    }

    _callForgotPaw(){
        this._hud.show();
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
        }

        CallService.fetchNetRepository(url, options).then((res) => {
            if (res) {
                this._hud.hide();
                console.log(res);
                return res;
            } else {
                if (!res.vCode.validUesr){
                   return res.err="this is a error";
                }
            }
        }).then((error) => {
            this._hud.hide();
            console.log(error);
        }).catch((error) => {
            this._hud.hide();
            console.log(error);
        })
    }

    _checkValidation(){
        let pwExp=/^[0-9a-zA-Z]{6,12}$/;
        let verifyExp=/^[0-9]{6}$/;
        return verifyExp.test(this.state.verifyCode)&&pwExp.test(this.state.newPsw);

    }

    render(){
        return (
            <View style={styles.modifyPswCont}>
                <View style={styles.header}>
                    <TouchableWithoutFeedback onPress={this._pressBackButton.bind(this)}>
                      {BackBtnSvg}
                    </TouchableWithoutFeedback>
                    
                    <View style={styles.headerText}>
                        <Text style={styles.fogtPswTxt}>Modify Password</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => {
                        
                    }}>{MenuBtnSvg}</TouchableWithoutFeedback>
                </View>
                <View style={styles.container}>
                    <ScrollView
                            ref={(scrollView) => {
                                _scrollView = scrollView;
                            }}
                            automaticallyAdjustContentInsets={false}
                            horizontal={false}
                            style={[styles.scrollView, styles.horizontalScrollView]}
                        >
					<View style={styles.topCont}>
						<View style={styles.msgInputBox}>
							<Text style={styles.senMessage}>Successfully sent SMS to 136****1987. Please check and fill in below form.</Text>
						</View>
					
						<View style={styles.inputBox}>
							<Text style={styles.modifyPswText}>Verification Number:</Text>
							<TextInput
								style={styles.staffIdInput}
								underlineColorAndroid="transparent"
								autoCapitalize="none"
								autoCorrect={false}
                                onChangeText={(verifyCode) => this.setState({verifyCode})}
                                value={this.state.verifyCode}
							/>
						</View>
						<View style={styles.inputBox}>
							<Text style={styles.modifyPswText}>New  Password:</Text>
							<TextInput
								style={styles.staffIdInput}
								underlineColorAndroid="transparent"
								autoCapitalize="none"
								autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={(newPsw) => this.setState({newPsw})}
                                value={this.state.newPsw}s
							/>
						</View>
                        <View style={styles.inputBox}>
                            <Text style={styles.modifyPswText}>Confirm Password:</Text>
                            <TextInput
                                style={styles.staffIdInput}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={(conNewPsw) => this.setState({conNewPsw})}
                                value={this.state.conNewPsw}
                            />
                        </View>
                        <HudView
                            ref={(hud) => {
                                this._hud = hud
                            }}
                            delay={0}
                        />
						<Toast ref="toast" style={styles.toastInfo} position='top'/>
					</View>
					<View style={styles.bottomCont}>
                    <TouchableHighlight
                        style={styles.resendButton}
                        activeOpacity={0.7}
                        underlayColor='#00897b'
                        onPress={this._resendVerifyCode.bind(this)}
                    >
						<Text style={styles.resendText}>{this.state.timerCount} {this.state.timerTitle}</Text>
                    </TouchableHighlight>
					</View>
                </ScrollView>
                </View>
                
                <View style={styles.footer}>
                    <TouchableHighlight
                        onPress={this._pressConfirmButtoon.bind(this)}
                        activeOpacity={0.7}
                        style={styles.verifyButton}
                        underlayColor='#008080'
                    >
                    <Text style={styles.verifyBtnText}>Submit update password</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
	modifyPswCont:{
		flex:1,
	},
    scrollView: {
        height: 30,
    },
	header:{
		flexDirection: 'row',
        alignItems: 'center',
		height:52,
		backgroundColor: '#00897b',
	},
	backIcon:{
		width:45,
	},
	headerText:{
		flex:1,
        justifyContent: 'center',
        alignItems: 'center',
	},
	fogtPswTxt:{
		color:'#ffffff',
		fontSize:20
	},
	menuIcon:{
		width:45,
	},
	container:{
		flex:1,        
	},
	topCont:{
		flex:4,
		justifyContent: 'flex-start',
        flexDirection: 'column',
	},
	bottomCont:{
		flex:1,
	},
    msgInputBox:{
    	borderWidth: 1,
        borderColor: '#00897b',
        backgroundColor:"white",
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,

    },
	inputBox: {
        borderWidth: 1,
        borderColor: '#00897b',
        height: 50,
        backgroundColor:"white",
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    senMessage:{
    	padding: 25,
        fontSize: 18,
        marginRight: 5,
        marginTop: 5,
        color: '#00897b',
        marginLeft:5,
        textAlign:"center",
    },
    modifyPswText: {
    	alignItems:"center",
        padding: 5,
        fontSize: 18,
        marginRight: 5,
        marginTop: 5,
        color: '#00897b',
        marginLeft:5
    },
    staffIdInput: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        justifyContent: 'center',
    },
	footer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    resendText:{
    	backgroundColor: '#00897b',
        height: 43,
        justifyContent: 'center',
        fontSize: 20,
        color: 'white',
        alignItems: "center",
        textAlign:"center",
        lineHeight:33

    },
    resendButton:{
        marginTop: 30,
        backgroundColor: '#00897b',
        height: 43,
        alignItems: "center",

    },
    verifyButton: {
        backgroundColor: '#00897b',
        flex: 1,
        height: 43,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verifyBtnText: {
        fontSize: 20,
        color: 'white'
    },
});