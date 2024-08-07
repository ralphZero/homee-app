import { HeroImage } from '@components/HeaderImage';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, StatusBar } from 'react-native';

export const AuthPage = () => {
  return (
    <View>
      <HeroImage />
      <SafeAreaView>
        <Image style={styles.logo} source={require('@assets/logo.png')} />
      </SafeAreaView>
      <StatusBar barStyle={'light-content'} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 60,
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: 20,
  },
});
