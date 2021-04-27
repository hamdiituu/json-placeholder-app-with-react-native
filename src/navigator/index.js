import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StackInTabInMain,
  StackInTabInUsers,
  StackInPostDetail,
  StackInUserDetail,
} from '../screens';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainTab"
      tabBarOptions={{
        inactiveTintColor: 'gray',
        activeTintColor: 'black',
        labelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          borderRadius: 60,
          marginBottom: 5,
        },
        style: {
          height: 30,
          backgroundColor: 'white',
          borderRadius: 60,
        },
      }}>
      <Tab.Screen
        name="MainTab"
        component={StackInTabInMain}
        options={{tabBarLabel: 'POSTS', title: 'Posts'}}
      />
      <Tab.Screen
        name="UsersTab"
        options={{tabBarLabel: 'USERS'}}
        component={StackInTabInUsers}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainStack">
        <Stack.Screen
          name="MainStack"
          component={MainTabNavigator}
          options={{
            headerShown: false,
            title: 'Back',
          }}
        />
        <Stack.Screen
          name="PostDetailStack"
          component={StackInPostDetail}
          options={{title: 'Post Detail'}}
        />
        <Stack.Screen
          name="UserDetailStack"
          component={StackInUserDetail}
          options={{title: 'User Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
