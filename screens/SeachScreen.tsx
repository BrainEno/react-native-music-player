import React from 'react';
import { View,Text,TextInput,StyleSheet,FlatList } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';


interface SeachScreenProps {

}

export const SeachScreen: React.FC<SeachScreenProps> = ({}) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>检索</Text>
                <View style={styles.searchContainer}>
                    <EvilIcons name="search" size={30} style={{marginBottom:-3}}/>
                    <TextInput placeholder="输入音乐人、歌曲，或专辑" style={styles.textInput}/>
                   
                </View>    
            </View>
        );
}

const styles=StyleSheet.create({
container:{
    alignItems:"center",
    justifyContent:"center"
},
searchContainer:{
    flexDirection:"row",
    width:"84%",
    borderColor:"#737373",
    borderWidth:2,
    borderRadius:5,
    backgroundColor:"white",
    height:50,
    alignItems:"center",
    margin:25
},
text:{
    color:"white",
    fontSize:40
},
textInput:{
    borderColor:"#737373",
    flex:1,
    height:"100%"
}
})