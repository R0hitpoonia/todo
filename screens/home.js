import { View, Text,StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View>
      <Text style={style.main}>Hoxme</Text>
    </View>
  );
};

const style = StyleSheet.create({
    main:{
        width:'100%',
        marginTop:"100%",
        backgroundColor:'#0D253F',
        color: "#fff",
    },
})

export default Home;
