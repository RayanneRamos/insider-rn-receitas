import { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { api } from '../../services/api'
import { FoodList } from '../../components/FoodList'
import { styles } from './styles'

export function Search() {
  const route = useRoute()
  const [ receipes, setReceipes ] = useState([])
  
  useEffect(() => {
    async function fetchReceipes() {
      const response = await api.get(`/foods?name_like=${route.params?.name}`)
    }

    fetchReceipes()
  }, [route.params?.name])

  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        ListEmptyComponent={() => <Text style={styles.text}>Não encontramos o que está buscando...</Text>}
      />
    </View>
  )
}