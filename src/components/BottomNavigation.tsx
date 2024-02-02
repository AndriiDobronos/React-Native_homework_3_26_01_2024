import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';

const navigationIcons = [
    {id:"1",icon:require('../icons/icon-menu.png'),title:"Menu"},
    {id:"2",icon:require('../icons/icon-promotions.png'),title:"Promotions"},
    {id:"3",icon:require('../icons/icon-settings.png'),title:"Settings"},
    {id:"4",icon:require('../icons/icon-shopping.png'),title:"Cart"},
    {id:"5",icon:require('../icons/icon-trolley.png'),title:"My orders"},
];

const BottomNavigation = () => {
    return (
        <View  style={styles.container}>
            {navigationIcons.map((content)=> {
                return <View  key={content.id} style={styles.box}>
                    <Image source={content.icon} resizeMode="cover" style={styles.icon}/>
                    <Text style={styles.text}>{content.title}</Text>
                </View>
            })}
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:24,
        paddingTop:40,
        flexDirection:"row",
        justifyContent :"space-between",
    },
    box: {
       flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    },
    icon: {
        width:24,
        height:24,
    },
    text: {
        fontSize:10,
        fontWeight:"bold"
    }
});
export default BottomNavigation;