import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigator } from "./src/navigation/RootStackNavigator";

export default function App() {
    return (
        <GestureHandlerRootView
            testID="gesture-handler-root-view"
            style={{ flex: 1 }}
        >
            <NavigationContainer>
                <RootStackNavigator />
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
