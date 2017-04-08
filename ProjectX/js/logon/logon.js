import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import ModifyPsw from "./modifyPsw";
import HomePage from '../homePage/homePage';
import {CommonStyle} from '../theme/common-style';
import Toast from 'react-native-easy-toast';

export default class Logon extends Component {
    constructor(props){
        super(props);
        this.state = {password:'',
                     staffId: ''
                    };
    }
    _pressButtoon(){
        const {navigator} = this.props;
        if (navigator) {
            Alert.alert(
                'Submit successfully',
                'alertMessage',
                [
                  {text: 'OK', onPress: () => this._gotoHomePage(this)}
                ]
            );
           /* navigator.push({
                name:'ModifyPswPswPageComponent',
                component:ModifyPsw,
            })*/
        }
    }
    _gotoHomePage(){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                    name:'ModifyPswPswPageComponent',
                    component:ModifyPsw,
            })
        }
    }
    _validateData(value, type){
        var flag = true;
        const {navigator} = this.props;
        if(value&&value!=undefined){
            var valueLength=value.length;
            if(type=="si"){
                if(valueLength&&valueLength!=10){
                    flag = false;  
                    this.refs.toast.show(valueLength + ' bit staffId',500); 
                }
            }
            if(type=="pw"){
                if(valueLength&&valueLength<6||valueLength>12) {
                    flag = false;
                    this.refs.toast.show(valueLength + ' bit password',500);
                }
            }   
        }
        
        return flag;
    }
    _login(){
        const {navigator} = this.props;
        if (!this.state.staffId||!this.state.password) {
            this.refs.toast.show('fill in the staff id or password',500);      
        }else{
  
            
            if(this._validateData(this.state.staffId,'si')&&this._validateData(this.state.password,'pw')){
               // this.sendAjax();
                if (navigator) {
                    navigator.push({
                        name:'HomePageComponent',
                        component:HomePage,
                    })
                }
            }
            
        }
        
    }
    sendAjax(){
        fetch(url,{
            method:"POST",
            mode:"cors",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body:'userName=aaa&password=bbb'
        }).then(function(res){
            if(res.ok){
                res.jason().then(function(jason){
                    console.info(jason);
                    Alert.alert("提示","请求成功");
                });
            }else{
                Alert.alert("提示","请求失败");
            }
        }).catch(function(e){
            Alert.alert("提示","系统错误");
        });
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
    },
    tostInfo: {
        backgroundColor:'#000'
    }
});