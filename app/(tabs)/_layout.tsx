import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#41cf48ff",
            headerStyle: {
                backgroundColor: "#111",
                
            },
            headerTitleStyle: {
                fontSize: 32,
                margin: 12,
                fontFamily: 'Times New Roman'
            },
            headerShadowVisible: false,
            headerTintColor: "#41cf48ff",
            tabBarStyle: {
                backgroundColor: "#111",    
            }
        }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Trabalho - LP III',
          headerLeft: () => <></>,
          tabBarIcon: ({focused, color}) => (
            <Ionicons
                name={focused? 'home' : 'home-outline'}
                color={color}
                size={28}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 24,
          }
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <Ionicons
                name={focused? 'book' : 'book-outline'}
                color={color}
                size={28}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 24,
          }
        }}
      />
    </Tabs>
  );
}
