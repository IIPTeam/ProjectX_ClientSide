import React, {Component} from 'react';
import {
    //AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';
import ModifyPsw from "./modifyPsw";
import PopSpan from "./popSpan";
import HomePage from '../homePage/homePage';
//import TextInputConpt from '../common/TextInputConpt';
import {CommonStyle} from '../theme/common-style';
import Toast from 'react-native-easy-toast';

const {width} = Dimensions.get('window');
const dismissKeyboard = require('dismissKeyboard');
import HudView from 'react-native-easy-hud';

export default class Logon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            staffId: '',
        };
    }

    _getNewStaffId(NewStaffId){
        this.state.staffId = NewStaffId;
    }
    _pressButtoon() {
        const {navigator} = this.props;
        if (navigator) {
            /*Alert.alert(
             'Submit successfully',
             'alertMessage',
             [
             {text: 'OK', onPress: () => this._gotoModifyPswPage(this)}
             ]
             );*/
            // this._gotoModifyPswPage(this);
            this._gotoPopSpanPage(this);
        }
    }

    _gotoModifyPswPage() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'ModifyPswPswPageComponent',
                component: ModifyPsw,
                params:{
                    staffId:this.state.staffId,
                }
            })
        }
    }

    _gotoPopSpanPage() {
        // var sendStaffId="";
        // if (this.state.staffId) {
        //     sendStaffId = this.state.staffId;
        // } else {
        //     sendStaffId = ""
        // }
        this.popSpan.showPop("Please input your Staff ID number", "Staff ID", "Send Verification Num", false, this);

    }

    _validateData(value, type) {
        let flag = true;
        const {navigator} = this.props;
        if (value && value !== undefined) {
            let valueLength = value.length;
            if (type === "si") {
                if (valueLength && valueLength !== 10) {
                    flag = false;
                    this.refs.toast.show(valueLength + ' bit staffId', 500);
                }
            }

            if (type === "pw") {
                if (valueLength && valueLength < 6 || valueLength > 12) {
                    flag = false;
                    this.refs.toast.show(valueLength + ' bit password', 500);
                }
            }
        }
        return flag;
    }

    _login() {
        const {navigator} = this.props;
        dismissKeyboard();
        if (!this.state.staffId || !this.state.password) {
            this.refs.toast.show('fill in the staff id or password ', 500);
        } else {
            if (this._validateData(this.state.staffId, 'si') && this._validateData(this.state.password, 'pw')) {

                this._hud.show();
                /*let url = 'http://192.168.1.103:8090/login/login';
                let options = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "user": {
                            "userName": this.state.staffId,
                            "password": this.state.password
                        }
                    })
                }

                CallService.fetchNetRepository(url, options).then((res) => {
                    this._hud.hide();
                    if (navigator && res) {
                        if (res) {
                            navigator.push({
                                name: 'HomePageComponent',
                                component: HomePage,
                                params: res
                            })
                            console.log(res);
                        } else {
                            Alert.alert("提示", "请求失败");
                        }
                    }
                }).then((error) => {
                    this._hud.hide();
                    console.log(error);
                }).catch((error) => {
                    this._hud.hide();
                    console.log(error);
                    if (navigator) {
                        navigator.push({
                            name: 'HomePageComponent',
                            component: HomePage,
                            params: {
                                userDetails: {
                                    chName: '吴海涛'
                                }
                            }
                        })
                    }
                })*/
                const {navigator} = this.props;
                if (navigator) {
                    navigator.push({
                        name: 'HomePageComponent',
                        component: HomePage,
                        params: {
                            userDetails: {
                                chName: '吴海涛'
                            }
                        }
                    })
                }
            }
        }
    }

    render() {
        return (
            <View style={[styles.container, CommonStyle.themeColor]}>
                <ScrollView
                    ref={(scrollView) => {
                        _scrollView = scrollView;
                    }}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    style={[styles.scrollView, styles.horizontalScrollView]}
                >
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
                                    testID="staffId"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText={(staffId) => this.setState({staffId})}
                                    value={this.state.staffId}
                                />
                            </View>
                            <View style={styles.inputBox}>
                                <Text style={styles.logonText}>Password:</Text>
                                <TextInput
                                    style={styles.userNameInput}
                                    testID="password"
                                    underlineColorAndroid="transparent"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.password}
                                />
                            </View>
                            <View>
                                <Text
                                    style={styles.forgotPswLink}
                                    onPress={this._pressButtoon.bind(this)}
                                >Forgot Password</Text>
                            </View>
                            <Toast ref="toast" style={styles.tostInfo} position='top'/>
                        </View>
                    </View>
                </ScrollView>

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


                <PopSpan ref={popSpan => this.popSpan = popSpan} position='top'/>
                <HudView
                    ref={(hud) => {
                        this._hud = hud
                    }}
                    delay={0}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        height: 300,
    },
    horizontalScrollView: {
        height: 120,
    },
    forgotPswLink: {
        textDecorationLine: 'underline',
        color: '#00987b',
        marginLeft: 10,
        fontSize: 12
    },
    companyLogo: {
        flex: 1,
        justifyContent: 'center',//（横轴）方向上位于容器的中心。
        flexDirection: 'column',//纵向排列
        alignItems: 'center'//（纵轴）方向上位于容器的中心
    },
    namePswCont: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width
    },
    logonButtonBox: {
        flexDirection: 'row',
        alignItems: 'flex-end',

    },
    logonButton: {
        //   backgroundColor:'#333',
        backgroundColor: '#00897b',
        //    backgroundColor:'#333',
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
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        //backgroundColor: '#ffffff',
    },
    logonText: {
        padding: 5,
        fontSize: 18,
        marginRight: 5,
        marginTop: 5,
        color: '#00897b',
        marginLeft: 5
    },
    toastInfo: {
        backgroundColor: '#000'
    }
});