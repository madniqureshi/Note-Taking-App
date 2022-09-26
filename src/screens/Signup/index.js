import React, { useState, useEffect } from "react";
import {View , TextInput, Button , StyleSheet , Text , TouchableOpacity , Image , ScrollView} from "react-native";
import { BACKGROUND_COLOR, COLOR_BLACK, COLOR_GREY, DEL_IMG,} from "../../../res/drawables";
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";
import { addDoc, doc, getFirestore ,collection} from "firebase/firestore";
import App from "../../../api/firebase";
import { COLLECTION_USER } from "../../../res/strings";

const Signup=(props) => {

    const db= getFirestore(App)

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


    useEffect(() =>{
        
},[])

const onLoginPressed = async () => {
    const auth = getAuth();
    if(email.includes('@') && password){
    try{

        await addDoc(collection(db , email),{})

        let res = await createUserWithEmailAndPassword(auth , email , password)

        alert('User Craeted successfully ')
        props.navigation.goBack()
    } catch(e){
       alert(e.message) }
    } else {
        alert('enter email and password')
    }
}

const onAlreadyAccountPressed = () => {
    props.navigation.goBack()
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
    onPress={() => onLoginPressed()}
    >
    <Text style={Styles.txt}>Login </Text>    
    </TouchableOpacity>
    </View>

    <View>
    <TouchableOpacity
     style= {Styles.btn}
    onPress={() => onAlreadyAccountPressed()}
    >
    <Text style={Styles.txt}> Already Have an Account </Text> 
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
    export default Signup;