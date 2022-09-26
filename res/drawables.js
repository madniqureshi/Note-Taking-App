export const BACKGROUND_COLOR = '#fffafa'
export const COLOR_GREY = '#ffffff'
export const COLOR_BLACK = '#000000'

const PATH = '../assets'
export const ADD_BUTTON_IMG = (require(PATH + '/add_button.png'))
export const NOTES_IMG =(require(PATH +'/add_notes.png'))
export const DEL_IMG =(require(PATH +'/DEL_IMG.png'))




// After REturn this part will be executed

    //         <TouchableOpacity onPress={
    //             () =>{
    //                 props.navigation.replace('CreateNote',{ noteTitle:item })
    //             }
    //         }>
    //          <View style={{margin : 5 }}>
    //             <Image
    //             style={Styles.noteIcon}
    //             source={NOTES_IMG}
    //             />  
                
    //             <TouchableOpacity 
                
    //             onPress={
    //                  () =>Delete(noteTitle)
    //                 }>
    //             <Image
    //             style={Styles.del_img}
    //             source={DEL_IMG}
    //             />
    //             </TouchableOpacity>
                

    //             <Text style={Styles.text}>{item}</Text>

    //              </View>
    //              </TouchableOpacity>

    //     )
    // }}