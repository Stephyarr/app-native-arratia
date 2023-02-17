import { StyleSheet } from "react-native";
import { THEMES } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 20,
        height: 130,
        backgroundColor: THEMES.colors.white,
        borderRadius: 5,
    },
    contentContainer: {
        flex: 1,
        justifyContent: "space-around"
    },
    title: {
        fontSize: 18
    },
    detailContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    price: {
        fontSize: 18
    },
    weight: {
        fontSize: 16
    },
})