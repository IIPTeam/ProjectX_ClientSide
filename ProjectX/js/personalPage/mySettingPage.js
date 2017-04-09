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
import PersonalPage from "./personalPage";
import {BackBtnSvg} from '../image/backSvg';
import {MenuBtnSvg} from '../image/meunSvg';

export default class MySetPage extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }
    _pressBackButtoon(){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                name:'PersonalPageComponent',
                component:PersonalPage,
            })
        }
    }
   
    render(){
        return (
        	<View style={styles.ApplicationCont}>
				<View style={styles.header}>
					<TouchableWithoutFeedback onPress={this._pressBackButtoon.bind(this)}>
				      {BackBtnSvg}
				    </TouchableWithoutFeedback>
					
					<View style={styles.headerText}>
						<Text style={styles.fogtPswTxt}>My Setting</Text>
					</View>
					<TouchableWithoutFeedback onPress={() => {
						
					}}>{MenuBtnSvg}</TouchableWithoutFeedback>
				</View>
				
				
				
			</View>
        );
    }
}
const styles = StyleSheet.create({
	ApplicationCont:{
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
});