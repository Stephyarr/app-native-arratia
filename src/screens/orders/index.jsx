import React from "react";
import { View, FlatList} from "react-native";
import OrderItem from "../../components/order-item";
import { ORDERS } from "../../constants/data/orders";
import { styles } from "./styles";

const Orders = ({ navegation }) => {
    const onDelete = (id) => {};

    const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />
    const keyExtractor = (item) => item.id.toString();
    return (
        <View styles={styles.container}>
            <FlatList
                data={ORDERS}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

export default Orders;