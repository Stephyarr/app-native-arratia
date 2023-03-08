import React from "react";
import { SafeAreaView, FlatList} from "react-native";
import { useSelector } from "react-redux";
import { CategoryItem } from "../../components";

// import { THEMES } from "../../constants/themes";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
    const categories = useSelector((state) => state.category.categories);

    const onSelected = (item) => {
        navigation.navigate('Products', {
            categoryId: item.id,
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