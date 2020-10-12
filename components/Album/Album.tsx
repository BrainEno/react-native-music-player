import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

interface AlbumProps {
    album:{
        id:string;
        imageUri:string;
        artistHeadline:string
    }
}

const Album: React.FC<AlbumProps> = ({album}) => {
return (
    <View style={styles.container}>
    <Image source={{uri:album.imageUri}} style={styles.image}/>
        <Text style={styles.text}>{album.artistHeadline}</Text>
    </View>
        );
}




export default Album;