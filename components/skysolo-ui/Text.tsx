import { RootState } from '@/redux-stores/store';
import { Text, type TextProps } from 'react-native';
import { useSelector } from "react-redux"

export type Props = TextProps & {
    variant?: "heading1" | "heading2" | "heading3" | "heading4";
    lightColor?: string;
    darkColor?: string;
};


const SkysoloText = ({ style, variant, ...otherProps }: Props) => {
    const currentTheme = useSelector((state: RootState) => state.ThemeState.currentTheme?.foreground)
    if (!currentTheme) {
        console.error("SkysoloText, theme not loaded", currentTheme)
        return <></>
    }
    return (
        <Text
            style={[{
                color: currentTheme,
                fontSize: variant === "heading1" ? 32 : variant === "heading2" ? 24 : variant === "heading3" ? 18 : variant === "heading4" ? 16 : 14
            }, style]}
            {...otherProps} />
    )
}

export default SkysoloText