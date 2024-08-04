
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BooksList from './screens/BooksList';
import BookDetail from './screens/BookDetail';
import Borrowed from './screens/Borrowed';
import { BookProvider } from './context/BookContext';
import './firebase'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Book App</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="BooksList" 
        component={BooksList} 
        options={{ 
          title: 'Books List',
          headerTitle: (props) => <LogoTitle {...props} />
        }} 
      />
      <Stack.Screen 
        name="BookDetail" 
        component={BookDetail} 
        options={{ title: 'Book Detail' }} 
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <BookProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Borrowed') {
                iconName = focused ? 'book' : 'book-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Borrowed" component={Borrowed} />
        </Tab.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
}

export default App;
