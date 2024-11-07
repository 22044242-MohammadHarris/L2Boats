/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Boat from './Boat.js';

import Ionicons from '@expo/vector-icons/Ionicons';

function App() {

  const boats = [
    {
      name: 'Sea Ray 500 Sundancer',
      description: 'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
      picture: require('./img/sea_ray.jpg')  // This works - static string
    },
    {
      name: 'Four Winns Horizon 180',
      description: 'A sporty look and refined details truly set the Horizon 180 above all others.',
      picture: require('./img/four_winns.jpg')  // This works - static string
    },
    {
      name: 'Flipper 640 ST',
      description: 'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
      picture: require('./img/flipper.jpg')
    },
    {
      name: 'Princess V48',
      description: 'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
      picture: require('./img/princess.jpg')
    },
    {
      name: 'Bayliner 175 Bowrider',
      description: 'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
      picture: require('./img/bayliner.jpg')
    },
    {
      name: 'Fairline Targa 47',
      description: 'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
      picture: require('./img/fairline.jpg')
    }
  ];

  return (
      <SafeAreaView>
        <StatusBar


        />
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
        >
          <View
              style={{}}>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>

            <Ionicons name="boat-sharp" size={24} color="white" />
            <Text style={{color:'white',padding:20, textAlign:'center', fontSize:20, fontWeight:'600', backgroundColor:'black'}}>GetABoat - For Sale</Text>
            </View>
            
            <View style={{padding:10, backgroundColor:'black'}}>
            {boats && boats?.map(({name, description, picture},index)=>(
                <Boat key={index} name={name} description={description} picture={picture}/>
            ))}
            </View>      

          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;