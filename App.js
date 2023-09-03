import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "./screens/login";
import SignUp from "./screens/signup";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="login" component={LogIn} />
        <stack.Screen name="signup" component={SignUp} />
        <stack.Screen name="home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
