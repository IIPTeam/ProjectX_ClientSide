import React, {Component} from 'react';
import {
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
import Logon from "./logon";
import PopSpan from "./popSpan";
import HomePage from "../homePage/homePage";
import {BackBtnSvg} from '../image/backSvg';
import {MenuBtnSvg} from '../image/meunSvg';

export default class ModifyPsw extends Component {

    constructor(props){
        super(props);
        this.state= {
            timerCount:10,
            timerTitle:'sec left for re-send code'
        };
        this._timeForResend();
    }

    // 返回
    _pressBackButtoon(){
    	const { navigator } = this.props;
        if(navigator){
            navigator.push({
                name:'LogonPageComponent',
                component:Logon,
            })
        }
    }

    //提交修改密码
    _pressConfirmButtoon(){
    	/*const { navigator } = this.props;
        if(navigator){
        	Alert.alert(
                'Submit successfully',
                'alertMessage',
                [
                  {text: 'OK', onPress: () => this._gotoHomePage(this)}
                ]
            );
        }*/
        this._gotoHomePage();
    }

    _gotoHomePage(){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                    name:'HomePageComponent',
                    component:HomePage,
                    params: {
                        userDetails: {
                            chName: '吴海涛'
                        }
                    }
            })
        }
    }

    _timeForResend(){
        var lefttimerCount=this.state.timerCount;
        this.interval=setInterval(() =>{
            lefttimerCount=this.state.timerCount-1;
            if(lefttimerCount===0){
                this.interval&&clearInterval(this.interval);
                this.setState({
                    timerCount:"",
                    timerTitle:'resend verify code'
                });
                }else{
                    this.setState({
                    timerCount:lefttimerCount,
                });
            }
        },1000)
    }

    _resendVerifyCode(){
        if (!this.state.timerCount) {
            this.popSpan.showPop( "Please input your Staff ID number", "Staff ID", "Send Verification Num", true, this );
        }
    }

    
    componentDidUnMount() {
        this.timer && clearTimeout(this.timer);

    }

    render(){
        return (
        	<View style={styles.modifyPswCont}>
				<View style={styles.header}>
					<TouchableWithoutFeedback onPress={this._pressBackButtoon.bind(this)}>
				      {BackBtnSvg}
				    </TouchableWithoutFeedback>
					
					<View style={styles.headerText}>
						<Text style={styles.fogtPswTxt}>Modify Password</Text>
					</View>
					<TouchableWithoutFeedback onPress={() => {
						
					}}>{MenuBtnSvg}</TouchableWithoutFeedback>
				</View>
				<View style={styles.container}>
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
							/>
						</View>
						<View style={styles.inputBox}>
							<Text style={styles.modifyPswText}>New Password:</Text>
							<TextInput
								style={styles.staffIdInput}
								underlineColorAndroid="transparent"
								autoCapitalize="none"
								autoCorrect={false}
								keyboardType='numeric'
							/>
						</View>
						
					</View>
					<View style={styles.bottomCont}>
                    <TouchableHighlight
                        style={styles.resendButton}
                        // activeOpacity={0.7}
                        underlayColor='#00897b'
                        onPress={this._resendVerifyCode.bind(this)}
                    >
						<Text style={styles.resendText}>{this.state.timerCount} {this.state.timerTitle}</Text>
                    </TouchableHighlight>
					</View>
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
                <PopSpan ref={popSpan => this.popSpan=popSpan} position='top'/>
			</View>
        );
    }
}


const styles = StyleSheet.create({
	modifyPswCont:{
		flex:1,
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