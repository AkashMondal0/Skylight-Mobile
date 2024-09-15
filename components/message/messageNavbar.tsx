import { Avatar, Icon, Text } from "@/components/skysolo-ui";
import { memo } from "react";
import { Conversation } from "@/types";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-stores/store";



const ChatScreenNavbar = memo(function ChatScreenNavbar({
    conversation,
    pressBack
}: {
    conversation: Conversation,
    pressBack: () => void
}) {
    const currentTheme = useSelector((state: RootState) => state.ThemeState.currentTheme)


    return (
        <View style={{
            width: "100%",
            display: 'flex',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 6,
            borderBottomWidth: 1,
            borderColor: currentTheme?.border,
        }}>
            <View style={{
                display: 'flex',
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
            }}>
                <Icon iconName={"ChevronLeft"} size={36} onPress={pressBack} />
                <View style={{
                    display: 'flex',
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                }}>
                    <Avatar
                        size={50}
                        url={conversation.user?.profilePicture} />
                    <View>
                        <Text
                            style={{ fontWeight: "600" }}
                            variant="heading3">
                            {conversation?.user?.name}
                        </Text>
                        <Text
                            secondaryColor
                            style={{ fontWeight: "400" }}
                            variant="heading4">
                            {"status"}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingRight: 10 }}>
                <Icon iconName={"Info"} isButton variant="secondary"/>
            </View>
        </View>
    )
})
export default ChatScreenNavbar;