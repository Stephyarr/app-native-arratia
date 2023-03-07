import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, View, Text } from "react-native";
import { THEMES } from "../../constants/themes";
import { styles } from "../../components/cart-item/styles";

const CartItem = ({ item, onDelete}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text>{item.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.quantity}>cantidad: {item.quantity}</Text>
                    <Text style={styles.price}>$ {item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={22} color={THEMES.colors.title}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default CartItem;
