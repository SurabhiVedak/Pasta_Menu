import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { EvilIcons, AntDesign } from '@expo/vector-icons'; 

<Text> Pasta</Text>
export default function Header(){
    return(
        <View style={styles.header}>
            
            <AntDesign name="arrowleft" size={24} color="black" />
            <Text style={styles.headerTitle}>Pasta</Text>
            <EvilIcons name="search" size={24} color="black" /> 

        
       </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent: "space-evenly",
        alignItems:'center',
        height:80,
        width:'100%',
        backgroundColor: '#fff',
        marginTop:5
    },
    headerTitle:{
        fontSize:20,
        fontStyle:'italic',
        color: 'black',
        letterSpacing:1,
     },

 
})