import React from "react";
import { View, Text, Button } from "react-native";
import { THEMES } from "../../constants/themes";

import { styles } from "./styles";

const Products = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Productos</Text>
            <Button 
                title= "Ver Mas"
                onPress={() => navigation.navigate("ProductDetail")}
                color= {THEMES.colors.primary}
            />
        </View>
    )
};

export default Products;