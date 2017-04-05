import React, {Component} from 'react';
import {
	StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class TextInputConpt extends Component{
	static propTypes = {
		labelCont: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        ispassword: React.PropTypes.bool
    }

    static defaultProps = {
        labelCont: '名称',
        placeholder: '内容',        
        ispassword: false
    }

    constructor(props){
        super(props);
        this.state = {
        	txtValue: ""
        };

    }

    render(){
    	var { labelCont, placeholder, ispassword } = this.props;
        return (
			<View View style={styles.txtBorder}>
				<Text style={styles.txtLabel}>{labelCont}</Text>
				<TextInput
					underlineColorAndroid = {'transparent'}
                    style={styles.txtCont}
                    multiline={false}
                    placeholder={placeholder}
                    password={ispassword} 
                    onChangeText={(text) => {
	                    this.setState({
	                    	txtValue: text
	                    })
                    }}
                    value={this.state.txtValue}
				/>
			</View>			
        );
    }

    getValue () {
        return this.state.txtValue
    }
}
const styles = StyleSheet.create({
	txtBorder:{
		borderWidth: 1,
        borderColor: '#00897b',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
	},
	txtLabel:{
		padding: 5,
        fontSize: 18,
        marginRight: 5,
        marginTop: 5,
        color: '#00897b',
        marginLeft:5
	},
	txtCont:{
		flex: 1,
        fontSize: 20,
        padding: 6,
        justifyContent: 'center'
	}
});