import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image
} from 'react-native';
import ForgotPsw from "./forgotPsw";
import HomePage from '../homePage/homePage';
import {CommonStyle} from '../theme/common-style';


export default class Logon extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
     _pressButtoon(){
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'ForgotPswPageComponent',
                component:ForgotPsw,
            })
        }
    }
    _login(){
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'HomePageComponent',
                component:HomePage,
            })
        }
    }
    render() {
        return (
            <View style={[styles.container,CommonStyle.themeColor]}>
                <View style={styles.inputContainer}>
                    <View style={styles.companyLogo}>
                        <Image
                            style={styles.logo}
                            source={require('../image/chinaSoftLogo.jpg')}
                        />
                    </View>
                    <View style={styles.namePswCont}>
                        <View style={styles.inputBox}>
                            <Text style={styles.logonText}>Staff ID:</Text>
                            <TextInput
                                style={styles.userNameInput}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.logonText}>Password:</Text>
                            <TextInput
                                style={styles.userNameInput}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                            />
                        </View>
                        <View>
                            <Text
                                style={styles.forgotPswLink}
                                onPress={this._pressButtoon.bind(this)}
                            >Forgot Password</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.logonButtonBox}>
                    <TouchableHighlight
                        onPress={() => {
                            this._login();
                        }}
                        activeOpacity={0.7}
                        style={styles.logonButton}
                        underlayColor='#008080'
                    >
                        <Text style={styles.logonButtonText}>Login</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    forgotPswLink:{
        textDecorationLine: 'underline',
        color:'#00987b',
        marginLeft:10,
        fontSize:12
    },
    companyLogo:{
        flex:1,
        justifyContent: 'center',//（横轴）方向上位于容器的中心。
        flexDirection: 'column',//纵向排列
        alignItems: 'center'//（纵轴）方向上位于容器的中心
    },
    namePswCont:{
        flex:1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logonButtonBox: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    logonButton: {
        backgroundColor: '#00897b',
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logonButtonText: {
        fontSize: 20,
        color: 'white'
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
    userNameInput: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        //backgroundColor: '#ffffff',
    },
    logonText: {
        padding: 5,
        fontSize: 18,
        marginRight: 5,
        marginTop: 5,
        color: '#00897b',
        marginLeft:5
    }
});