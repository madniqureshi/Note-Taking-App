import React, { useState, useEffect } from "react";
import {View , TextInput, Button , StyleSheet , Text , TouchableOpacity ,ScrollView} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BACKGROUND_COLOR, COLOR_BLACK, COLOR_GREY, DEL_IMG,} from "../../../res/drawables";
import { AdMobBanner } from "expo-ads-admob";
import {getFirestore , collection, addDoc, setDoc , doc} from "firebase/firestore";
import App from "../../../api/firebase"
import { getAuth } from "firebase/auth";

const CreateNote=(props) => {

    
    const db= getFirestore(App);
    const auth= getAuth()
    const {email , title : noteTitle , description : noteDescription } = props.route.params

const [title , setTitle] = useState(noteTitle)
const [description , setDescription] = useState(noteDescription)

    useEffect(() =>{
    
},[])

// const loadData = async () => {
//     if(noteTitle){
//        let description = await AsyncStorage.getItem(noteTitle)
//        setTitle(noteTitle)
//        setDescription(description)
//     }
// }

  const onAddPressed = async () => {
        if (title  != '' && description != '') {
            try {

                const docRef = await setDoc(doc(db, email, title), {
                    title: title,
                    description: description,
                    
                  });
                
                //  await setDoc(doc(db, email ,title), {
                //  description,
                    
                //   });


            //       console.log("Document written with ID: ",);

            //      let value= await AsyncStorage.getItem(title) 
            //        if (value && !noteTitle) {
            //          alert('Title already exist')
            //       }
            // else {
            //     await AsyncStorage.setItem(title, description)
            //     // setTitle('')
            //     // setDescription('')
            //     alert('Note Saved.')
            //     props.navigation.replace('Main')
            // }
                alert('Note Saved')
                props.navigation.goBack()
        }
          catch (e) {

            console.log(e)
        }
    }
        else {
            alert('Add Title and Description.')
        }
    }
 
    const Delete= async() => {
        try {
            await AsyncStorage.removeItem(title);
            props.navigation.replace('Main')
        }
        catch(e) {
               console.log(e)
        }
    }


    return(
    
        
    <View style={Styles.container}>
        <View style={{...Styles.card , height : '8%'}}>
            <TextInput 
            style={{margin : 10 }}
            placeholder = "Enter Title"
            value={title}
            editable={noteTitle ? false : true }
            onChangeText={(t) => setTitle(t)}            
            />
        </View>

    
        <View style={{...Styles.card , height : '40%'}}>
        <TextInput 
            style={{margin : 10 }}
            placeholder = "Enter Description"
            multiline = {true}
            value={description}
            onChangeText={(t) => setDescription(t)} 
            />
        </View>


        <View style={{flexDirection:'column', alignSelf:'center'}}>

        <View >
        <TouchableOpacity
         style= {Styles.btn}
        onPress={() =>onAddPressed()}>
        {noteTitle ? <Text style={Styles.txt}>Update Note</Text> :  <Text style={Styles.txt}>save Note</Text>}
        </TouchableOpacity>
        </View>



        {/* <View style={Styles.add_btn}>
        <Button
        // title={ noteTitle ? "update Note" : "add Note"}
        onPress={() => onAddPressed()}
        /> */}


        <View style={{ justifyContent: 'center', flexDirection : 'column'}}>
        <TouchableOpacity onPress={() => Delete()}>
         <Text style={Styles.del_txt}>Delete</Text>    
    
        </TouchableOpacity>
        </View>
        </View>
        
        

<View style={Styles.ad_mob}>
    <AdMobBanner
    bannerSize="banner"
    adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
    servePersonalizedAds // true or false
    
    />
</View>
</View>    
    
    )
    }
    
    const Styles=StyleSheet.create({
    container : { 
    flex : 1,
    backgroundColor : BACKGROUND_COLOR,
    },
    card : {
    backgroundColor : COLOR_GREY,
    borderRadius : 25,
    margin : 15,
    borderColor : COLOR_BLACK,
    borderWidth : 1,
    

    },
    btn :{
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 15,
        backgroundColor: "#012f86",
        alignSelf: "center",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "60%",
        height : 40,
        },
    
        txt :{
        fontSize: 14,
        fontWeight: "500",
        color: "white",
        textAlign : "center",
        fontWeight : "bold",
        },
    del_txt : {
        
        color: 'red',
        fontSize : 20,
        fontWeight : '50',
        textAlign : 'center',
        margin : 6,
        // marginTop: -60,
        // marginLeft: 150,
        },
        add_btn: {
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
        
            ad_mob: {
                 
                margin: 40,
                // marginLeft : 10,
                // marginTop : 50,
                
                }

    })
    export default CreateNote;