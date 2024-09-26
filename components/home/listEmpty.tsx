import { Dimensions, View } from "react-native";
import { Text } from "@/components/skysolo-ui";


const ListEmptyComponent = ({
    text
}: {
    text: string
}) => {
    const windowHeight = Dimensions.get('window').height;
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: windowHeight - 400,
            width: '100%',
            flex: 1,
        }}>
            <Text variant="heading2" >{text}</Text>
        </View>
    )
}

export default ListEmptyComponent;