import React, { useEffect,useRef } from 'react';
import { Image, Text, View } from 'react-native';
import {styles} from './styles';
import {AntDesign,FontAwesome} from '@expo/vector-icons';
import {Audio} from 'expo-av';


const song={
    id: "1",
    uri:'https://music.ishkur.com/music/Grime%20-%20(2000)%20Francais%20James%20&%20DJ%20Face%20-%20Girls%20Play%20Too.mp3',
    imageUri:
      "https://i.scdn.co/image/ab67616d00001e02714cbbc918bd85ce00d34bef",
    title: "Garage",
    artist: "Reef",
  }


export const PlayerWidget: React.FC = () => {

    const onPlaybackStatusUpdate=(status)=>{
        console.log(status)
    }

    const playCurrentSong= async()=>{
        const {sound} = Audio.Sound.createAsync(
            {uri:song.uri},
            {shouldPlay:true},
            onPlaybackStatusUpdate
        )
    }

    useEffect(()=>{
        //play the song
        playCurrentSong();
    },[])
   
        return (
            <View style={styles.container}>
              <Image source={{uri:song.imageUri}} style={styles.image}/>
              <View style={styles.rightContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.title}>{song.title.length>25?(song.title.slice(0,25)+"..."):(song.title)}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconsContainer}>
                <AntDesign name="hearto" size={30} color={"white"}/>
                <FontAwesome name="play" size={30} color={"white"}/>
                </View>   
              </View>      
            </View>
        );
}