import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, View, Text} from "react-native";
import { styles } from "./styles";
import { THEMES } from "../../constants/themes"
import { formaDate } from "../../utils/funtions";

const OrderItem = ({ item, onDelete }) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{formaDate(item.date)}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.total}>${item.total}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name='trash' size={22} color={THEMES.colors.title}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default OrderItem;