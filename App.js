import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Details from './src/components/Details';
import Product from './src/components/Product';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
   <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Product" component={Product} />

        </Stack.Navigator>
    </NavigationContainer>
  );
};
