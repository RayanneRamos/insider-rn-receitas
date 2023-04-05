import { useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView, Image, Modal, Share } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo, AntDesign, Feather } from '@expo/vector-icons'
import { Ingredients } from '../../components/Ingredients'
import { Instructions } from '../../components/Instructions'
import { Video } from '../../components/Video'
import { isFavorite, saveFavorite, removeItem } from '../../utils/storage'

export function Details() {
  const route = useRoute()
  const navigation = useNavigation()
  const [ isOpenModal, setIsOpenModal ] = useState(false)
  const [ favorite, setFavorite ] = useState(false)

  useLayoutEffect(() => {
    async function getStatusFavorites() {
      const receipeFavorite = await isFavorite(route.params?.data)
      setFavorite(receipeFavorite)
    }

    getStatusFavorites()
    
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : 'Detalhes da receita',
      headerRight: () => (
        <Pressable onPress={() => handleFavoriteReceipe(route.params?.data)}>
          { favorite ? (
            <Entypo 
              name='heart' 
              size={28} 
              color='#ff4141' 
            />
          ) : (
            <Entypo 
              name='heart-outlined' 
              size={28} 
              color='#ff4141' 
            />
          ) }
        </Pressable>
      )
    })
  }, [route.params?.data, navigation, favorite])

  function handleOpenVideo() {
    setIsOpenModal(true);
  }

  async function handleFavoriteReceipe(receipe) {
    if(favorite) {
      await removeItem(receipe.id)
      setFavorite(false)
    } else {
      await saveFavorite('@appreceitas', receipe)
      setFavorite(true)
    }
  }

  async function shareReceipe() {
    try {
      await Share.share({
        url: 'https://www.github.com/RayanneRamos',
        message: `Receita: ${route.params?.data.name}\n Vi lá no App Receita Fácil, faça na sua casa também é super fácil de fazer`
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 14 }} style={styles.container} showsVerticalScrollIndicator={false}>
      <Pressable onPress={handleOpenVideo}>
        <View style={styles.playIcon}>
          <AntDesign 
            name='playcircleo' 
            size={48}
            color='#fafafa'
          />
        </View>
        <Image 
          source={{ uri: route.params?.data.cover }}
          style={styles.image}
        />
      </Pressable>
      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}>{route.params?.data.name}</Text>
          <Text style={styles.ingredientsText}>ingredientes ({route.params?.data.total_ingredients})</Text>
        </View>
        <Pressable onPress={shareReceipe}>
          <Feather 
            name='share-2'
            size={24}
            color='#121212'
          />
        </Pressable>
      </View>
      { route.params?.data.ingredients.map((item) => {
        return (
          <Ingredients key={item.id} data={item} />
        )
      }) }
      <View style={styles.instructionArea}>
        <Text style={styles.instructionsText}>Modo de preparo</Text>
        <Feather 
          name='arrow-down'
          size={24}
          color='#fff'
        />
      </View>
      { route.params?.data.instructions.map((item, index) => {
        return (
          <Instructions key={item.id} data={item} index={index} />
        )
      }) }

      <Modal visible={isOpenModal} animationType='slide'>
        <Video 
          handleCloseVideo={() => setIsOpenModal(false)}
          videoUrl={route.params?.data.video}
        />
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f9ff',
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },

  image: {
    height: 200,
    borderRadius: 14,
    width: '100%',
  },

  playIcon: {
    position: 'absolute',
    zIndex: 9,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  title: {
    fontSize: 18,
    marginTop: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },

  ingredientsTitle: {
    marginBottom: 14,
    fontSize: 16,
  },

  instructionArea: {
    backgroundColor: '#4cbe6c',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },

  instructionsText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#fff',
    marginRight: 8,
  },
})