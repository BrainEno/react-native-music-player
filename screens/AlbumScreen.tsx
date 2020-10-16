import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View,FlatList,Text} from 'react-native'
import albumDetails from '../data/albumDetails'
import {SongListItem} from '../components/SongListItem/SongListItem'
import { AlbumHeader } from '../components/AlbumHeader/AlbumHeader';
import {GET_ALBUM} from '../src/getAlbum'
import { useQuery } from '@apollo/client';


interface AlbumScreenProps {

}



export const AlbumScreen: React.FC<AlbumScreenProps> = () => {
    const route=useRoute();
    const albumId = route.params?.id;
    const {data,loading,error}=useQuery(GET_ALBUM,{variables:{id:albumId}});

    if (loading) return (<View><Text>Loading...</Text></View>)
    if (error) return  (<View><Text>Error:${error}</Text></View>)
          
        return (
            <View>
                <FlatList
                data={data.album.songs}
                renderItem={({item})=><SongListItem song={item}/>}
                keyExtractor={item=>item.id}
                ListHeaderComponent={()=><AlbumHeader album={data.album}/>}
                />
            </View>
        );
}