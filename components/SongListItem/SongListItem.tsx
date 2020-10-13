import React from 'react'
import { Text, View,Image } from 'react-native';
import {styles} from "./styles";
import {Song} from '../../types'

interface SongListItemProps {
    song:Song
}

export const SongListItem: React.FC<SongListItemProps> = ({song}) => {
        return (
            <View style={styles.container}>
                <Image source={{uri:song.imageUri}} style={styles.image}/>
                <View style={styles.rightContainer}>
                <Text style={styles.title}>{song.title.length>20 ?(song.title.slice(0,30)+"..."):(song.title)}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
        );
}