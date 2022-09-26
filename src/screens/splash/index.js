import react from "react";
import  { View , Text , StyleSheet , Image } from "react-native";
import { BACKGROUND_COLOR  } from "../../../res/drawables"

const Splash = (props) => {

setTimeout(() => {
props.navigation.replace('Login')
},3000)

return(
<View style={Styles.container}>
<Image style={Styles.logo}
   source={require('../../../assets/logo.png')}
/>



</View>

)
} 
 const Styles = StyleSheet.create({
  container : {
  flex : 1,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor: BACKGROUND_COLOR,

  },

  logo: {
 height: 150,
 width: 150,

  },

 })
 export default Splash