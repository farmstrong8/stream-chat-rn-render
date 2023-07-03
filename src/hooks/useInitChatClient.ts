import { useEffect } from "react";
import { useChatContext } from "stream-chat-expo";

export const useInitChatClient = () => {
    const { client } = useChatContext();

    useEffect(() => {
        const setupClient = async () => {
            try {
                const connectionResponse = await client.connectUser(
                    {
                        id: "USER TOKEN",
                    },
                    client.devToken("USER TOKEN")
                );
            } catch (error) {
                console.log(`STREAM ERROR: ${error}`);
            }
        };

        /**
         * If the user is already connected, we can skip trying to connect the user again.
         */

        setupClient();

        return () => {
            client.disconnectUser();
        };
    }, []);
};
