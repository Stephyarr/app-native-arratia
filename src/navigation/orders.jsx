import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { THEMES } from "../constants/themes";
import { Orders } from "../screens";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Orders"
            screenOptions={{
                headerTintColor: THEMES.colors.primary,
                navigationBarColor: THEMES.colors.title
            }}>
            <Stack.Screen
                name="Orders"
                component={Orders}
            />

        </Stack.Navigator>
    )
}

export default OrdersNavigator;