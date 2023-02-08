import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { themes } from "../constants/themes";
import { Categories, ProductDetail, Products } from "../screens/index";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerTintColor: themes.colors.primary,
                navigationBarColor: themes.colors.title
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
                options={{
                    title: 'Producto',
                }}
            />
            <Stack.Screen 
                name="ProductDetail" 
                component={ProductDetail} 
                options={{
                    title: 'Detalle del Producto',
                }}
            />
        </Stack.Navigator>
    )
};

export default ShopNavigator;