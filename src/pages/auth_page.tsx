import { HeroImage } from '@components/HeaderImage';
import { Divider } from '@components/Divider';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, StatusBar } from 'react-native';
import Button from 'react-native-ui-lib/button';
import Text from 'react-native-ui-lib/text';
import { TouchableOpacity } from 'react-native-ui-lib';

export const AuthPage = () => {
  return (
    <View>
      <HeroImage />
      <SafeAreaView>
        <Image style={styles.logo} source={require('@assets/logo.png')} />
      </SafeAreaView>
      <View style={styles.contentArea}>
        <Text center black text30>
          Sign up for Homee
        </Text>
        <Divider />
        <Text center grey30>
          Discover perfect property with easy-to-use app
        </Text>
        <Divider space={30} />
        <Button
          color="#333333"
          outlineColor="#a3a3a3"
          outline
          label={'Sign in with Google'}
          labelStyle={{ fontSize: 18 }}
        />
        <Divider space={20} />
        <Button
          color="#333333"
          outlineColor="#a3a3a3"
          outline
          label={'Sign in with Apple'}
          labelStyle={{ fontSize: 18 }}
        />
        <Divider space={30} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.orRules} />
          <Text>Or</Text>
          <View style={styles.orRules} />
        </View>
        <Divider space={30} />
        <Button
          color="#ffffff"
          backgroundColor="#000000"
          label={'Create account'}
          labelStyle={{ fontSize: 18 }}
        />
        <Divider space={30} />
        <View style={styles.signInCta}>
          <Text center>Already have an account? </Text>
          <TouchableOpacity onPress={() => console.log('pressed!')}>
            <Text purple40>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  contentArea: {
    marginTop: 230,
    height: '100%',
    padding: 18,
    paddingTop: 42,
  },
  orRules: {
    height: 1,
    flexGrow: 1,
    backgroundColor: '#d3d3d3',
  },
  signInCta: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
