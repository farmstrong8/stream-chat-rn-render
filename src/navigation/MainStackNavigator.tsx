import { NavigatorScreenParams } from "@react-navigation/native";
import {
    createStackNavigator,
    StackScreenProps,
} from "@react-navigation/stack";
import React from "react";
import { HomeTabNavigator, HomeTabParamList } from "./HomeTabNavigator";
import { RootStackParamList } from "./RootStackNavigator";
import { useInitChatClient } from "../hooks/useInitChatClient";

export type MainStackParamList = {
    HomeTabs: NavigatorScreenParams<HomeTabParamList>;
};

export const MainStack = createStackNavigator<MainStackParamList>();

export type MainStackNavigatorProps = StackScreenProps<
    RootStackParamList,
    "Main"
>;

export const MainStackNavigator: React.FC<MainStackNavigatorProps> = () => {
    useInitChatClient();

    return (
        <MainStack.Navigator initialRouteName="HomeTabs">
            <MainStack.Screen
                name="HomeTabs"
                component={HomeTabNavigator}
                options={{ headerShown: false }}
            />
        </MainStack.Navigator>
    );
};
