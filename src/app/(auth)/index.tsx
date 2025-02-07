
import { View, Text, StyleSheet, SafeAreaView, Image, ActivityIndicator } from 'react-native'; // Added StyleSheet import
import React, { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';
import imagePath from '@/src/constants/imagePath';

const Auth = () => {
  const [isLoading, setIsLoading]=useState(false);

  let loading_timeout=()=>{
    setIsLoading(true)
    setTimeout(navigate_to_welcome,3000);
  }

  let navigate_to_welcome =()=>{
   router.push("/(auth)/terms_agree")
  }

  useEffect(()=>{
    const timeout=  setTimeout(loading_timeout,2000);
  
  return()=>{
    clearTimeout(timeout)
  }
  },[]);



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
          <ActivityIndicator size={49}/>
          <Text style={styles.loading_text}>Loading...</Text>
          
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
  },
  loading_text:{
    fontSize:20,
    color:"#2980b9",
    fontWeight:"bold"
  }
});

export default Auth;
