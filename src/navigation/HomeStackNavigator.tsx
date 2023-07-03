import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";

export type HomeStackParamList = {
    HomeScreen: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigator: React.FC = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: "Home",
                }}
            />
        </HomeStack.Navigator>
    );
};
