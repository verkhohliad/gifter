import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
