import React, { useState, useEffect } from "react";
import {View , TextInput, Button , StyleSheet , Text , TouchableOpacity , Image, ScrollView} from "react-native";
import { BACKGROUND_COLOR, COLOR_BLACK, COLOR_GREY, DEL_IMG,} from "../../../res/drawables";
import { getAuth, sendPasswordResetEmail, } from "firebase/auth";


const Login=(props) => {

    
const [email , setEmail] = useState('')

    useEffect(() =>{
        
},[])

const onForgetPasswordPressed = async () =>{

    const auth = getAuth()
    if(email.includes('@')){
        try { 
            await sendPasswordResetEmail(auth, email)
            alert('Check Your E-Mail to reset Password .')
            props.navigation.navigate('Login')
        }
        catch(e){
            alert(e.message)
        }
        
        
    }else {
    alert('Kindly enter Email to recover your Password.')
}
}

 return(
    
    <View style={Styles.container}>
        <Image 
        style={Styles.logo}
        source={require("../../../assets/logo.png")}
        />

        <View style={{...Styles.card , height : '8%'}}>
            <TextInput 
            style={{margin: 5}}
            placeholder = "Enter Email Here"
            value={email}
            onChangeText={(t) => setEmail(t)}            
            />
        </View>
        
        <View >
        <TouchableOpacity
        style= {Styles.btn}
        onPress={() => onForgetPasswordPressed()}>
        <Text style={Styles.txt}>Enter your Email to Reset Password  </Text>    
        </TouchableOpacity>
        </View>
        </View>
    
    )
    }
    

    const Styles=StyleSheet.create({
    container : { 
    flex : 1,
    backgroundColor : BACKGROUND_COLOR,
    justifyContent : 'center'
    },
    card : {
    backgroundColor : COLOR_GREY,
    borderRadius : 25,
    margin : 10,
    borderColor : COLOR_BLACK,
    borderWidth : 1,
    paddingVertical: 0,
    },     
    logo: {
    height: 150,
    width: 150,
    alignSelf: 'center'
               
    },
    btn :{
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 15,
    backgroundColor: "#012f86",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "50%",
    height : 40,
    },

    txt :{
    fontSize: 15,
    fontWeight: "800",
    color: "white",
    textAlign : "center",
    fontWeight : "200",
    },

    })
    export default Login;