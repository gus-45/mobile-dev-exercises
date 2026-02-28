import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const img1 = require('./assets/img1.png');
  const img2 = require('./assets/img2.png');
  const img3 = require('./assets/img3.png');
  const img4 = require('./assets/img4.png');
  const img5 = require('./assets/img5.png');
  const img6 = require('./assets/img6.png');

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={img1} style={styles.img}/>
        <Image source={img2} style={styles.img}/>
        <Image source={img3} style={styles.img}/>
        <Image source={img4} style={styles.img}/>
        <Image source={img5} style={styles.img}/>
        <Image source={img6} style={styles.img}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  img: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});