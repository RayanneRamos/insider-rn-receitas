import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f9ff',
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },

  image: {
    height: 100,
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

  ingredientTitle: {
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

  instructionText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#fff',
    marginRight: 8,
  }
})