import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, StatusBar } from 'react-native';

const AuthPage = () => {
  return (
    <View>
      <HeroImage />
      <SafeAreaView>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </SafeAreaView>
      <StatusBar barStyle={'light-content'} />
    </View>
  );
};

const HeroImage = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.imageShadow}
        source={require('../assets/shadow.png')}
      />
      <Image
        style={styles.heroImage}
        source={require('../assets/hero_image.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  imageShadow: {
    position: 'absolute',
    zIndex: 2,
  },
  heroImage: {
    width: '100%',
  },
  logo: {
    height: 60,
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: 20,
  },
});

export default AuthPage;
