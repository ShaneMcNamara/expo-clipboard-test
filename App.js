import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Constants from 'expo-constants';
import CopyButton from './CopyButton'
const {
  manifest: {
    android: {
      versionCode = 'unknown',
    } = {},
  } = {},
} = Constants;

export default function App() {
  return (
    <View style={styles.container}>
      <CopyButton text='Copy Test'/>
      <TextInput style={styles.text}/>
      <StatusBar style="auto" />
      <Text style={styles.version}>{versionCode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '90%',
    minHeight: 30,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 20,
  },
  version: {
    fontSize: 20
  }
});
