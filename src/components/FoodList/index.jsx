import { View, Text, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

export function FoodList({ data }) {
  const navigation = useNavigation()
  
  function handleNavigate() {
    navigation.navigate('Details', { data: data })
  }

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={handleNavigate}>
      <Image 
        source={{ uri: data.cover }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.total_ingredients} ingredientes | {data.time} minutos</Text>
      </View>
      <LinearGradient 
        style={styles.gradient}
        colors={[ 'transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)' ]}
      />
    </TouchableOpacity>
  )
}