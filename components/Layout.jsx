import { View } from 'react-native'
import Header from './Header/Header'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
        <Header/>
        { children }
    </>
  )
}

export default Layout