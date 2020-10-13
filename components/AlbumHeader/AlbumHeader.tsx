import React from 'react';
import {View,Text,Image,TouchableOpacity} from "react-native";
import { Album } from '../../types';
import {styles} from './styles';


interface AlbumHeaderProps {
album:Album
}

export const AlbumHeader: React.FC<AlbumHeaderProps> = ({album}) => {
        return (
            <View style={styles.container}>
                <Image 
                source={{uri:album.imageUri}}
                style={styles.image}
                />
                <Text style={styles.text}>{album.name}</Text>
                <View style={styles.creatorContainer}>
                    <Text style={styles.creator}>By {album.by}</Text>
                    <Text style={styles.likes}>{album.numberOfLikes} 收藏</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>播放全部</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
}