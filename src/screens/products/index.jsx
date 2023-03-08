import React, { useEffect} from "react";
import { SafeAreaView, FlatList } from "react-native";
import { ProductItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct, filterProducts } from "../../store/actions/index";
import { styles } from "./styles";

const Products = ({ navigation }) => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category.selected);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);

    const onSelected = (item) => {
        dispatch(selectProduct(item.id));
        navigation.navigate('ProductDetail', {
            title: item.title,
        })
    };

    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected}/>;

    const keyExtractor = (item) => item.id.toString();

    useEffect (() => {
        dispatch(filterProducts(category.id))
    },[])

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.contentList}
            />
        </SafeAreaView>
    )
};

export default Products;