import React from 'react';
import { Image, Text, View,TouchableWithoutFeedback } from 'react-native';
import { Album } from "../../types";
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native'

export interface AlbumProps{
    album:Album;
}

const AlbumComponent: React.FC<AlbumProps> = ({album}) => {
    const navigation = useNavigation();

    const handlePress=()=>{
        navigation.navigate('AlbumScreen',{id:album.id})
    }
return (
    
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
        <Image source={{uri:album.imageUri}} style={styles.image}/>
        <Text style={styles.text}>{album.artistHeadline.length>20 ?(album.artistHeadline.slice(0,30)+"..."):(album.artistHeadline)}</Text>
        </View>
    </TouchableWithoutFeedback>
    
    );
}




export default AlbumComponent;