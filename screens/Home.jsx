import { Animated, StyleSheet, View, RefreshControl, ScrollView } from 'react-native';
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import Drawer from '../navigation/Drawer';
import TopBar from '../navigation/TopBar';
import React, { useRef, useState,useEffect } from 'react';
import Overlay from '../components/Overlay';
import { BannerAd, BannerAdSize, TestIds,RewardedAd, RewardedAdEventType, } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';


const Home = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const [currentUrl, setCurrentUrl] = useState('https://xtensoft.com/');
    const webviewRef = useRef();
    const [refreshing, setRefreshing] = React.useState(false);
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        webviewRef.current.reload();
        
    }, []);

    const handleWebViewLoad = () => {
        setIsLoading(false);
        setRefreshing(false);
      };

    const handleUrlChange = (url) => {
        setIsLoading(true);
        setCurrentUrl(url);
    };

    const handleWebViewNavigationStateChange = (navState) => {
        if (navState.url !== currentUrl) {
            setIsLoading(true);
            setCurrentUrl(navState.url);
        }
    };
    const [refresherEnabled, setEnableRefresher] = useState(true);

    const handleScroll = (event) => {
    const yOffset = Number(event.nativeEvent.contentOffset.y)
    if (yOffset === 0){
      setEnableRefresher(true)
    }else{
      setEnableRefresher(false)
    }
      };
   
    return (
        <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}
        refreshControl={
            <RefreshControl refreshing={refreshing} enabled={refresherEnabled} onRefresh={onRefresh} />
          }
        >
            {isLoading ? (
                <View style={styles.loadingOverlay}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            ) : null}
            <Drawer onUrlChange={handleUrlChange} />

            <Animated.View style={{
                flexGrow: 1,
                backgroundColor: 'white',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: showMenu ? 15 : 0,
                transform: [
                    { scale: scaleValue },
                    { translateX: offsetValue }
                ]
            }}>
                <TopBar showMenu={showMenu} setShowMenu={setShowMenu} offsetValue={offsetValue} scaleValue={scaleValue} />
                {showMenu && <Overlay showMenu={showMenu} setShowMenu={setShowMenu} offsetValue={offsetValue} scaleValue={scaleValue} />}
                <WebView
                    source={{ uri: currentUrl }}
                    style={{ flex: 1, zIndex: 2 }}
                    onNavigationStateChange={handleWebViewNavigationStateChange}
                    onLoad={() => handleWebViewLoad()}
                    ref={webviewRef}
                    onScroll={handleScroll}
                />
            </Animated.View>
            <BannerAd
                style={styles.bottomBanner}
                unitId={adUnitId}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5359D1',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
    },
    loadingText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomBanner: {
        position: "absolute",
        bottom: 0,
        zIndex: 1
    }
});

export default Home
