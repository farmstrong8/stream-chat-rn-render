import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatChannelListScreen } from "../screens/ChatChannelListScreen";

export type ChatStackParamList = {
    Chat: undefined;
    ChatChannel: {
        messageId?: string;
        channelId?: string;
    };
};

const ChatStack = createStackNavigator<ChatStackParamList>();

export const ChatStackNavigator: React.FC = () => {
    return (
        <ChatStack.Navigator>
            <ChatStack.Screen
                name="Chat"
                component={ChatChannelListScreen}
                options={{
                    title: "Chat",
                }}
            />
        </ChatStack.Navigator>
    );
};
