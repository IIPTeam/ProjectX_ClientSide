import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

export default class OTApplyMain extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_view}>
                    <Text style={styles.title_text}>
                        OT Apply
                    </Text>
                </View>
                <ScrollView  ref={(scrollView) => { _scrollView = scrollView; }}>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                Apply info
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                Staff Name:            郭宝刚
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                Staff ID:               43845076
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                Project
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                Date
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                Time
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                Duration
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                Reason
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                Approval
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                Supervisor
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                RM
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                羽毛球
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                火车票
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                视频
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                羽毛球
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                火车票
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                视频
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                羽毛球
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                火车票
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                视频
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                羽毛球
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Text style={styles.rectangle_text} >
                                火车票
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <TouchableHighlight
                    onPress={() => {

                    }}
                    activeOpacity={0.7}
                    style={styles.button}
                    underlayColor='#008080'
                >
                    <Text style={styles.logonButtonText}>Submit</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title_view:{
        flexDirection:'row',
        height:52,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#00897b',
    },
    title_text:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    },
    three_image_view:{
        paddingTop: 15,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'white',
    },
    vertical_view:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        paddingBottom:15,
    },
    top_text:{
        marginTop:5,
        color:'black',
        fontSize:16,
        textAlign:'center'
    },
    rectangle_view:{
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:15,
        paddingRight:15,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'white',
        borderBottomColor:'#dedfe0',
        borderBottomWidth:1,
    },
    rectangle_text:{
        color:'black',
        fontSize:16,
        textAlign:'center',
        paddingLeft:8,
    },
    button: {
        marginTop: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00897b',
        height:52
    },
    logonButtonText: {
        fontSize: 20,
        color: 'white'
    },
});