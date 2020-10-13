import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View,FlatList} from 'react-native'
import albumDetails from '../data/albumDetails'
import {SongListItem} from '../components/SongListItem/SongListItem'
import { AlbumHeader } from '../components/AlbumHeader/AlbumHeader';


interface AlbumScreenProps {

}



export const AlbumScreen: React.FC<AlbumScreenProps> = () => {
    
    const route=useRoute();

    useEffect(()=>{
    },[])
        return (
            <View>
                <FlatList
                data={albumDetails.songs}
                renderItem={({item})=><SongListItem song={item}/>}
                keyExtractor={item=>item.id}
                ListHeaderComponent={()=><AlbumHeader album={albumDetails}/>}
                />
            </View>
        );
}