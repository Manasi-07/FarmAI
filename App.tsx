import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Splash_Screen from './src/Splash_Screen';
import Dashboard from './src/Dashboard';
import CropHealthMonitoring from './src/CropHealthMonitoring';
import SoilAnalysis from './src/SoilAnalysis';
import InsectDetection from './src/InsectDetection';
import DiseaseDetection from './src/DiseaseDetection';
import WeedDetection from './src/WeedDetection';
import PollinatorMonitoring from './src/PollinatorMonitoring';
//import TrackPollination from './src/TrackPollination';
import TrackingPage from './src/TrackingPage';
import Weather from './src/Weather';
import ForecastingSuggestions from './src/ForecastingSuggestions';
//import soilhistory from './src/soilhistory';
import BottomNavbar from './src/BottomNavbar';
import Agromonitoring from './src/Agromonitoring';
import News from './src/News';
import Profile from './src/Profile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash_Screen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CropHealthMonitoring" component={CropHealthMonitoring} />
        <Stack.Screen name="SoilAnalysis" component={SoilAnalysis} />
        <Stack.Screen name="InsectDetection" component={InsectDetection} />
        <Stack.Screen name="DiseaseDetection" component={DiseaseDetection} />
        <Stack.Screen name="WeedDetection" component={WeedDetection} />
        <Stack.Screen name="PollinatorMonitoring" component={PollinatorMonitoring} />
        <Stack.Screen name="TrackingPage" component={TrackingPage} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="ForecastingSuggestions" component={ForecastingSuggestions} />
        <Stack.Screen name="BottomNavbar" component={BottomNavbar} />
        <Stack.Screen name="Agromonitoring" component={Agromonitoring} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;