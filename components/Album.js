import { View, Text, StyleSheet } from 'react-native';

export function Album({ albumName, year, musics }) {

  return (
    <View>
      <Text style={[ styles.albumName, styles.bold ]}>{albumName} {year}</Text>
      <Text style={styles.musics}>{musics} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  albumName: {
    fontWeight: 'bold',
    marginLeft:10,
    marginTop:10,
  },

  musics: {
    marginLeft: 10
    
  }
})