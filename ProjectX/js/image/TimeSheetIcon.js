import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
	Text,
	View,
    StyleSheet
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

export default class TimeSheetIcon extends Component {
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
							<Path fill="#00897b" d="M30.023987,15.391996L32,17.367993 23.681976,25.685999 23.677002,25.679987 18.97998,20.98399 20.955994,19.007992 23.681976,21.734997z M10.671997,10.831999C11.106995,10.831999 11.509003,10.925001 11.875977,11.113004 12.243988,11.3 12.523987,11.555997 12.718994,11.878995 12.914001,12.201001 13.009979,12.546003 13.009979,12.908994 13.009979,13.253995 12.917999,13.568998 12.733002,13.852002 12.548004,14.134992 12.272003,14.359998 11.90799,14.52699 12.380981,14.635999 12.748993,14.863004 13.009979,15.204999 13.27298,15.548993 13.402985,15.981 13.402985,16.494 13.402985,17.19299 13.14798,17.783993 12.639984,18.270001 12.130981,18.755993 11.487976,18.997997 10.708984,18.997997 10.009003,18.997997 9.427002,18.787991 8.9629822,18.370999 8.5,17.951 8.2349854,17.408993 8.1689758,16.742993L9.1499939,16.613995C9.2639771,17.167996 9.4549866,17.570996 9.7250061,17.815991 9.9960022,18.061001 10.324982,18.184002 10.713989,18.184002 11.175995,18.184002 11.565002,18.023998 11.884003,17.703991 12.200989,17.383999 12.359985,16.988995 12.359985,16.514996 12.359985,16.065991 12.212982,15.691999 11.919983,15.400998 11.623993,15.107999 11.25,14.962003 10.79599,14.962003 10.610992,14.962003 10.380981,14.99899 10.104004,15.070996L10.212982,14.210996C10.277985,14.219999 10.330994,14.221997 10.369995,14.221997 10.789001,14.221997 11.165985,14.113004 11.5,13.895002 11.833984,13.677991 12.000977,13.341993 12.000977,12.885999 12.000977,12.525998 11.878998,12.229001 11.635986,11.994001 11.391998,11.757001 11.078003,11.63899 10.692993,11.63899 10.312988,11.63899 9.992981,11.759992 9.7389832,11.99899 9.4849854,12.238004 9.3209839,12.598996 9.2489929,13.076993L8.269989,12.904004C8.3880005,12.244992 8.6619873,11.734998 9.0870056,11.374997 9.5119934,11.012998 10.039978,10.831999 10.671997,10.831999z M17.43399,10.830992L18.065979,10.830992 18.065979,18.852993 17.084991,18.852993 17.084991,12.600003C16.848999,12.826993 16.539978,13.052991 16.156982,13.27699 15.772003,13.501996 15.428986,13.669996 15.122986,13.783994L15.122986,12.837003C15.671997,12.576993 16.151978,12.266004 16.563995,11.898999 16.972992,11.533994 17.263977,11.176999 17.43399,10.830992z M2.401001,2.2610011L5.0350037,2.2610011 5.0350037,5.2229907 9.8089905,5.2229907 9.8089905,2.2610011 16.502991,2.2610011 16.502991,5.2229907 21.276978,5.2229907 21.276978,2.2610011 24.14798,2.2610011C25.473999,2.2610011,26.548004,3.3339989,26.548004,4.6609943L26.548004,17.359997 24.010986,19.895001 24.010986,8.205992 2.5369873,8.205992 2.5369873,21.115002 17.602997,21.115002 20.395996,23.908993 0,23.908993 0,21.115002 0.0019836426,21.115002 0.0019836426,4.6609943C0.0019836426,3.3339989,1.0749817,2.2610011,2.401001,2.2610011z M17.412994,0L20.367981,0 20.367981,4.255996 17.412994,4.255996z M5.9449768,0L8.8989868,0 8.8989868,4.255996 5.9449768,4.255996z" />
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