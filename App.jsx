/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      {/* <StatusBar />
      <NewAppScreen templateFileName="App.tsx" /> */}
      <Text style={{fontSize: 20,  color: "red", padding:100}}>Hello World</Text>
            <Text style={{fontSize: 20,  color: "red", padding:100}}>Hello World</Text>
      {/* <Text style={{fontSize: 20,  color: "red", padding:100}}>Hello World</Text>
      <Text style={{fontSize: 20,  color: "red", padding:100}}>Hello World</Text>
      <Text style={{fontSize: 20,  color: "red", padding:100}}>Hello World</Text> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
