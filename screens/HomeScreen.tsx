import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Album from '../components/Album/Album';


const album={
  id:"1",
  imageUri:"https://i.scdn.co/image/ab67616d00001e02714cbbc918bd85ce00d34bef",
  artistHeadline:"Double Heads: Legendary Live, Yaneura Shibuya, Tokyo, 1980-1981"
}

export default function HomeScreen() {
  return (
  <View style={styles.container}>
  <Album album={album}  />
  </View>
  
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  }
})

