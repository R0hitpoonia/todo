import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "./screens/login";
import SignUp from "./screens/signup";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import { currentUser } from "firebase/auth";
import { useEffect } from "react";
import { addTask } from "./screens/addTask";

const stack = createNativeStackNavigator();

const isSign = currentUser == null ? false : true;

export default function App() {
  useEffect(() => {
    console.log(isSign);
  }, [isSign]);
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="login"
      >
        <stack.Screen name="login" component={LogIn} />
        <stack.Screen name="signup" component={SignUp} />
        <stack.Screen name="home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
