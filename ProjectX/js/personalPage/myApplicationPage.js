import React, {Component} from 'react';
import {
    AppRegistry,
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
import Tabs from 'react-native-tabs';
import PersonalPage from "./personalPage";
import {BackBtnSvg} from '../image/backSvg';
import {MenuBtnSvg} from '../image/meunSvg';

export default class ApplicationPage extends Component {

    constructor(props){
        super(props);
       this.state = {page:'Submited'};
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
        var self = this;
        return (
        	<View style={styles.ApplicationCont}>
				<View style={styles.header}>
					<TouchableWithoutFeedback onPress={this._pressBackButtoon.bind(this)}>
				      {BackBtnSvg}
				    </TouchableWithoutFeedback>
					
					<View style={styles.headerText}>
						<Text style={styles.fogtPswTxt}>My Application</Text>
					</View>
					<TouchableWithoutFeedback onPress={() => {
						
					}}>{MenuBtnSvg}</TouchableWithoutFeedback>
				</View>
				<View style={styles.container}>
                    <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
                          selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
                        <Text name="Submited">Submited</Text>
                        <Text name="Approved" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Approved</Text>
                        <Text name="Denied">Denied</Text>
                        <Text name="History" selectedStyle={{color:'green'}}>History</Text>
                    </Tabs>
                    <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
                          selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
                        <Text name="OTApplication" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>OT Application</Text>
                        <Text name="leaveApplication" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Leave Application</Text>
                    </Tabs>
                      <Text style={styles.welcome}>
                          Welcome to React Native
                      </Text>
                      <Text style={styles.instructions}>
                          Selected page: {this.state.page}
                      </Text>
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
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10,
  },
});
AppRegistry.registerComponent('ApplicationPage', () => ApplicationPage);