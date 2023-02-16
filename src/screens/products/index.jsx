import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { ProductItem } from "../../components";
import { PRODUCTS } from "../../constants/data/index"

import { styles } from "./styles";

const Products = ({ navigation, route }) => {
    const { categoryId, title } = route.params;

    console.warn(categoryId, title)

    const filterProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);

    const onSelected = (item) => {};

    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected}/>;

    const keyExtractor = (item) => item.id.toString();

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filterProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.contentList}
            />
        </SafeAreaView>
    )
};

export default Products;