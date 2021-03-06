import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
	Text,
	View,
    StyleSheet
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

export default class OfficeSupplyIcon extends Component {
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
							<Path fill="#00897b" d="M25.198589,20.499004L25.3986,21.499004 9.4998551,24.09901 9.2998458,23.09901z M13.799777,19.59901C14.09976,20.699001,15.599737,21.199001,15.599737,21.199001L13.39982,21.898998z M13.899813,16.099012L13.999786,17.099012 7.8999038,17.699001 7.7998686,16.699003z M17.79874,10.400007L16.998764,11.399 6.2998915,12.099012 6.1999174,11.099012z M18.998734,5.6000047L18.998734,6.6000047 4.7999144,7.1000047 4.7999144,6.1000047z M25.098616,3.4999991C25.598608,4.9000082,26.798603,6.4999986,28.998581,6.9000078L29.098555,6.9000078 19.098707,19.199001 16.798756,19.398998 15.199781,17.898998 15.099745,15.699002z M20.398676,2.7000118L21.698643,5.6000047 20.798695,6.8000016 19.5987,4.1000052 2.0999435,4.2000113 7.5998598,26.999004 28.29858,23.199001 24.49865,14.799009 25.598608,13.699003 30.698505,24.699001 5.8999343,29.698999 0,2.8000026z M27.898562,0C32.198484,0.30000284,31.998535,3.4999993,31.998535,3.4999991L29.998566,5.9000078C26.598593,5.9999986,25.798618,2.4999993,25.798618,2.4999991z" />
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