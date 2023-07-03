import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, HomeStackParamList } from "./HomeStackNavigator";
import { ChatStackNavigator, ChatStackParamList } from "./ChatStackNavigator";
import { MainStackParamList } from "./MainStackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { NavigatorScreenParams } from "@react-navigation/native";

export type HomeTabParamList = {
    Home: NavigatorScreenParams<HomeStackParamList>;
    ChatHome: NavigatorScreenParams<ChatStackParamList>;
};

const HomeTabs = createBottomTabNavigator<HomeTabParamList>();

export type HomeTabNavigatorProps = StackScreenProps<
    MainStackParamList,
    "HomeTabs"
>;

export const HomeTabNavigator: React.FC<HomeTabNavigatorProps> = () => {
    return (
        <HomeTabs.Navigator initialRouteName="Home">
            <HomeTabs.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    title: "Default",
                }}
            />

            <HomeTabs.Screen
                name="ChatHome"
                component={ChatStackNavigator}
                options={{
                    freezeOnBlur: true,
                    title: "Chat",
                }}
            />
        </HomeTabs.Navigator>
    );
};
