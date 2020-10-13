import React from 'react';
import { Text, View ,FlatList} from 'react-native';
import { Album } from '../../types';
import AlbumComponent from '../Album/Album'
import  styles  from './styles';

interface AlbumCategoryProps {
    title: string,
    albums:Album[]
}



export const AlbumCategory: React.FC<AlbumCategoryProps> = ({title,albums}) => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
              
                <FlatList
                data={albums}
                renderItem={({item})=><AlbumComponent album={item}/>}
                keyExtractor={(item)=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                />
            </View>
        );
}