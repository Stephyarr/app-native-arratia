import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { THEMES } from "../constants/themes";
import { Cart } from "../screens";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Cart"
            screenOptions={{
                headerTintColor: THEMES.colors.primary,
                navigationBarColor: THEMES.colors.title,
                headerTitleStyle: {
                    fontFamily: 'Heebo-Thin',
                    fontSize: 18,
                },
            }}>
            <Stack.Screen
                name="Cart"
                component={Cart}
            />

        </Stack.Navigator>
    )
}

export default CartNavigator;