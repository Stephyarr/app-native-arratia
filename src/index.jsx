import { useFonts } from "expo-font";
import { View, ActivityIndicator } from 'react-native';
import { Categories } from "./screens"

import { styles } from './styles';

const App = () => {
  const [loader] = useFonts({
    'Heebo-Light': require("../assets/fonts/Heebo-Light.ttf"),
    'Heebo-Medium': require("../assets/fonts/Heebo-Medium.ttf"),
    'Heebo-Regular': require("../assets/fonts/Heebo-Regular.ttf"),
    'Heebo-SemiBold': require("../assets/fonts/Heebo-SemiBold.ttf"),
    'Heebo-Thin': require("../assets/fonts/Heebo-Thin.ttf"),
  })

  if(!loader){
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
      </View>
    )
  }

  return (
    <Categories/>
  )
}

export default App;
