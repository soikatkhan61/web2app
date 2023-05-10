import React, { useRef, useState } from 'react';
import { Animated, Image, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
// Menu
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import search from '../assets/search.png';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const TopBar = ({ showMenu, setShowMenu, scaleValue, offsetValue }) => {
    const closeButtonOffset = useRef(new Animated.Value(0)).current;
    const handlePress = () => {
        Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.88,
            duration: 150,
            useNativeDriver: true
        })
            .start()

        Animated.timing(offsetValue, {
            // YOur Random Value...
            toValue: showMenu ? 0 : 230,
            duration: 150,
            useNativeDriver: true
        })
            .start()

        Animated.timing(closeButtonOffset, {
            // YOur Random Value...
            toValue: !showMenu ? -30 : 0,
            duration: 150,
            useNativeDriver: true
        })
            .start()

        setShowMenu(!showMenu);
    }
    return (

        <View
            style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <TouchableOpacity
                style={{
                    backgroundColor: "white",
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                }}
                onPress={() => { handlePress() }} >
                <Image source={showMenu ? close : menu} style={{
                    width: 20,
                    height: 20,

                    tintColor: 'black'
                }}></Image>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => { /* Do something */ }}
                style={{
                    backgroundColor: "white",
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                }}
            >
                <Image source={search} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>

        </View>


    )
}

export default TopBar