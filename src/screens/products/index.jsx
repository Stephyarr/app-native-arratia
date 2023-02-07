import React from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";

const Products = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>Productos</Text>
            <Button 
                title= "Ver Mas"
                onPress={() => navigation.navigate("ProductDetail")}
                color= "#40434E"
            />
        </View>
    )
};

export default Products;