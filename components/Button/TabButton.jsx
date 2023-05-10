import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';

const TabButton = ({currentTab, setCurrentTab, title, image,onUrlChange,url}) => {
    const handleUrlChange = () =>{
        setCurrentTab(title)
        onUrlChange(url);
    }
  return (
    <TouchableOpacity onPress={() => {
        handleUrlChange()
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15
        }}>
  
          <Image source={image} style={{
            width: 25, height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white"
          }}></Image>
  
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white"
          }}>{title}</Text>
  
        </View>
      </TouchableOpacity>
  )
}

export default TabButton