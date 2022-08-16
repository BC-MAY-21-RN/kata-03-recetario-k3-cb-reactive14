import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import SearchBarComponent from "./components/search-bar.js";
import { styles } from "./styles/styleApp"
import TrendingList from './components/trending-list.js';




export default function App() {
  const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Pepperoni Pizza",
        img: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Chocolate Chip",
        img: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="
  
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d731",
        title: "Pancake Cups",
        img: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="
  
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d733",
        title: "Pancake Cups",
        img: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="
  
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d734",
        title: "Pancake Cups",
        img: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="
  
    },
  ];
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
          data = {DATA}
          />
        <TrendingList
          title={"RECENT"}
          width={110}
          height={120}
          data = {DATA}
        />
      </View>

    </View>
  );
}



