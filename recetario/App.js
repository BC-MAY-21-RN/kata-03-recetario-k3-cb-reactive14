import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen, InfoScreen } from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}

      >
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Overview' }}


        />
        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
