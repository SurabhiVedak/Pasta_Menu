import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View , ImageBackground, Image} from 'react-native';
import Header from './shared/header';
import { Feather, AntDesign } from '@expo/vector-icons';
// import * as Font from './assets/Fonts';
// import { AppLoading } from 'expo';

// const getFonts= () =>Font.loadAsync({
//     'font-Regular' : require('./assets/Fonts/IBMPlexSerif-Regular.ttf'),
//     'font-BoldItalic': require('./assets/Fonts/IBMPlexSerif-BoldItalic.ttf')
//   })

export default function App() {
  // const [fontsLoaded, setFontsLoaded]= useState(false);
  // if(fontsLoaded){
  //   return(
  //     <App/>
  //   );
  // }
  // else{
  //  return(
  //   <AppLoading 
  //   startAsync={getFonts}
  //   onFinish= { () => setFontsLoaded(true)}
  //   />
  //  )
  // }
  
  const [pasta, setPasta]= useState([
    {name:'Spaghetti alle Vongole in Bianco',key:'1',date: '26 May 2016',likes:'989',share:'660',image:require('./assets/spaghetti-vongole-in-bianco.jpg')},
    {name:'Spaghetti Puttanesca',key:'2',date:'08 Feb 2016',likes:'989',share:'660',image:require('./assets/spaghetti-puttanesca.jpg')},
    {name:'Cacio e Pepe',key:'3',date:'12 Jun 2016',likes:'989',share:'660', image:require('./assets/Cacio-e-Pepejpg.jpg')},
    {name:'Spaghetti Aglio e Olio',key:'4',date:'10 Apr 2016',likes:'989',share:'660',image:require('./assets/spaghetti-aglio-olio-recipe.png')}
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Header/>
      </View>
      <View style={styles.itemContainer}>
        <FlatList
          data={pasta}
          renderItem={({item}) => ( 
            <TouchableOpacity>
              <View>
                <ImageBackground source= {item.image} style={styles.items} >
                  <View style= {styles.itemsBody}>
                      <Text style={styles.itemTitle}> {item.name}</Text>
                        <View style={styles.itemsText}>
                            <Text style={styles.textBottom}>{item.date}</Text> 
                            <View style={styles.inlineText}>
                                  <Feather name="heart" size={24} color="#fff" />
                                  <Text style={styles.textBottom}>{item.likes}</Text>
                            </View>
                            <View style={styles.inlineText}>
                                <AntDesign name="sharealt" size={24} color="#fff" />
                                <Text style={styles.textBottom}>{item.share}</Text>
                            </View>
                        </View>
                  </View>                 
                </ImageBackground>
                
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  itemContainer:{
    flex:1
  },
  itemsBody:{
     //alignItems:'center',
     justifyContent: 'center',
     marginTop:50,
    },
  items:{
    width:500 ,
    height: 175, 
   },
   itemsText:{
     flexDirection: 'row',
     marginTop:60,
     justifyContent: 'space-evenly',
     
   },
   itemTitle:{
     alignItems: 'center',
     justifyContent:'center',
     fontSize: 25,
     color: '#fff'
   },
   textBottom:{
     color: '#fff',
     fontSize:20,
   },
   inlineText:{
     justifyContent: 'space-around',
     flexDirection: 'row'
   }
   
});
