import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
	Text,
	View,
    StyleSheet
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

export default class LeaveApplyIcon extends Component {
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
							<Path fill="#00897b" d="M24.924996,11.23L24.947995,15.483001 27.086001,13.368001z M23.591992,8.062L28.955005,13.368001 23.650992,18.614002 23.625993,14.032001 17.169978,14.032001 17.169978,12.637001 23.617993,12.637001z M1.4129638,2.1409988L1.4129638,25.334007 12.008973,29.859001 12.008973,6.6670005z M0,0L0.19799804,0.084999087 20.31,0.084999087 20.31,5.3550002 18.896975,5.3550002 18.896975,1.498001 3.5059814,1.498001 13.421998,5.7319991 13.421998,24.929001 18.896975,24.929001 18.896975,21.173002 20.31,21.173002 20.31,26.342003 13.421998,26.342003 13.421998,32 0.17199707,26.342003 0,26.342003 0,26.268005 0,0.084999087z" />
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