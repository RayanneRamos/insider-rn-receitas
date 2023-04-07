import { View, Text } from "react-native";
import { styles } from './styles'

export function Ingredients({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.name}>{data.amount}</Text>
    </View>
  )
}