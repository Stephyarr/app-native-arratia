import React from "react";
import { SafeAreaView, FlatList} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { CategoryItem } from "../../components";
import { selectCategory } from "../../store/actions";

// import { THEMES } from "../../constants/themes";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);

    const onSelected = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Products', {
            title: item.title,
        });
    };

    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected}/>
    const keyExtractor = (item) => item.id.toString();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
             data={categories}
             renderItem= {renderItem}
             keyExtractor={keyExtractor}
             style= {styles.containerList}
             contentContainerStyle= {styles.contentContainerStyle}
            />
        </SafeAreaView>
    )
};

export default Categories;