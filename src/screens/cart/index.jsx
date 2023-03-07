import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { CART } from "../../constants/data/index"
import CartItem from "../../components/cart-item";
import { styles } from "./styles";

const Cart = ({ navegation }) => {
    const total = 2000

    const onDelete = (id) => {}

    const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete}/>
    const keyExtractor = (item) => item.id.toString();
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                data={CART}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.listContainer}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => null}>
                    <Text style={styles.confirmarText}>Confirmar</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.total}>Total</Text>
                        <Text style={styles.precio}>{total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart;