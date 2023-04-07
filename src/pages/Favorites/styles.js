import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f9ff',
    flex: 1,
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 36,
  },

  title: {
    fontSize: 18,
    marginTop: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },

  notFavorites: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 30,
    paddingTop: 50,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 20,
    textAlign: 'center',
  },
});