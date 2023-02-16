import { TouchableOpacity, View, Text} from "react-native";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
    return (
        <View style= {styles.container}>
            <TouchableOpacity style={styles.contentContainer} onPress={() => onSelected(item)}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.detailContainer}>
                    <Text style={styles.price}>${item.price}</Text>
                    <Text style={styles.weight}>k{item.weight}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default ProductItem;