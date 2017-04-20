import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
	Text,
	View,
    StyleSheet
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

export default class OTApplyIcon extends Component {
	constructor(props) {
        super(props);
    }

    render(){
        var pressEvent = this.props.pressEvent || function(){};
        return (
        	<TouchableWithoutFeedback onPress={()=>pressEvent()}>
				<View style={styles.icon}>
					<Svg
						height="32"
						width="32"
						viewBox="0 0 32 32">
						<G>
							<Path fill="#00897b" d="M0,3.2989992L16.263,3.2989992C16.003998,3.8440015,15.798981,4.4169995,15.648987,5.0130002L1.7139893,5.0130002 1.7139893,18.724002 23.993988,18.724002 23.993988,16.603C24.233002,16.620998 24.472992,16.639003 24.717987,16.639003 25.052002,16.639003 25.381989,16.619998 25.707001,16.586002L25.707001,20.436999 16.709991,20.436999 16.709991,22.151996 18.852997,22.151996 18.852997,23.865001 6.8559875,23.865001 6.8559875,22.151996 8.9970093,22.151996 8.9970093,20.436999 0,20.436999z M23.93399,3.1879992L23.93399,6.4980003 20.623993,6.4980003 20.623993,8.0660011 23.93399,8.0660011 23.93399,11.376002 25.501984,11.376002 25.501984,8.0660011 28.811981,8.0660011 28.811981,6.4980003 25.501984,6.4980003 25.501984,3.1879992z M24.71701,0C28.73999,-1.6934871E-07 32,3.2610013 32,7.2810013 32,11.303996 28.73999,14.563998 24.71701,14.563998 20.695007,14.563998 17.434998,11.303996 17.434998,7.2810013 17.434998,3.2610013 20.695007,-1.6934871E-07 24.71701,0z" />
						</G>
					</Svg>
                    <View style={styles.iconText}>
                        <Text style={styles.iconInfo}>{this.props.iconInfo}</Text>
                    </View>

				</View>
        	</TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    icon:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconInfo: {
        color: '#00897b'
    }
});