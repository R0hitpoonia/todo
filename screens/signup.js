import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [validemail, setValidemail] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [pwdmatch, setPwdmatch] = useState(false);

  const onSignup = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true) {
      setValidemail(true);
    } else {
    }
    if (!validemail) {
      alert("Please enter a valid Email");
    } else {
      if (!pwd.length || !cpwd || !email) alert("please fill all the fields");
      else if (!(pwd === cpwd)) alert("Passwords do not match");
      else if (!isSelected) alert("Please accept terms and conditions!");
      else console.log({ emails: email, password: pwd });
    }
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
          <View style={{ padding: 20 }}>
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
          <View>
            <Text style={(styles.confirmPassword, { paddingBottom: 10 })}>
              Confirm Password
            </Text>
            <View style={styles.confirmbox}>
              <TextInput
                style={styles.text}
                placeholder="Confirm Password"
                onChangeText={(e) => setCpwd(e)}
              />
            </View>
          </View>

          <View
            style={{
              width: "80%",
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Checkbox
              style={styles.rectangle13}
              value={isSelected}
              onValueChange={setSelection}
            />
            <Text style={(styles.termsAndConditions, { paddingLeft: 10 })}>
              Terms and Conditions.
            </Text>
          </View>
          <TouchableOpacity style={styles.signupbox} onPress={onSignup}>
            <Text style={styles.signUp}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.alreadyHaveAnAccount}
              onPress={() => navigation.navigate("login")}
            >
              Already have an account.
            </Text>
          </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
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
  confirmbox: {
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
  signupbox: {
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
  confirmPassword: {
    width: 159,
    height: 20,
    position: "relative",

    color: "#0D253F",

    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  termsAndConditions: {
    width: 216,
    height: 20,
    position: "relative",

    color: "#626262",

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
  signUp: {
    width: 79,
    height: 30,
    position: "relative",

    color: "#fff",

    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "900",
  },
  rectangle13: {
    width: 16,
    height: 16,
    position: "relative",

    backgroundColor: "#6488E4",
    borderRadius: 5,
  },
});
