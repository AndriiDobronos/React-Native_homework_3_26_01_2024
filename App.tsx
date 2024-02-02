import {HomeScreen} from "./src/screens/Home/HomeScreen.tsx";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {SaleScreen} from "./src/screens/Sale/SaleScreen";

export default function App() {
  return (
      <SafeAreaProvider>
        {/*<HomeScreen />*/}
        <SaleScreen />
      </SafeAreaProvider>
  );
}

