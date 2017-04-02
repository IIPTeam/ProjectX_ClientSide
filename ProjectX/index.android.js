/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import setup from './js/setup';

AppRegistry.registerComponent('ProjectX', () => setup);//整个react-native应用可以看作一个包裹整个项目的组件，而AppRegistry注册的组件作为RN应用的入口函数。
