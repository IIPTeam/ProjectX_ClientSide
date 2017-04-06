import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedTab:'home'//默认选中home
        }
    }

    render(){
        var homeView=(
            <View style={[styles.flex,styles.center,{backgroundColor: '#ffff0044'}]}>
                <Text style={{fontSize: 30}}>首页</Text>
            </View>
        );
        var settingView=(
            <View style={[styles.flex,styles.center,{backgroundColor: '#ffff0044'}]}>
                <Text style={{fontSize: 30}}>设置</Text>
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
                    {homeView}
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
            </TabNavigator>
      );
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    img: {
        width: 40,
        height: 33,
    },
});