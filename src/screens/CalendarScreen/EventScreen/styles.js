import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  eventScreen: {
    flex: 1,
  },
  personal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    margin: 20,
  },
  name: {
    fontSize: 24,
  },
  details: {
    margin: 30,
  },
  detail: {
    fontSize: 20,
    margin: 10,
  },
});

export default styles;
