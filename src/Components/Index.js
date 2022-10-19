import React, { Component } from 'react';
import Authentication from './Authentication/Authentication';
import ChangeInFor from './ChangeInFor/ChangeInFor';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
// eslint-disable-next-line import/imports-first
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// eslint-disable-next-line import/imports-first
import 'react-native-gesture-handler';
// eslint-disable-next-line import/newline-after-import, import/imports-first
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default class Index extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="ChangeInFor" component={ChangeInFor} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Authentication" component={Authentication} />
    </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
