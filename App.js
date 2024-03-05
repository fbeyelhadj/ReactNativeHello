import React from 'react';
import { Text, View, StyleSheet, Animated, Easing } from 'react-native';

const FunHelloWorldApp = () => {
  const spinValue = new Animated.Value(0);

  // Function to start spinning animation
  const startSpin = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  // Interpolate rotation value for spin animation
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  // Call startSpin function when component mounts
  React.useEffect(() => {
    startSpin();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ rotate: spin }] }]}>
        <Text style={styles.text}>Hello, world!</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffcc00', // Fun yellow background color
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#ff0066', // Fun pink box color
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#ffffff', // White text color
    fontWeight: 'bold',
    textShadowColor: '#000000', // Text shadow for better visibility
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default FunHelloWorldApp;
