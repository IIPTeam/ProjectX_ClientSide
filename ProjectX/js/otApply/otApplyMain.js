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
import InputArea from '../common/inputAreaPage';
import SearchPage from '../common/searchPage';

export default class OTApplyMain extends Component {
    constructor(props) {
        super(props)
        let dateFormat = require('dateformat');
        let now = new Date();
        let nowDate = dateFormat(now, "yyyy-mm-dd");
        this.state = {
            startTime: nowDate + " 08:00",
            endTime: nowDate + " 16:00",
            project: "",
            reason: "",
            Supervisor: "",
            rm: ""
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
                    title: 'Project',
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

    _pickReason=()=> {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'InputArea',
                component: InputArea,
                params: {
                    title: 'OT Reason',
                    selectedOption: this.state.reason,
                    getContent: (content) => {
                        this.setState({
                            reason: content
                        })
                    }
                }
            })
        }
    }

    _pickSupervisor=()=> {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'pickerPage',
                component: PickerPage,
                params: {
                    options: [{
                        "value": "Frank Wu",
                        "label": "Frank Wu"
                    },{
                        "value": "Darcy Yao",
                        "label": "Darcy Yao"
                    }],
                    title: 'Supervisor',
                    selectedOption: this.state.supervisor,
                    getSelect: (option) => {
                        this.setState({
                            supervisor: option
                        })
                    }
                }
            })
        }
    }

    _pickRM=()=> {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'searchPage',
                component: SearchPage,
                params: {
                    title: 'RM',
                    selectedOption: this.state.rm,
                    getSelect: (option) => {
                        this.setState({
                            rm: option
                        })
                    }
                }
            })
        }
    }

    submitOTApply=()=>{
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
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
                    <View style={[styles.rectangle_view,styles.sub_title_view]}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.sub_title_text}>
                                Apply info
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.rectangle_view,styles.first_rectangle_view]}>
                        <View style={styles.rectangle_sub_view}>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_left]}>
                                Staff Name:
                            </Text>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_right]}>
                                秦玉河
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={styles.rectangle_sub_view}>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_left]}>
                                Staff ID:
                            </Text>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_right]}>
                                66666
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
                            <Text style={[styles.rectangle_text, styles.rectangle_text_left]}>
                                Duration
                            </Text>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_right]}>
                                4h
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_left]}>
                                Reason
                            </Text>
                            <TouchableWithoutFeedback onPress={this._pickReason.bind(this)}>
                                <View style={styles.flex}>
                                    <Text style={[styles.rectangle_text, styles.rectangle_text_right]}>
                                        {this.state.reason || 'Please input'}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={[styles.rectangle_view,styles.sub_title_view]}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.sub_title_text}>
                                Approval
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.rectangle_view,styles.first_rectangle_view]}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_left]}>
                                Supervisor
                            </Text>
                            <TouchableWithoutFeedback onPress={this._pickSupervisor.bind(this)}>
                                <View style={styles.flex}>
                                    <Text style={[styles.rectangle_text, styles.rectangle_text_right]}>
                                        {this.state.supervisor || 'Please select'}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.rectangle_text, styles.rectangle_text_left]}>
                                RM
                            </Text>
                            <TouchableWithoutFeedback onPress={this._pickRM.bind(this)}>
                                <View style={styles.flex}>
                                    <Text style={[styles.rectangle_text, styles.rectangle_text_right]}>
                                        {this.state.rm || 'Please select'}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </ScrollView>
                <TouchableHighlight
                    onPress={() => {
                        this.submitOTApply();
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
    sub_title_view:{
        marginTop: 5,
        marginBottom: 5,
        borderColor: '#00897b',
        borderWidth: 1
    },
    sub_title_text:{
        color: '#00897b',
        fontSize: 18,
        paddingLeft: 8,
        fontStyle: 'italic'
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
        borderBottomColor: '#00897b',
        borderBottomWidth: 1,
        minHeight: 45
    },
    first_rectangle_view: {
        borderTopColor: '#00897b',
        borderTopWidth: 1
    },
    rectangle_sub_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rectangle_text: {        
        fontSize: 16,
        paddingLeft: 8,
    },
    rectangle_text_left: {
        textAlign: 'left',
        color: '#00897b',
    },
    rectangle_text_right: {
        flex: 1,
        textAlign: 'right',
        color: '#000000',
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