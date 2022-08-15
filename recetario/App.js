import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import SearchBarComponent from "./components/search-bar.js";
import { styles } from "./styles/styleApp"
import TrendingList from './components/trending-list.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.component} >
        <SearchBarComponent />
      </View>

      <View style={styles.viewTrendingList}>
        <TrendingList
          title={"TRENDING"}
          width={90}
          height={70}
        />
        <View style={styles.viewTrendingList}>
          <TrendingList
            title={"RECENT"}
            width={110}
            height={140}
          />
        </View>
      </View>
    </View>
  );
}



