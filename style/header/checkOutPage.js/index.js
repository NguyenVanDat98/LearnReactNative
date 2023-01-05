import {StyleSheet} from 'react-native';

export const styleCheckout = StyleSheet.create({
  productPreView: {
    borderRadius: 15,
    borderWidth: 1,
    marginHorizontal: 80,
    marginTop:15,
    overflow:"hidden"
  },
  preView: {
    flexDirection: 'column',

    // paddingVertical: 12,
    width: '100%',


    // height:10,
  },
  product: {
    backgroundColor: 'rgba(206, 206, 206, 0.664)',
    padding: 4,
    flexGrow: 1,
    paddingHorizontal: 20,
    
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    color: 'black',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  information: {
    flexGrow: 1,
    backgroundColor: 'rgba(206, 206, 206, 0.664)',
    marginTop: 20,
    marginHorizontal: 40,
    borderRadius: 16,
    padding: 8,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 18,
    color: 'black',
    paddingVertical: 1,
    marginBottom: 10,
  },
  label: {
    color: 'black',
    fontSize: 18,
  },
})
