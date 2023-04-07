import { Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { WebView } from 'react-native-webview'
import { styles } from './styles'

export function Video({ handleCloseVideo, videoUrl }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleCloseVideo}>
        <Feather name='arrow-left' size={24} color='#fff' />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
      <WebView 
        style={styles.contentView}
        source={{ uri: videoUrl }}
      />
    </SafeAreaView>
  )
}