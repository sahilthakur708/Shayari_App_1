import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PostShayariScreen from '../screens/PostShayariScreen';
import { MaterialIcons } from '@expo/vector-icons';
import ShayariScreen from '../screens/ShayariScreen';
import VideoStatusScreen from '../screens/VideoStatusScreen'

const TabOrders = createMaterialBottomTabNavigator();

const TabContentOrders = () => {
  return (
    <TabOrders.Navigator
      initialRouteName="HomeScreen"
      activeColor="white"
      inactiveColor="black"
      labeled={true}
      barStyle={{ backgroundColor: '#009ffd' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            return (
              <MaterialIcons name="call-received" size={20} color={color} />
            );
          } else if (route.name === 'PostShayariScreen') {
            return (
              <MaterialIcons name="present-to-all" size={20} color={color} />
            );
          }
        },
      })}>
      <TabOrders.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home Screen',
        }}
      />

      <TabOrders.Screen
        name="PostShayariScreen"
        component={PostShayariScreen}
        options={{ title: 'PostShayariScreen' }}
      />
    </TabOrders.Navigator>
  );
};
const Stack1 = createStackNavigator();

const MainStack = () => {
  return (
    <Stack1.Navigator screenOptions={{ headerShown: false }}>
      <Stack1.Screen name="HomeScreen" component={TabContentOrders} />
      <Stack1.Screen name="VideoStatusScreen" component={VideoStatusScreen} />
      <Stack1.Screen
        options={{ headerShown: false, title: 'Shayari' }}
        name="ShayariScreen"
        component={ShayariScreen}
      />
    </Stack1.Navigator>
  );
};

export default MainStack;
