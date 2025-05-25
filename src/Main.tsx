import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AuthNavigation from './navigation/AuthNavigation'
import AppNavigation from './navigation/AppNavigation'

const Main = () => {
    const [token, setToken] = useState()
  return (
    <>
        {!token ? <AuthNavigation /> : <AppNavigation />}
    </>
  )
}

export default Main