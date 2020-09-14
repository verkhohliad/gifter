import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 20,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  details: {
    right: 0,
    top: 0,
    position: 'absolute',
    color: '#bebebe',
  },
  title: {
    fontSize: 20,
    marginLeft: 15,
  },
});

export default styles;
