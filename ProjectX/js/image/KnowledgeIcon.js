import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
	Text,
	View,
    StyleSheet
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

export default class KnowledgeIcon extends Component {
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
							<Path fill="#00897b" d="M1.2200317,12.835196C1.8939819,12.835196 2.4390259,13.381226 2.4390259,14.05424 2.4390259,14.728232 1.8939819,15.275238 1.2200317,15.275238 0.54602051,15.275238 0,14.728232 0,14.05424 0,13.381226 0.54602051,12.835196 1.2200317,12.835196z M25.612,8.4211244L25.728027,19.746317C25.728027,19.746317 24.450012,23.114384 17.596985,22.998384 17.596985,22.998384 9.117981,23.75337 6.5629883,19.977308L6.6220093,8.8861589 16.14502,12.602191z M0.75500488,5.5170865L1.5679932,5.5170865 1.5679932,12.835196 1.2200317,12.835196 0.75500488,12.835196z M15.856018,0L32,3.3680653 16.088013,10.337171 0.75500488,4.2400579z" />
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