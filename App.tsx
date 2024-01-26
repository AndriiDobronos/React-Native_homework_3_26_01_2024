//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
//import { HomeScreen} from '@/screens/Home/HomeScreen.tsx'
import {HomeScreen} from "./src/screens/Home/HomeScreen.tsx";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
//      <StatusBar style="auto" />
  );
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
