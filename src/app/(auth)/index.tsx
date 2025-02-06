
import { View, Text, StyleSheet, SafeAreaView, Image, ActivityIndicator } from 'react-native'; // Added StyleSheet import
import React, { useState } from 'react';
import { Link } from 'expo-router';
import imagePath from '@/src/constants/imagePath';

const Auth = () => {
  const [isLoading, setIsLoading]=useState(true);
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}></View>
     <View style={styles.body}>
      <Image source={imagePath.logo} style={styles.logo}
      resizeMode='contain' />
     </View>
     <View style={styles.footer}>
      {
        isLoading ? (
          <>
          <ActivityIndicator/>
          
          </>
        ):(
      <>
     <Text style={styles.from_text}>From</Text>
     <Text style={styles.from_facebook}>Facebook</Text>
     </>
     )}
     </View>
    
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:70,
  },
  header:{
    
  },
  body:{
    
  },
  footer:{ 
   alignItems:"center",
  },
  from_text:{
    fontSize:12,
    color:"#867373"
  },
  from_facebook:{
fontSize:15,
    color:"black"
  },
  logo:{
  width:220,
  height:200,
  borderRadius:10,
  }
});

export default Auth;
