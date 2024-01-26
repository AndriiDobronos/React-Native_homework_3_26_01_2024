import React from "react";
import {StyleSheet, View} from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import {ColorsVar} from "../../constants/ColorsVar";
import {SearchAndFilter} from "../../components/SearchAndFilter";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.navigation} >
                <SearchAndFilter />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeArea : {
        flex:1,
        backgroundColor: ColorsVar.mainBackground,
    },
    navigation: {
        flexDirection:"row",
    },
    scrollView: {
    }
})

export {HomeScreen};