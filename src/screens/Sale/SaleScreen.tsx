import React from "react";
import {StyleSheet, Text} from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import {ColorsVar} from "../../constants/ColorsVar";
import MyPager from "../../components/PagerView";
import {CarouselFlatList} from "../../components/CarouselFlatlist";
import PagerView from "../../components/PagerView";
import BottomNavigation from "../../components/BottomNavigation";

const SaleScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={{fontSize:40}} >Sale</Text>
            <CarouselFlatList />
            <BottomNavigation  />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeArea : {
        flex:1,
        backgroundColor: ColorsVar.mainBackground,
        //alignItems:"center",
    },
})

export {SaleScreen};