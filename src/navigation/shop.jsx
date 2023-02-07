import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, ProductDetail, Products } from "../screens/index";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen 
                name="Categories" 
                component={Categories} 
                options={{
                    headerShown: false
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