import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from './components/Notifications.jsx';
import { NavigationContainer } from '@react-navigation/native';
// import Notifications from './components/Notifications';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <NewAppScreen templateFileName="App.tsx" /> */}
        <Tab name='Notifications' component={Notifications} />
      </Tab.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   {/* <StatusBar />
    //   <Text style={{fontSize: 20,  color: "red", padding:100}}>Hello World</Text>
    //         <Text style={{fontSize: 20,  color: "red", padding:100}}>Hello World</Text>
    //   {/* <Text style={{fontSize: 20,  color: "red", padding:100}}>Hello World</Text>
    //   <Text style={{fontSize: 20,  color: "red", padding:100}}>Hello World</Text>
    //   <Text style={{fontSize: 20,  color: "red", padding:100}}>Hello World</Text> */}

    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
