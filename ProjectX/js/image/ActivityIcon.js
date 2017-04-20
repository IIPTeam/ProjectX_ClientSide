import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
	Text,
	View,
    StyleSheet
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

export default class ActivityIcon extends Component {
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
							<Path fill="#00897b" d="M15.253783,14.646013C16.249779,14.646013,18.840769,16.638992,19.039774,22.915995L0.0098751726,23.115C0.0098749779,23.115 -0.48812351,15.145006 5.5888404,14.745989 7.9808263,14.347003 10.37182,16.738998 11.766802,16.538986 13.061793,16.340012 14.356784,14.646013 15.253783,14.646013z M19.139765,11.956014C19.936757,11.956014 20.932755,13.451007 22.128746,13.650012 23.224749,13.848987 25.316735,11.657002 27.309719,12.055989 32.390702,12.355 31.992693,19.628004 31.992693,19.628004L20.434756,19.527998C19.737769,15.841996 18.043778,14.347003 17.146778,14.147998 17.744767,12.554005 18.641766,11.956014 19.139765,11.956014z M10.969809,1.9930097C13.759803,1.9930097 15.950786,4.484005 15.950786,7.6720209 15.950786,10.761007 13.759803,13.351001 10.969809,13.351001 8.17983,13.351001 5.9878406,10.860006 5.9878406,7.6720209 5.9878406,4.5830035 8.17983,1.9930097 10.969809,1.9930097z M22.626746,0C25.11773,2.2932454E-08 27.209729,2.2920206 27.209729,5.0810194 27.209729,7.8709951 25.11773,10.163015 22.626746,10.163015 20.135762,10.163015 18.043778,7.8709951 18.043778,5.0810194 18.043778,2.2920206 20.135762,2.2932454E-08 22.626746,0z" />
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