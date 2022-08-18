import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './components/mainScreen';
import InfoScreen from './components/infoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen} />
        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
