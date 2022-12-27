import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,

    Dimensions,
   

} from 'react-native';
import db from '../config';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { Video, AVPlaybackStatus } from 'expo-av';
import { SwiperFlatList } from 'react-native-swiper-flatlist'

export default class VideoStatusScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: null,
            products: [],
            play: false
        };
    }
    getProducts = async () => {

        this.setState({ products: [] });
        var resp = await db
            .collection('Videos')
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
    };
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item, i }) => {
        return (
            <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center' }}>
                <Video
                    ref={this.state.video}
                    style={{
                        height: Dimensions.get('window').height - 40,
                        width: Dimensions.get('window').width,

                    }}
                    source={{
                        uri: item.video,
                    }}
                    useNativeControls
                    resizeMode="cover"

                />

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

                    <View style={{ alignContent: 'center' }}>
                        <SwiperFlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.products}
                            renderItem={this.renderItem}

                        />
                    </View>
                </View>
            );
        }

    }
}
