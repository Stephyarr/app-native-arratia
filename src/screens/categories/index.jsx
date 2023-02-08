import React from "react";
import { View, Text, Button} from "react-native";
import { themes } from "../../constants/themes";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias </Text>
            <Button
                title="Ver Mas"
                onPress={() => navigation.navigate("Products")}
                color= {themes.colors.primary}
                
            />
        </View>
    )
};

export default Categories;