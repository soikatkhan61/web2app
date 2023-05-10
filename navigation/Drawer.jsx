import React, { useRef, useState } from 'react';

import { StyleSheet, Image, Text, View ,TouchableOpacity} from 'react-native';
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import profile from '../assets/profile.png';
import TabButton from '../components/Button/TabButton';


import search from '../assets/search.png';
import notifications from '../assets/bell.png';
import settings from '../assets/settings.png';
import home from '../assets/home.png';

const Drawer = ({onUrlChange}) => {

    const [currentTab, setCurrentTab] = useState("Home");
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={profile}
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 50,
                        marginTop: 20,
                        alignSelf: 'center',
                    }}
                />
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                        marginTop: 10
                    }}
                >
                    Jenna Ezarik
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                        marginTop: 30,
                        width: '80%'
                    }}
                />
            </View>

            <View style={{ flexGrow: 1, marginTop: 40 }}>
                <TabButton
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    title="Webview Apps"
                    image={home}
                    onUrlChange={onUrlChange}
                    url={'https://xtensoft.com/webview-apps'}
                />
                <TabButton
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    title="linkedin"
                    image={search}
                    onUrlChange={onUrlChange}
                    url={'www.linkedin.com'}
                />
                <TabButton
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    title="instagram"
                    image={notifications}
                    onUrlChange={onUrlChange}
                    url={'www.instagram.com'}
                />
                <TabButton
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    title="youtube"
                    image={settings}
                    onUrlChange={onUrlChange}
                    url={'www.youtube.com'}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '50%',
        paddingHorizontal: 15,
     
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
});

export default Drawer