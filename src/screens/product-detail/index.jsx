import React from "react";
import { View, Text } from "react-native";
import { PRODUCTS } from "../../constants/data/products";
import { styles } from "./styles";

const ProductDetail = ({ navigation, route}) =>{
    const { productId, title } = route.params;

    const products = PRODUCTS.find((products) => products.id === productId);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{products.title}</Text>
            <Text style={styles.title}>{products.description}</Text>
            <Text style={styles.title}>${products.price}</Text>
            <Text style={styles.title}>{products.weight}</Text>
        </View>
    )
};

export default ProductDetail;