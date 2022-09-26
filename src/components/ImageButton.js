import React from "react";
import { TouchableOpacity , Image , StyleSheet} from "react-native";

const ImageButton=(props) => {

return(
<TouchableOpacity onPress={() => props.onPress()}>
<Image 
style={{...Styles.img,
     ...props.style }} 
source={props.source}
/>

</TouchableOpacity>

)
}

const Styles = StyleSheet.create({
img : {

height : 50,
width : 50,

}

})
export default ImageButton;