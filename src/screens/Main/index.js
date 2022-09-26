import React, { useEffect, useState } from "react";
import { FlatList,View , Text , StyleSheet , TouchableOpacity ,Image, Button, Alert, ActivityIndicator} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADD_BUTTON_IMG , NOTES_IMG, } from "../../../res/drawables";
import ImageButton from "../../components/ImageButton";
import { AdMobBanner } from 'expo-ads-admob';
import  firebaseApp  from "../../../api/firebase";
import { getAuth } from "firebase/auth";
import { collection , getDocs , getFirestore ,query , onSnapshot} from "firebase/firestore";
import { async } from "@firebase/util";
import App from "../../../api/firebase";

const Main=(props) => { 

    // let { noteTitle } = props.route.params
    const auth= getAuth()
    alert('github is not working.')

    const [data , setData] = useState([])
    const [selectedNote, setSelectedNote] = useState([])
    const [loading, setLoading] = useState(false)
    const { email } = props.route.params
    const db = getFirestore(App)
    


    const loadData = async() => {
        let unsub;
        setLoading(true)
    
        // const querySnapshot = await getDocs(collection(db, email));
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        //     keys.push(doc.data())
        // });
        
        const q = query(collection(db, email))
        try {
            let keys = []
            unsub = onSnapshot(q, (querySnapshot) => {
              keys = []
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                keys.push(doc.data())
            });
            setData(keys)
            setLoading(false)
            unsub();
          });
          
          console.log('Keys are ' + keys)
        } catch (e){
        }
        
     
    }

    useEffect(() => {

           loadData()
        // loadAllKeyFromAsyncStorage()

    },[])

    // const loadAllKeyFromAsyncStorage = async () => {
    //  let keys = await AsyncStorage.getAllKeys()
    // if (keys.length != data.length)
    //  setData(keys)

    // }

    const Delete= async(item) => {
        alert('deleted')
        try {
            await AsyncStorage.removeItem(item);
            // props.navigation.navigate('Main')
        }
        
        catch(e) {
               console.log(e)
        }
    }

return(
<View style={Styles.container}>
    {loading ? <ActivityIndicator /> : null}
<FlatList
    data={data}
    numColumns={3}
    renderItem={({ item }) =>{
        return(
            <TouchableOpacity 
            onLongPress={() => {
                Alert.alert(
                    "Alert Title",
                    "Do You want to Delete" + {item},
                    [
                        {
                            text : 'Cancle',
                            style : 'cancle'
                         },
                         {
                            text : 'DELETE',
                            style : 'cancle',
                            onPress : () => Delete(item)
                         }
                    ]
                )
            }}
            onPress={
                () => {
                    props.navigation.navigate('CreateNote',{title:item.title, description : item.description , email})
                }
                }>
                    <View style={{margin : 5}}>
                    <Image
                    style={Styles.noteIcon}
                    source={NOTES_IMG}
                /> 

                <Text style={Styles.text}>{item.title}</Text>
                    </View>

            </TouchableOpacity>
        )
            }}

    keyExtractor = {(item) => item }
    />
<ImageButton
style={{ alignSelf : 'flex-end' }}
source={ADD_BUTTON_IMG}
onPress={() => props.navigation.navigate('CreateNote' ,{ title : null, description : null , email})}
/>

<AdMobBanner
  bannerSize="smartBannerLandscape"
  adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
  
  />

</View>

)
}

const Styles=StyleSheet.create({
container :{
flex : 1,
justifyContent : 'space-between',

},
noteIcon :{
    height:100,
    width:100,
},
text:{
fontWeight: 'bold',
textAlign: 'center',
// alignSelf: 'centre',
width: 80
},


})
export default Main;