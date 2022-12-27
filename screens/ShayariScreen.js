import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Alert
} from 'react-native';
import db from '../config';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { AntDesign } from '@expo/vector-icons';


export default class ShayariScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.route.params.category,
      products: [],
    };
  }
  getProducts = async () => {
    var category = this.props.route.params.category;
    this.setState({ products: [] });
    var resp = await db
      .collection('Shayaries')
      .where('category', '==', this.state.category)
      .get();
    resp.docs.map((d) => {
      var temp = this.state.products;
      var doc = d.data();
      doc.id = d.id;
      temp.push(doc);
      this.setState({ products: temp });
    });
  };

  componentDidMount = async () => {
    this.getProducts();
    console.log(this.state.products)
  };
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item, i }) => {
    return (
      <View style={{ alignContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: 'grey',
            marginBottom: 5,
            width: '90%',
            marginTop: 12,
            marginBottom: 10,
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              marginTop: 30,
              fontSize: 28,
              alignSelf: 'center',
              fontWeight: 'bold',
              marginBottom: 10,
              marginLeft: 10,
              marginRight: 10,
              width: '90%',
            }}>
            {item.Shayari}
          </Text>
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(item.Shayari)
              Alert.alert("Text Copied!")
            }}
            style={{ marginBottom: 10 }}>
            <AntDesign name="copy1" size={24} color="orange" />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}></View>
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    if (this.state.products.length === 0) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#FAFAFA',
            justifyContent: 'center'
          }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    else {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#FAFAFA',
          }}>
          <View>
            <LinearGradient colors={['#009ffd', '#045de9']}>
              <TouchableOpacity
                style={{
                  height: 40,
                  flexDirection: 'row',
                  paddingTop: '2%',
                  paddingRight: '5%',
                  marginTop: '7%',
                  marginBottom: '5%',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    borderRadius: 17,
                    justifyContent: 'center',
                    marginRight: '20%',
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    borderColor: 'grey',
                    marginLeft: -10,
                  }}
                  onPress={() => this.props.navigation.goBack()}>
                  <Ionicons name="arrow-back-outline" size={26} color="white" />
                </TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginTop: '2%',
                    marginRight: 10,
                  }}>
                  Shayaries
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>


          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.products}
            renderItem={this.renderItem}
            onEndReachedThreshold={0.07}
          />

        </View>
      );
    }

  }
}
