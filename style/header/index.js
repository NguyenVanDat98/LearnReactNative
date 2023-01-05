import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    backgroundColor:"white",
    flexDirection:"column",
  },
  header: {
    flexDirection: 'row',
    backgroundColor:"white",
    margin:0,
    height: 60,
    alignContent:"center",
    width: "100%",
  },
  button: {
    borderWidth: 0.5,
    color: 'white',
    margin: 5,
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  text:{
    color: "black",
    fontSize:20,
    textAlign:"center",
    marginHorizontal:10
  }
});
export default style;
