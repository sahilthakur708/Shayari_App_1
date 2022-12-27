import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Navigations/Navigate';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }
}
