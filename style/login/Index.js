import {StyleSheet} from 'react-native';

const styleLogin = StyleSheet.create({
  form: {
    width: '100%',
    marginTop: '20%',
    backgroundColor: 'white',
  },
  ItemInput: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 15,
    textAlign: 'left',
    flexGrow: 1,
    color: 'black',
    paddingHorizontal: 10,
    fontSize: 18,
    overflow: 'scroll',
    maxWidth: '70%',
  },
  label: {
    width: '30%',
    fontSize: 18,
    color: 'black',
  },
  icon: {
    position: 'absolute',
    right: 40,
    bottom: 16,
  },
  buttonGroup: {
    width: '100%',
    height: '20%',
    paddingHorizontal: '20%',
    marginVertical: 50,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
export default styleLogin;
