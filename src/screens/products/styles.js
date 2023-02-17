import { StyleSheet } from "react-native";
import { THEMES } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: THEMES.colors.background,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Heebo-SemiBold',
        padding: 10
    }
})