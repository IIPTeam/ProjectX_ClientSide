'use strict';
var React = require('react');
var ReactNative = require('react-native');
var {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView
} = ReactNative;

import Echarts from '@remobile/react-native-echarts';

module.exports = React.createClass({
    getInitialState() {
        return {
            data: {
                male: 1000,
                female: 5000,
            },
        };
    },
    render() {
        const {male, female} = this.state.data;
        const malePercentage = Math.round(male*100/(male+female));
        const femalePercentage = 100-malePercentage;
        const sections = [
            {name: '男', count: 1000, percentage: malePercentage+'%', color: '#C23531'},
            {name: '女', count: 5000, percentage: femalePercentage+'%', color: '#2F4554'},
        ];
        const option = {
            series: [{
                name: '性别比例',
                type: 'pie',
                radius : '70%',
                data: [
                    {value:male, name:'男'},
                    {value:female, name:'女' },
                ]
            }]
        };
        return (
            <ScrollView style={styles.container}>
                <Echarts option={option} height={300}/>
                <View style={styles.totalView}>
                    <Text style={styles.littleView}>
                        总人数：{6000}
                    </Text>
                </View>
                <View style={styles.bottomView}>
                    {
                        sections.map((item, i)=>{
                            return(
                                <View key={i} style={styles.itemView}>
                                    <View style={styles.leftView}>
                                        <Text style={[styles.littleView, {marginLeft:3,width: 20}]}>
                                            {i+1}
                                        </Text>
                                        <View style={[styles.squirView, {backgroundColor: item.color}]}/>
                                        <Text style={styles.littleView}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <Text style={styles.littleView}>
                                        {item.percentage}
                                    </Text>
                                    <Text style={[styles.littleView, {marginRight: 39}]}>
                                        {item.count}
                                    </Text>
                                    <View style={styles.lineView}/>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50,
        backgroundColor: '#FFFFFF',
    },
    totalView: {
        height: 50,
        width: 300,
        alignItems: 'center',
    },
    bottomView: {
        height: 120,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemView: {
        height: 37,
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftView: {
        height: 37,
        marginLeft: 39,
        flexDirection: 'row',
        alignItems: 'center',
    },
    squirView: {
        height: 25,
        width: 25,
        marginRight: 10,
    },
    littleView: {
        fontSize: 12,
        color: '#888888',
    },
    lineView: {
        position: 'absolute',
        height: 1,
        width: 300-78,
        bottom: 0,
        left: 39,
        backgroundColor: '#aab9ba',
    },
});