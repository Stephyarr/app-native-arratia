import { StyleSheet } from "react-native";
import { THEMES } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,
        backgroundColor: THEMES.colors.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: THEMES.colors.title,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headerContainer: {},
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    quantity: {
        fontSize: 14,
        marginBottom: 5,
        fontFamily: 'Heebo-Medium'
    },
    price: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'Heebo-SemiBold'
    },
});