import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import MainPage from './mainPage';
import Echarts from '../Test/echartsNew';
import Personal from '../personalPage/personalPage';
const {width} = Dimensions.get('window');

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            selectedTab:'home',//默认选中home
            userDetails:{}
        }
    }

    componentDidMount(){
        this.setState({
            userDetails:this.props.userDetails,
        });
    }

    render(){
        var settingView=(
            <View style={[styles.flex,styles.center,{backgroundColor: '#ffff0044'}]}>
                <Echarts></Echarts>
            </View>
        );
        return (
            <TabNavigator
                tabBarStyle={{ height: 60 }}
            >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页" //Tab文字
                    renderIcon={() => <Image style={styles.img} source={require('../image/menuIcon.jpg') }/>}//默认图标
                    renderSelectedIcon={() => <Image style={styles.img} source={require('../image/chinaSoftLogo.jpg') }/>}//选中图标
                    badgeText="9+"//消息数目
                    onPress={() => this.setState({ selectedTab: 'home' })}
                >
                    <MainPage homeProps={this.props}></MainPage>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'setting'}
                    title="设置"
                    renderIcon={() => <Image style={styles.img} source={require('../image/backIcon.png') }/>}
                    renderSelectedIcon={() => <Image style={styles.img} source={require('../image/chinaSoftLogo.jpg') }/>}
                    onPress={() => this.setState({ selectedTab: 'setting' })}
                >
                    {settingView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'personal'}
                    title="personal"
                    renderIcon={() => <Image style={styles.img} source={require('../image/personalPage/man.jpg') }/>}
                    renderSelectedIcon={() => <Image style={styles.img} source={require('../image/chinaSoftLogo.jpg') }/>}
                    onPress={() => this.setState({ selectedTab: 'personal' })}
                >
                    <Personal></Personal>
                </TabNavigator.Item>
            </TabNavigator>
      );
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    center:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    img: {
        width: 40,
        height: 33,
    },
    homeHeader:{
        alignItems: 'center',
        height:52,
        backgroundColor: '#00897b',
        justifyContent: 'center',
        marginBottom:5,
        width
    },
    FocusBorder:{
        flex:2,
    }
});