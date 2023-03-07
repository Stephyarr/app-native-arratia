import { StyleSheet } from "react-native";
import { THEMES } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEMES.colors.background
    },
    listContainer: {
        flex: 1,
        paddingVertical: 10,
    },
    footer: {
        backgroundColor: THEMES.colors.white, 
        borderTopColor: THEMES.colors.title,
        borderTopWidth: 1,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: THEMES.colors.primary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    confirmarText: {
        color: THEMES.colors.white,
        fontSize: 14,
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    total: {
        fontSize: 18,
        color: THEMES.colors.white,

    },
    precio: {
        fontSize: 16,
        color: THEMES.colors.white,

    },
   
});