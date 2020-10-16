import React,{useEffect} from 'react';
import { StyleSheet, View,FlatList, Text } from 'react-native';
import {AlbumCategory} from '../components/AlbumCategory/AlbumCategory'
import {useQuery} from '@apollo/client';
import {LIST_CATEGORIES} from '../src/listAlbumCategories'



export default function HomeScreen() {
  const {loading,data,error}= useQuery(LIST_CATEGORIES)

  if (loading) return (<View><Text>Loading...</Text></View>)
  if (error) return  (<View><Text>Error:</Text></View>)


  return (
  <View style={styles.container}>
    <FlatList
    data={data.albumCategories}
    renderItem={({item})=><AlbumCategory title={item.title}
    albums={item.albums}
   />}
   keyExtractor={item=>item.id}
  
    />
  
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

