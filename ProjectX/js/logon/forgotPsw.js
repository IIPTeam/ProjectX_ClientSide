import React, {Component} from 'react';
import {
	StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

export default class ForgotPsw extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    _pressButtoon(){
    	const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }
    render(){
        return (
        	<View style={styles.forgotPswCont}>
				<View style={styles.header}>
					<TouchableWithoutFeedback onPress={this._pressButtoon.bind(this)}>
				      <Image
							style={styles.backIcon}
							source={require('../image/backIcon.png')}
						/>
				    </TouchableWithoutFeedback>
					
					<View style={styles.headerText}>
						<Text style={styles.fogtPswTxt}>Forgot Password</Text>
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
							<Text style={styles.forgotPswText}>Staff ID:</Text>
							<TextInput
								style={styles.staffIdInput}
								underlineColorAndroid="transparent"
								autoCapitalize="none"
								autoCorrect={false}
							/>
						</View>
						<View style={styles.inputBox}>
							<Text style={styles.forgotPswText}>Phone Number:</Text>
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
						onPress={() => {
						}}
						activeOpacity={0.7}
						style={styles.verifyButton}
						underlayColor='#008080'
					>
						<Text style={styles.verifyBtnText}>Send Verification Number</Text>
					</TouchableHighlight>
				</View>
			</View>
        );
    }
}
const styles = StyleSheet.create({
	forgotPswCont:{
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
    forgotPswText: {
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