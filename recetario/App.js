import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBarComponent from "./components/search-bar.js";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBarComponent />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#f00',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  component: {
    marginTop: 8,
    borderColor: 'red',
    borderWidth: 3
  }
});
