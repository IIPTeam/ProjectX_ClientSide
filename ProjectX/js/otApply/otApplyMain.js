import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    TouchableWithoutFeedback,
    BackAndroid
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Platform from 'Platform';
import PickerPage from '../common/pickerPage';

export default class OTApplyMain extends Component {
    constructor(props) {
        super(props)
        var dateFormat = require('dateformat');
        var now = new Date();
        var nowDate = dateFormat(now, "yyyy-mm-dd");
        this.state = {
            startTime: nowDate + " 08:00",
            endTime: nowDate + " 16:00",
            project: ""
        }
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const { navigator } = this.props;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：'+routers.length);
        if (routers.length > 1) {
            navigator.pop();
            return true;//接管默认行为
        }
        return false;//默认行为
    };

    _pickProject=()=> {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'pickerPage',
                component: PickerPage,
                params: {
                    options: [{
                        "value": "CMB",
                        "label": "CMB"
                    },{
                        "value": "SMP",
                        "label": "SMP"
                    },{
                        "value": "IIP",
                        "label": "IIP"
                    }],
                    selectedOption: this.state.project,
                    getSelect: (option) => {
                        this.setState({
                            project: option
                        })
                    }
                }
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_view}>
                    <Text style={styles.title_text}>
                        OT Apply
                    </Text>
                </View>
                <ScrollView ref={(scrollView) => {
                    _scrollView = scrollView;
                }}>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangle_text}>
                                Apply info
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={styles.rectangle_sub_view}>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_left]}>
                                Staff Name:
                            </Text>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_right]}>
                                郭宝刚
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={styles.rectangle_sub_view}>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_left]}>
                                Staff ID:
                            </Text>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_right]}>
                                43845076
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={styles.rectangle_sub_view}>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_left]}>
                                Project:
                            </Text>
                            <TouchableWithoutFeedback onPress={this._pickProject.bind(this)}>
                                <View style={styles.flex}>
                                    <Text style={[styles.rectangle_text, styles.rectangle_text_right]}>
                                        {this.state.project || 'Please select'}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={[styles.rectangle_view,{
                        paddingTop: 0,
                        paddingBottom: 0,
                    }]}>
                        <View style={styles.rectangle_sub_view}>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_left]}>
                                Start Time
                            </Text>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                            }}>
                                <DatePicker
                                    style={{width: 200}}
                                    date={this.state.startTime}
                                    mode="datetime"
                                    androidMode="spinner"
                                    placeholder="select date"
                                    format="YYYY-MM-DD HH:mm"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    showIcon={false}
                                    customStyles={{
                                        dateInput: {
                                            borderWidth: 0,
                                            justifyContent: 'center',
                                            alignItems: 'flex-end'
                                        }
                                    }}
                                    onDateChange={(startTime) => {
                                        this.setState({startTime: startTime})
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.rectangle_view,{
                        paddingTop: 0,
                        paddingBottom: 0,
                    }]}>
                        <View style={styles.rectangle_sub_view}>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_left]}>
                                End Time
                            </Text>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                            }}>
                                <DatePicker
                                    style={{width: 200}}
                                    date={this.state.endTime}
                                    mode="datetime"
                                    androidMode="spinner"
                                    placeholder="select date"
                                    format="YYYY-MM-DD HH:mm"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    showIcon={false}
                                    customStyles={{
                                        dateInput: {
                                            borderWidth: 0,
                                            justifyContent: 'center',
                                            alignItems: 'flex-end'
                                        }
                                    }}
                                    onDateChange={(endTime) => {
                                        this.setState({endTime: endTime})
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangle_text}>
                                Time
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangle_text}>
                                Duration
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangle_text}>
                                Reason
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangle_text}>
                                Approval
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangle_text}>
                                Supervisor
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangle_text}>
                                RM
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
    flex:{
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    title_view: {
        flexDirection: 'row',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00897b',
    },
    title_text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    three_image_view: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    vertical_view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 15,
    },
    top_text: {
        marginTop: 5,
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },
    rectangle_view: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#dedfe0',
        borderBottomWidth: 1
    },
    rectangle_sub_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rectangle_text: {
        color: 'black',
        fontSize: 16,
        paddingLeft: 8,
    },
    rectangle_text_left: {
        textAlign: 'left',
    },
    rectangle_text_right: {
        flex: 1,
        textAlign: 'right',
    },
    button: {
        marginTop: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00897b',
        height: 52
    },
    logonButtonText: {
        fontSize: 20,
        color: 'white'
    },
});