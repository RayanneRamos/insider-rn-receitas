import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f9ff',
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0e0e0e',
  },

  form: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ececec',
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    width: '90%',
    height: 54,
    maxWidth: '90%',
  },
})