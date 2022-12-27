import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import db from '../config';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-community/picker';


export default class PostShayariScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      category: '',
      shayari: '',


    };
  }

  uploadShayari = () => {
    if (this.state.category === '' || this.state.shayari === '') {
      Alert.alert('Please fill all the details');
    } else {
      db.collection('Shayaries').add({
        category: this.state.category,
        Shayari: this.state.shayari,
      });
      Alert.alert('Uploaded');
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View>
          <LinearGradient colors={['#009ffd', '#045de9']}>
            <TouchableOpacity
              style={{
                height: 30,
                flexDirection: 'row',
                paddingTop: 3,
                paddingRight: '5%',
                marginTop: 12,
                marginBottom: 8,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  fontWeight: 'bold',
                  marginLeft: '-15%',
                  marginTop: -3
                }}>
                Post Your Shayari
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: '80%',
            marginTop: '12%',
            height: '6%',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Picker
            mode="dropdown"
            selectedValue={this.state.category}
            style={{
              width: '80%',
              height: 80,
              marginBottom: '0.5%',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 4,
              fontColor: 'white',
              alignSelf: 'center',
            }}
            onValueChange={(itemValue) =>
              this.setState({
                category: itemValue,
              })
            }>
            <Picker.Item label="Category" value="" />
            <Picker.Item label="Attitude" value="Attitude" />
            <Picker.Item label="Friends" value="Friends" />
            <Picker.Item label="Mahakal" value="Mahakal" />
            <Picker.Item label="Motivation" value="Motivation" />
            <Picker.Item label="Sad" value="Sad" />
            <Picker.Item label="Love" value="Love" />
          </Picker>
        </View>

        <TextInput
          style={{
            backgroundColor: '#EAEAEA',
            width: '80%',
            alignSelf: 'center',
            marginTop: 40,
            height: 50,
            borderRadius: 10,
            paddingLeft: 20.5,
            fontSize: 13,
            borderWidth: 1,
          }}
          inlineImageLeft="search_icon"
          placeholder="Write Your Shayari Here.."
          onChangeText={(val) => {
            this.setState({ shayari: val });
          }}
        />

        <View>
          <LinearGradient
            style={{
              width: 200,
              height: 50,
              alignSelf: 'center',
              marginTop: 30,
              justifyContent: 'center',
              borderRadius: 30,
            }}
            colors={['#009ffd', '#045de9']}>
            <TouchableOpacity
              onPress={() => {
                if (
                  this.state.category === '' ||
                  this.state.shayari === '' ||
                  (this.state.category === '') & (this.state.shayari === '')
                ) {
                  Alert.alert('Invalid!', 'Please Fill all the details');
                } else {
                  this.uploadShayari();
                  this.showRewardedAd();
                  this.setState({ category: '', shayari: '' });
                  this.props.navigation.navigate('HomeScreen');
                }
              }}
              style={{
                borderRadius: 20,
                width: '70%',
                alignSelf: 'center',
                height: 45,
                marginTop: '10%',
                justifyContent: 'center',
                paddingBottom: 5,
                marginBottom: '8%',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Post
              </Text>
            </TouchableOpacity>
          </LinearGradient>

        </View>
      </View>
    );
  }
}
