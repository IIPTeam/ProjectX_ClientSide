'use strict';  
import React, { Component } from 'react';  
import {  
  StyleSheet,  
  View,  
  Image,  
  Text,  
  TextInput,
  TouchableHighlight,  
  Animated,  
  Easing,  
  Dimensions,  
} from 'react-native';  
  
import TimerMixin from 'react-timer-mixin';  
  
const {width, height} = Dimensions.get('window');  
const navigatorH = 160; // navigator height  
const [aWidth, aHeight] = [330, 260];  
const [left, top] = [0, 0];  
const [middleLeft, middleTop] = [(width - aWidth) / 2, (height - aHeight) / 2];  
  
const styles = StyleSheet.create({
    container: {  
        position:"absolute",  
        width:width,  
        height:height,  
        left:left,  
        top:top,  
    },  
    mask: {  
        justifyContent:"center",  
        backgroundColor:"#383838",  
        opacity:0.8,  
        position:"absolute",  
        width:width,  
        height:height,  
        left:left,  
        top:top,  
    },  
    tip: {  
        width:aWidth,  
        height:aHeight,  
        left:middleLeft,  
        backgroundColor:"#fff",  
        alignItems:"center",  
        justifyContent:"space-between",  
    },  
    tipTitleView: {  
        height:60, 
        borderBottomWidth:1, 
        borderBottomColor:"#888", 
        flexDirection:'column',  
        alignItems:'center',
        flexDirection: 'column',
        justifyContent:'center',
        paddingLeft:12,  
        paddingRight:12,  
    },
    tipTitleText:{  
        color:"#00897b",  
        fontSize:18,  
    },
    tipContentView: {  
        width:aWidth,  
        height:200,  
        flexDirection:'column',  
        alignItems:'center',  
        justifyContent:'center',  
    },  
    tipInputBox: {  
        height:60,
        width:aWidth-40,
        borderWidth:1, 
        borderColor:"#00897b",   
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'center',
        paddingLeft:12,  
        paddingRight:12,
        marginBottom: 30,  
    },  
    tipText:{  
        color:"#00897b",  
        fontSize:18,
        textAlign:"left",  
    },
    userNameInput:{
        height:60,  
        width:aWidth-130,
        marginLeft: 10,  
    },  
    button: {  
        height: 45,
        width:aWidth-40,
        backgroundColor: '#00897b',  
        justifyContent: 'center',  
        // borderColor: '#e6454a',  
        //borderWidth: 1,  
        //borderRadius: 4,  
        //alignSelf: 'stretch',  
        //marginLeft: 10,  
        //marginRight: 10,  
    },  
    buttonText: {  
        color:"#fff",  
        fontSize:18,  
        textAlign:"center",  
    },  
    gap:{  
        height:1,  
        width:aWidth*0.8,  
        backgroundColor:'#383838',  
        opacity:0.8,  
    }
});
  
export default class PopSpan extends Component {  

    constructor(props) {  
        super(props); 
         
        this.state = {  
            offset: new Animated.Value(0),  
            opacity: new Animated.Value(0),  
            title: "",  
            inputBoxName: "",  
            buttonName: "",  
            hide:true,    
            staffId:"",    
        };
         
        this.parent = {}; 
    }  


    showPop (title:string,inputBoxName:string,buttonName:string,isCurrentpage:false,obj:Object) {  
        this.parent = obj; 
        this.parent.isCurrentpage = isCurrentpage;
        if(this.state.hide){  
              this.setState({
                staffId:this.parent.state.staffId, 
                title: title, 
                inputBoxName: inputBoxName, 
                buttonName: buttonName, 
                hide: false
            },this.showIn());  
        }  
    } 

    componentDidMount() {  
    }

    //显示动画  
    showIn () {  
        Animated.parallel([  
            Animated.timing(  
                this.state.opacity,  
                {  
                  easing: Easing.linear,  
                  duration: 500,  
                  toValue: 0.8,  
                }  
            ),  
            Animated.timing(  
                this.state.offset,  
                {  
                  easing: Easing.linear,  
                  duration: 500,  
                  toValue: 1,  
                }  
            )
        ]).start();
    }  
    
    //隐藏动画  
    exitOut(){  
        Animated.parallel([  
            Animated.timing(  
                this.state.opacity,  
                {  
                  easing: Easing.linear,  
                  duration: 500,  
                  toValue: 0.8,  
                }  
            ),  
            Animated.timing(  
                this.state.offset,  
                {  
                  easing: Easing.linear,  
                  duration: 500,  
                  toValue: 1,  
                }  
            )
        ]).start();
        setTimeout(() => this.setState({hide: true}),500);  
    }  
    
    //取消  
    iknow(event) {  
        if(!this.state.hide){  
            this.exitOut();  
        }  
    }  
    
    //选择  
    sendRequest(messageData) {  
        //console.log(msg);  
        if(!this.state.hide){  
            this.exitOut();
            if(!this.parent.isCurrentpage){
                this.parent._gotoModifyPswPage();
            }
            // this.parent.setState({staffId:this.parent.staffId});  
        }
    }
  
    render() {  
        if(this.state.hide){  
            return (<View/>);
        } else {  
            return (  
            <View style={styles.container}>
                <Animated.View style={ styles.mask }>
                    <Text></Text>
                </Animated.View>

                <Animated.View
                    style={[
                        styles.tip , 
                        {transform: [{  
                            translateY: this.state.offset.interpolate({  
                                inputRange: [0, 1],  
                                outputRange: [height, navigatorH]  
                            }),  
                        }]}
                    ]}
                >
                    <View style={styles.tipTitleView}>
                        <Text style={styles.tipTitleText} onPress={this.iknow.bind(this)}>{this.state.title}</Text>
                    </View>


                    <View style={styles.tipContentView}>
                        <View style={styles.tipInputBox}>                        
                            <Text style={styles.tipText}>{this.state.inputBoxName}</Text>
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
                        <TouchableHighlight 
                            style={styles.button} 
                            underlayColor='#f0f0f0' 
                            onPress={this.sendRequest.bind(this,this.state.staffId)}
                        >
                            <Text style={styles.buttonText} >{this.state.buttonName}</Text>
                        </TouchableHighlight>
                    </View>

                </Animated.View>
            </View>
            );
        }
    } 
}  