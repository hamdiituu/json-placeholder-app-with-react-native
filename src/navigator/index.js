import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomTabBar} from '../components/common';
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
      tabBar={props => <CustomTabBar {...props} />}
      tabBarOptions={{
        style: {
          backgroundColor: 'transparent',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
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
