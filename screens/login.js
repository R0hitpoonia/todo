import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { useState } from "react";
  
  export default function LogIn() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    
  
    const onLogIn = () => {
      alert(email +" , "+ pwd);
    };
  
    return (
      <View style={styles.root}>
        <View style={styles.bgColor}>
          <View style={styles.topvector}>
            <View style={styles.logobox}></View>
          </View>
          <View
            style={{
              flext: 1,
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 50,
            }}
          >
            <View>
              <Text style={(styles.email, { paddingBottom: 10 })}>Email</Text>
              <View style={styles.emailbox}>
                <TextInput
                  style={styles.text}
                  type="email"
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  onChangeText={(e) => setEmail(e)}
                />
              </View>
            </View>
            <View style={{ padding: 20, paddingBottom:50 }}>
              <Text style={(styles.password, { paddingBottom: 10 })}>
                Password
              </Text>
              <View style={styles.passwordbox}>
                <TextInput
                  style={styles.text}
                  placeholder="Password"
                  onChangeText={(e) => setPwd(e)}
                />
              </View>
            </View>
  
            <TouchableOpacity style={styles.loginbox} onPress={onLogIn}>
              <Text style={styles.logIn}>LogIn</Text>
            </TouchableOpacity>
            <Text style={styles.alreadyHaveAnAccount}>
              Don't have an account.
            </Text>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    root: {
      width: "100%",
      height: "100%",
      alignItems: "flex-start",
      gap: 10,
      backgroundColor: "#FFF",
      flexDirection: "row",
    },
    text: {
      width: "100%",
      height: "100%",
      left: 5,
      top: 5,
    },
    bgColor: {
      width: "100%",
      height: "100%",
      flexShrink: 0,
      backgroundColor: "#FFF9EC",
    },
    topvector: {
      width: "100%",
      height: "25%",
      justifyContent:'center',
      alignItems:'center',
      position: "relative",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      backgroundColor: "#F9BE7C",
    },
    logobox: {
      width: "25%",
      height: "25%",
      position: "relative",
  
      backgroundColor: "#0D253F",
      borderRadius: 15,
    },
    emailbox: {
      width: 300,
      height: 60,
      position: "relative",
      justifyContent: "center",
      backgroundColor: "#FFF9CE",
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.22,
      shadowRadius: 9.22,
      elevation: 12,
      borderRadius: 10,
    },
    passwordbox: {
      width: 300,
      height: 60,
      position: "relative",
  
      backgroundColor: "#FFF9CE",
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.22,
      shadowRadius: 9.22,
      elevation: 12,
      borderRadius: 10,
    },
    loginbox: {
      width: 300,
      height: 60,
      
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#6488E4",
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.22,
      shadowRadius: 9.22,
      elevation: 12,
      borderRadius: 10,
    },
    email: {
      width: 70,
      height: 20,
      position: "relative",
  
      color: "#0D253F",
  
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "400",
    },
    password: {
      width: 91,
      height: 20,
      position: "relative",
  
      color: "#0D253F",
  
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "400",
    },
  
    alreadyHaveAnAccount: {
      position: "relative",
      marginTop: 50,
      color: "#0D253F",
  
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "500",
      textDecorationLine: "underline",
    },
    logIn: {
      width: 79,
      height: 30,
      position: "relative",
  
      color: "#fff",
  
      fontSize: 20,
      fontStyle: "normal",
      fontWeight: "900",
    },
  });
  