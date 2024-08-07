import { View, Image, StyleSheet } from 'react-native';

export const HeroImage = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.imageShadow}
        source={require('@assets/shadow.png')}
      />
      <Image
        style={styles.heroImage}
        source={require('@assets/hero_image.png')}
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
});
