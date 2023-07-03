import React from "react";
import { MainStackNavigator } from "./MainStackNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { Chat, OverlayProvider } from "stream-chat-expo";
import { streamClient } from "../components/chatClient";

export type RootStackParamList = {
    Main: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackNavigator: React.FC = () => {
    return (
        <OverlayProvider
            ImageSelectorIcon={() => null}
            FileSelectorIcon={() => null}
            CameraSelectorIcon={() => null}
            messageTextNumberOfLines={3}
        >
            <Chat client={streamClient}>
                <RootStack.Navigator>
                    <RootStack.Screen
                        name="Main"
                        component={MainStackNavigator}
                    />
                </RootStack.Navigator>
            </Chat>
        </OverlayProvider>
    );
};
