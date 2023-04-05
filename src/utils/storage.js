import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getFavorites(key) {
  const favorites = await AsyncStorage.getItem(key)

  return JSON.parse(favorites) || []
}

