import React, { useContext, useEffect, useState, useRef} from 'react';
import { Image, Text, View,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {AntDesign,FontAwesome} from '@expo/vector-icons';
import { Sound } from 'expo-av/build/Audio';
import {AppContext} from "../../AppContext";
import {GET_SONG} from '../../src/getSong';
import {useLazyQuery1} from '../../src/useLazyQuery1';


export const PlayerWidget: React.FC = () => {
    const [sound,setSound]=useState<Sound|null>(null);
    const [isPlaying,setIsPlaying]=useState<boolean>(false);
    const [duration,setDuration]=useState<number|null>(null);
    const [position,setPosition]=useState<number|null>(null);
    const [song,setSong]=useState(null);
    const {songId} = useContext(AppContext);

const [runQuery,{loading,data}]=useLazyQuery1(GET_SONG,{
  onCompleted:()=>{
    console.log(data)
    setSong(data.song)
  }
})

useEffect(() => {
 const fetchSong= async ()=>{
   try{
     const data = await runQuery({id:songId})
   }catch(e){
     console.log(e);
   }
 }
 fetchSong();
}, [songId])





    const onPlaybackStatusUpdate=(status:any)=>{
      console.log(status)
       setIsPlaying(status.isPlaying);
       setDuration(status.durationMillis);
       setPosition(status.positionMillis)
    }

    const playCurrentSong = async()=>{
      if (sound){
        await sound.unloadAsync();
      }
        const {sound:newSound} = await Sound.createAsync(
            {uri:song.uri},
            {shouldPlay:isPlaying},
            onPlaybackStatusUpdate
        )
        setSound(newSound)
    }

    useEffect(()=>{
      if(song){
       //play the song
        playCurrentSong();
      }       
    },[song])

    const onPlayPausePress= async ()=>{
      if (!sound){
        return 
      }
      if (isPlaying){
        await sound.stopAsync();
      }else{
        await sound.playAsync();
      }
    }

    //获取歌曲进度
    const getProgress=()=>{
      if(sound===null || duration===null || position===null){
        return 0
      }
      return (position/duration)*100;
    }

      if (!song){
        return null;
      }
      
        return (
        <View style={styles.container}>
          <View style={[styles.progress,{width:`${getProgress()}%`}]}/>
          <View style={styles.row}>
              <Image source={{uri:song.imageUri}} style={styles.image}/>
              <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
        <Text style={styles.title}>{song.title.length>25?(song.title.slice(0,25)+"..."):(song.title)}</Text>
                  <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconsContainer}>
                  <AntDesign name="hearto" size={30} color={"white"}/>
                  <TouchableOpacity onPress={onPlayPausePress}>
                    <FontAwesome name={isPlaying?"pause":"play"} size={30} color={"white"}/>
                  </TouchableOpacity>
                </View>   
            </View>         
          </View>
        </View>
        );
}

