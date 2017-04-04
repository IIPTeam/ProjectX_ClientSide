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

export default class ModifyPsw extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    // 返回登录（取消修改）
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
    	const { navigator } = this.props;
        if(navigator){
        	Alert.alert(
            'Submit successfully',
            'alertMessage',
            [
              {text: 'OK', onPress: () => console.log('update successfully!')},
              {text: 'cancel', onPress: () => navigator.push({
                name:'LogonPageComponent',
                component:Logon,
            	})}
            ]
          );
        	navigator.push({
                name:'LogonPageComponent',
                component:Logon,
            })
        }
    }


    render(){
        return (
        	<View style={styles.modifyPswCont}>
				<View style={styles.header}>
					<TouchableWithoutFeedback onPress={this._pressBackButtoon.bind(this)}>
				      <Image
							style={styles.backIcon}
							source={require('../image/backIcon.png')}
						/>
				    </TouchableWithoutFeedback>
					
					<View style={styles.headerText}>
						<Text style={styles.fogtPswTxt}>Modify Password</Text>
					</View>
					<TouchableWithoutFeedback onPress={() => {
						
					}}>
						<Image
							style={styles.menuIcon}
							source={require('../image/menuIcon.jpg')}
						/>
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.container}>
					<View style={styles.topCont}>
						<View style={styles.inputBox}>
							<Text style={styles.modifyPswText}>"Fill in verification code:"</Text>
							<TextInput
								style={styles.staffIdInput}
								underlineColorAndroid="transparent"
								autoCapitalize="none"
								autoCorrect={false}
							/>
						</View>
						<View style={styles.inputBox}>
							<Text style={styles.modifyPswText}>"fill the new password:"</Text>
							<TextInput
								style={styles.staffIdInput}
								underlineColorAndroid="transparent"
								autoCapitalize="none"
								autoCorrect={false}
								keyboardType='numeric'
							/>
						</View>
					</View>
					<View style={styles.bottomCont}></View>
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
		flex:1,
		justifyContent: 'flex-end',
        flexDirection: 'column',
	},
	bottomCont:{
		flex:1,
	},
	inputBox: {
        borderWidth: 1,
        borderColor: '#00897b',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    modifyPswText: {
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