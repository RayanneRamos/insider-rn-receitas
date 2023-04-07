import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { getFavorites } from '../../utils/storage';
import { useIsFocused } from '@react-navigation/native';
import { FoodList } from '../../components/FoodList';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

export function Favorites() {
  const [ receipes, setReceipes ] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getReceipes() {
      const result = await getFavorites('@appreceitas');

      if(isActive) {
        setReceipes(result);
      }
    }

    if(isActive) {
      getReceipes();
    }

    return () => {
      isActive = false;
    }
  }, [isFocused]);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Receitas favoritas</Text>
      { receipes.length === 0 && (
        <View style={styles.notFavorites}>
          <Feather name='star' size={50} color='#000' />
          <Text style={styles.subtitle}>Você ainda não tem nenhuma receita salva. Entre em alguma e aperte no coração.</Text>
        </View>
      ) }
      <FlatList 
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 14 }}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
      />
    </SafeAreaView>
  );
}