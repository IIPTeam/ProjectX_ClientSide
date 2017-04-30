/**
 * ViewUtils
 * @flow
 **/
'use strict'

import React  from 'react';
import {
    TouchableHighlight,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ViewUtils {
    static getMoreButton(callBack) {
        return <TouchableHighlight
            ref='moreMenuButton'
            underlayColor='transparent'
            style={{padding:5}}
            onPress={callBack}>
            <View style={{paddingRight:8}}>
                <Image
                    style={{width: 24, height: 24, marginLeft: 5}}
                    source={require('../image/ic_more_vert_white_48pt.png')}
                />
            </View>
        </TouchableHighlight>
    }

    static getLeftButton(callBack) {
        return <TouchableOpacity
            style={{padding:8}}
            onPress={callBack}>
            <Image
                style={{width: 26, height: 26,}}
                source={require('../image/ic_arrow_back_white_36pt.png')}/>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    setting_item_container: {
        backgroundColor: 'white',
        padding: 10, height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
})
