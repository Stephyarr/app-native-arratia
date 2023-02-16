import { StyleSheet, StatusBar } from "react-native"; 
import { THEMES } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEMES.colors.background,
        marginTop: StatusBar.currentHeight,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Heebo-SemiBold',
        padding: 10
    },
    containerList: {
        flex: 1
    }
    
})