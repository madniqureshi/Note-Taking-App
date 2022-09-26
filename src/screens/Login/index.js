import React, { useState, useEffect } from "react";
import {View , TextInput, Button , StyleSheet , Text , TouchableOpacity , Image, ScrollView} from "react-native";
import { BACKGROUND_COLOR, COLOR_BLACK, COLOR_GREY, DEL_IMG,} from "../../../res/drawables";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";


const Login=(props) => {

    
const [email , setEmail] = useState('')
const [password , setPassword] = useState('')

    useEffect(() =>{
        
},)

const onLoginPressed = async() =>{
    
    // signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
    //     alert('user signin')
    // }).catch((e) => {
    //     alert(e.message)
    // })
    
    const auth=getAuth()
    if(email.includes('@' && password)) {
    try {
       
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        // console.log(userCredential)
        alert('signed in')
        props.navigation.navigate('Main',{email : email})
}catch (e){
    alert(e.message)
}
    }else {
        alert('kindly enter your email & password ')
    }
 
}

const onForgetPasswordPressed =  () => {


    props.navigation.navigate('ForgetPassword')
    // const auth = getAuth()
    // if(email.includes('@')){
    //     try { 
    //         await sendPasswordResetEmail(auth, email)
            
    //         alert('Check Your E-Mail to reset Password .')
    //     }
    //     catch(e){
    //         alert(e.message)
    //     }
        
        
    // }else {
    // alert('Kindly enter Email to recover your Password.')
// }
}

const onSignupPressed = () =>{
    props.navigation.navigate('Signup')
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
    
        <View style={{...Styles.card , height : '8%'}}>

        <TextInput 
            style={{margin:5}}
            placeholder = "Enter Password"
            multiline = {false}
            value={password}
            secureTextEntry={true}
            onChangeText={(t) => setPassword(t)} 
                      
            />

        </View>
        
        <View >
        <TouchableOpacity
        style= {Styles.btn}
        >
        <Text 
        style={Styles.txt}
        onPress={() => onLoginPressed()}
        >Login </Text>    
        </TouchableOpacity>
        </View>

        <View >
        <TouchableOpacity
         style= {Styles.btn}
        onPress={() =>onForgetPasswordPressed()}>
        <Text style={Styles.txt}>Forgot Password</Text> 
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity onPress={() => onSignupPressed()}>
        <Text style={Styles.txt_noacc}>Does not have an Account ?</Text>
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
    fontSize: 14,
    fontWeight: "500",
    color: "white",
    textAlign : "center",
    fontWeight : "bold",
    },

    txt_noacc:{
    fontSize: 14,
    fontWeight: "500",
    color: "#012f86",
    textAlign : "center",
    fontWeight : "bold",
    },


    })
    export default Login;