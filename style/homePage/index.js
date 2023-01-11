import { StyleSheet } from "react-native";

const styleHomePage = StyleSheet.create({
container :{
    width:"100%",
    height:"100%",
    position:"relative"
},
    image: {
        position:"absolute",
        width:"100%",
        height:"100%"
    },
    option:{
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
        marginVertical:80,
        backgroundColor:"rgba(206, 206, 206, 0.564)",
        paddingVertical:20,
        borderRadius:20,
        marginHorizontal:30,

    } 
    ,
    title:{
        backgroundColor:"transparient",
        color:"white",
        fontSize: 30,
        fontWeight:"500"
    },
    Ingredient:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        alignItems:"center",
        marginVertical:8
        
    },
    label:{
        fontSize:30,
        color:"black",
        fontWeight:"500"

    },
    groupBtn:{
        flexDirection:"row"
    }
})
export default styleHomePage

