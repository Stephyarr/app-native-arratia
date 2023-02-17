import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { THEMES } from "../constants/themes";
import { Categories, ProductDetail, Products } from "../screens/index";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerTintColor: THEMES.colors.primary,
                navigationBarColor: THEMES.colors.title
            }}>
            <Stack.Screen 
                name="Categories" 
                component={Categories} 
                options={{ 
                    headerShown: false,
                    title:'Categoria'
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={Products} 
                options={({ route }) => ({
                    title: route.params.title
                })}
            />
            <Stack.Screen 
                name="ProductDetail" 
                component={ProductDetail} 
                options={({ route }) => ({
                    title: route.params.title
                })}
            />
        </Stack.Navigator>
    )
};

export default ShopNavigator;