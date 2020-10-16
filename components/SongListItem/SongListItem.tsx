import React, { useContext} from 'react'
import { Text, View,Image } from 'react-native';
import {styles} from "./styles";
import {Song} from '../../types';
import {AppContext} from "../../AppContext";
import { TouchableOpacity } from 'react-native';

interface SongListItemProps {
    song:Song
}

export const SongListItem: React.FC<SongListItemProps> = (props:SongListItemProps) => {
        const {song}=props;

        const {setSongId} = useContext(AppContext)

        const onPlay=()=>{
           setSongId(song.id)
        }

        return (
            <TouchableOpacity onPress={onPlay}>
            <View style={styles.container}>
                <Image source={{uri:song.imageUri}} style={styles.image}/>
                <View style={styles.rightContainer}>
                <Text style={styles.title}>{song.title.length>20 ?(song.title.slice(0,30)+"..."):(song.title)}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
}