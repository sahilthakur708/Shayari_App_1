import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import analytics from "@react-native-firebase/analytics"

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      image: null
    };
  }
  getVideos = async () => {
    db.collection('Videos')

      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.setState({

            image: doc.data().image
          })
        })
      })
  }
  customEvent=async()=>{
    await analytics.logEvent('bricket',{
      id:11111
    })
  }
  componentDidMount = () => {
    this.getVideos()
    console.log(this.state.image)
  }
  render() {

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FAFAFA',
        }}>
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
              }}>
              Home
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <ScrollView>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ShayariScreen', {
                  category: 'Attitude',
                });
                this.customEvent()
              }}
              style={{
                justifyContent: 'center',
                height: 130,
                width: 130,
                alignSelf: 'center',
                marginLeft: 2,
              }}>
              <ImageBackground
                source={require('../Images/Attitude.png')}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  height: 130,
                  width: 130,
                  marginBottom: -20,
                  marginTop: 30,
                }}></ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ShayariScreen', {
                  category: 'Mahakal',
                });
                this.customEvent()
              }}
              style={{
                justifyContent: 'center',
                height: 90,
                width: 130,
                alignSelf: 'center',
                marginTop: 80,
                marginLeft: 20,
              }}>
              <ImageBackground
                style={{ height: 130, width: 130 }}
                source={require('../Images/Mahakal.png')}></ImageBackground>
            </TouchableOpacity>
          </View>


          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ShayariScreen', {
                  category: 'Sad',
                });
                this.customEvent()
              }}
              style={{
                justifyContent: 'center',
                height: 100,
                width: 110,
                alignSelf: 'center',
                marginTop: 50,
                marginRight: 10,
                marginLeft: 5,
              }}>
              <ImageBackground
                style={{ height: 130, width: 130 }}
                source={require('../Images/Sad.png')}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ShayariScreen', {
                  category: 'Friends',
                });
                this.customEvent()
              }}
              style={{
                justifyContent: 'center',
                height: 100,
                width: 140,
                alignSelf: 'center',
                marginTop: 50,
                marginLeft: 20,
              }}>
              <ImageBackground
                style={{ height: 150, width: 150 }}
                source={require('../Images/Friends.png')}></ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 18, flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ShayariScreen', {
                  category: 'Motivation',
                });
                this.customEvent()
              }}
              style={{
                justifyContent: 'center',
                height: 100,
                width: 140,
                alignSelf: 'center',
                marginTop: 60,
                marginRight: 10,
                marginLeft: -10,
                marginBottom: 15,
              }}>
              <ImageBackground
                style={{ height: 200, width: 200 }}
                source={require('../Images/Motivation.png')}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ShayariScreen', {
                  category: 'Love',
                });
                this.customEvent()
              }}
              style={{
                justifyContent: 'center',
                height: 100,
                width: 140,
                alignSelf: 'center',
                marginTop: 30,
                marginRight: 10,
                marginLeft: 66,
                marginBottom: 15,
              }}>
              <ImageBackground
                style={{ height: 100, width: 130 }}
                source={require('../Images/Love.png')}></ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <LinearGradient
              style={{
                width: 250,
                height: 60,
                alignSelf: 'center',
                marginTop: 30,
                justifyContent: 'center',
                borderRadius: 30,
                alignContent: 'center'
              }}
              colors={['#009ffd', '#045de9']}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('VideoStatusScreen')
                }}
                style={{
                  borderRadius: 20,
                  width: '75%',
                  alignSelf: 'center',
                  height: 50,
                  marginTop: '10%',
                  justifyContent: 'center',
                  paddingBottom: 5,
                  marginBottom: '8%',
                }}>
                <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                  <Entypo name="video" size={26} color="white" style={{ alignSelf: 'center' }} />
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 22,
                      marginLeft: 10
                    }}>
                    Video Status
                  </Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>

          </View>
        </ScrollView>
      </View>
    );
  }
}
