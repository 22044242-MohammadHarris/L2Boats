import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Boat = ({name, description, picture}) => {

    // const icon = <FontAwesome6 name={"comments"} w/>

    return (
        <View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <MaterialCommunityIcons name="sale" size={24} color="white"/>
                <Text style={{color:'white', fontSize:25, fontWeight:'500', marginLeft:2}}>
                    {/*<Icon name={"sailboat"} size={25} color={'#6D6D6D'} />*/}
                    {name.toUpperCase()}</Text>
            </View>

            <Text  style={{color:'white', paddingVertical:20}}>{description}</Text>

            <Image source={picture} style={{width:400, height:400, marginBottom:20, borderRadius:20, borderWidth:5, borderColor:'white'}}/>

        </View>
    );
}

const styles = StyleSheet.create({})

export default Boat;