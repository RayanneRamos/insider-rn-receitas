import { View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Logo } from '../../components/Logo'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { FoodList } from '../../components/FoodList'
import { useNavigation } from '@react-navigation/native'
import { Text as MotiText } from 'moti'
import { styles } from './styles'

export function Home() {
  const [ inputValue, setInputValue ] = useState('')
  const [ foods, setFoods ] = useState([])
  const navigation = useNavigation()

  function handleSearch() {
    if(!inputValue) {
      return 
    }

    let input = inputValue
    setInputValue('')
    navigation.navigate('Search', { name: input })
  }

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get('/foods')
      setFoods(response.data)
    }

    fetchApi()
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <MotiText 
        style={styles.title} 
        from={{ 
          opacity: 0, 
          translateY: 15 
        }} 
        animate={{ 
          opacity: 1, 
          translateY: 0 
        }}
        transition={{ 
          delay: 100, 
          type: 'timing', 
          duration: 650 
        }}
      >
        Encontre a receita 
      </MotiText>
      <MotiText 
        style={styles.title}
        from={{ 
          opacity: 0, 
          translateY: 18 
        }} 
        animate={{ 
          opacity: 1, 
          translateY: 0 
        }}
        transition={{ 
          delay: 200, 
          type: 'timing', 
          duration: 850 
        }}
      >
        que combina com você
      </MotiText>
      <View style={styles.form}>
        <TextInput 
          placeholder='Digite o nome da comida...'
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name='search' size={28} color='#4cbe6c' />
        </TouchableOpacity>
      </View>
      <FlatList 
        data={foods}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}