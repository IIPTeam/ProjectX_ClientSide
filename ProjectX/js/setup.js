/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Logon from './logon/logon';

export default class setup extends Component {
  render() {
    var defaultName = 'logonPage';
    var defaultComponment = Logon;
    return (
      <Navigator
        //指定了默认的页面，也就是启动app之后会看到的第一屏，需要两个参数，name跟component
        initialRoute={{ name:defaultName,component:defaultComponment}}
        configureScene={(route)=>{
            var conf = Navigator.SceneConfigs.HorizontalSwipeJump;
            conf.gestures = { pop: false };
            return conf;
        }}
        renderScene={(route, navigator) => {
            let Component = route.component;
            if(route.component){
                return <Component {...route.params} navigator={navigator} />
            }
        }}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
