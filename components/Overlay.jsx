import React, { useRef, useState } from 'react';
import {Animated, View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Overlay = ({showMenu,setShowMenu,scaleValue,offsetValue}) => {
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    const handlePress = () =>{
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
    <TouchableOpacity onPress={handlePress} style={styles.overlay}>
         <LinearGradient
        // Background Linear Gradient
        colors={['rgba(240,240,240,0.6)','rgba(240,240,240,0.6)']}
        start={{ x: 0, y: 0}}
        end={{x: 0.1, y: 1}}
        style={styles.overlay}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 45,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex:2,
  }
});

export default Overlay;
