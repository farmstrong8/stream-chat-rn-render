import React from "react";
import { ChannelList } from "stream-chat-expo";

export type ChatChannelListScreenProps = {};

export const ChatChannelListScreen: React.FC<
    ChatChannelListScreenProps
> = () => {
    const userChatId = "USER TOKEN";

    return (
        <ChannelList
            filters={{
                members: {
                    $in: [userChatId],
                },
            }}
        />
    );
};
