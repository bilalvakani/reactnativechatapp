import { View, Text,StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { ScaledSheet, moderateScale, scale, verticalScale } from 'react-native-size-matters';
import imagePath from '@/src/constants/imagePath';


const terms_agree = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.welcome_text}>Welcome to ChatApp</Text>
      <Image source={imagePath.welcome} style={styles.Image_style}
       resizeMode='contain'/>
       <Text style={styles.description_text}>Read Our <Text style={styles.linK_text}> Privacy Policy.</Text>Tap "Agree and Continue" to accept
         <Text style={styles.linK_text}> the Teams oF Service.</Text> </Text>
     </View>
     <View style={styles.footer}>
      <Text style={styles.from_text}>From</Text>
           <Text style={styles.from_facebook}>Facebook</Text>
     </View>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create(
  {
    container:{
      flex:1,
      backgroundColor:"white",
      alignItems:"center",
      justifyContent:"space-between",
      paddingVertical:verticalScale(84),
      paddingHorizontal:scale(30)
    },
    header:{
      alignItems:'center',
      gap:verticalScale(30)
    },
    footer:{
      alignItems:"center"
     
    },
    from_text:{
    fontSize:moderateScale(12),
    color:"#867373"
    },
    from_facebook:{
      fontSize:moderateScale(12),
      color:"#000",
      textTransform:"uppercase",
      fontWeight:"600"
    },
    welcome_text:{
      fontSize:moderateScale(20),
      fontWeight:"bold",
      color:"black"
    },
    Image_style:{
      width: moderateScale(300),
      height: moderateScale(400),
      borderRadius: moderateScale(250),
    },
    description_text:{
    textAlign:"center",
    fontSize:moderateScale(13),
    color:"black"
    },
    linK_text:{
     color:"#0C42CC"
    }
  }
)


export default terms_agree