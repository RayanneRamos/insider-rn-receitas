import 'react-native-gesture-handler'
import { View, Text, StyleSheet } from 'react-native'
import { Routes } from './src/routes'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    heigh: 400,
  },

  title: {
    fontSize: 24,
    marginTop: 100,
  }
})