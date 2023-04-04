import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

export function Details() {
  const route = useRoute()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : 'Detalhes da receita',
      headerRight: () => (
        <Pressable onPress={() => console.log('Testando')}>
          <Entypo 
            name='heart' 
            size={28} 
            color='#ff4141' 
          />
        </Pressable>
      )
    })
  }, [route.params?.data, navigation])
  
  return (
    <View style={styles.container}>
      <Text>Página Details</Text>
      <Text>{route.params?.data.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green'
  },
})