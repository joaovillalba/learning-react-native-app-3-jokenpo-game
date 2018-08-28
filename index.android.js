/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,  
  Text,
  View,
  Button
} from 'react-native';

class app3 extends Component {

  constructor(props){
    super(props);

    this.state = {
      userChoose : '',
      pcChoose : ''
    }
  }

  render() {
    return (
      <View>
        <Text>Escolha do Computador: {this.state.pcChoose}</Text>
        <Text>Escolha do Usuário: {this.state.userChoose}</Text>
        <Text>Resultado</Text>
        <Button title='pedra' />        
        <Button title='Papel' />        
        <Button title='Tesoura' />        
      </View>
    );
  }
}

AppRegistry.registerComponent('app3', () => app3);
