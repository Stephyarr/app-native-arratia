import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";
import Ionicons from "@expo/vector-icons/Ionicons"

import { THEMES } from "../constants/themes";

const BottonTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottonTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Heebo-Light',
                    fontSize: 12,
                },
                tabBarActiveTintColor: THEMES.colors.white,
                tabBarInactiveTintColor: THEMES.colors.primary,
            }}>
            <BottonTab.Screen 
                name="ShopTab" 
                component={ShopNavigator} 
                options={{
                    title: 'Shop',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={THEMES.colors.primary}
                        />
                    ),
                }}
            />
            <BottonTab.Screen 
                name="OrderTab" 
                component={OrdersNavigator} 
                options={{
                    title:'Orden',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'file-tray' : 'file-tray-outline'} size={22} color={THEMES.colors.primary}
                        />
                    ),
                }}
            />
            <BottonTab.Screen 
                name="CartTab" 
                component={CartNavigator}
                options={{
                    title: 'Carrito',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'cart' : 'cart-outline'} size={22} color={THEMES.colors.primary}
                        />
                    ),
                }}
            />
        </BottonTab.Navigator>
    )
}

export default Tabs;