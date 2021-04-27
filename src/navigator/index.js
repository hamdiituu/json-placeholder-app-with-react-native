import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StackInTabInMain,
  StackInTabInUsers,
  StackInPostDetail,
} from '../screens';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: 'gray',
        labelStyle: {fontSize: 18, fontWeight: 'bold'},
        style: {height: 30, borderTopColor: 'black'},
      }}>
      <Tab.Screen
        name="MainTab"
        component={StackInTabInMain}
        options={{tabBarLabel: 'Posts', title: 'Posts'}}
      />
      <Tab.Screen
        name="UsersTab"
        options={{tabBarLabel: 'Users'}}
        component={StackInTabInUsers}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainStack"
          component={MainTabNavigator}
          options={{headerShown: false, title: 'Main'}}
        />
        <Stack.Screen
          name="PostDetailStack"
          component={StackInPostDetail}
          options={{title: 'Post Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
