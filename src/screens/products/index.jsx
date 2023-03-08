import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { ProductItem } from "../../components";
import { PRODUCTS } from "../../constants/data/index";
import { useSelector } from "react-redux";

import { styles } from "./styles";

const Products = ({ navigation }) => {
    const category = useSelector((state) => state.category.selected);

    console.warn(category)

    const filterProducts = PRODUCTS.filter((product) => product.categoryId === category.id);

    const onSelected = (item) => {
        navigation.navigate('ProductDetail', {
            productId: item.id,
            title: item.title,
        })
    };

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