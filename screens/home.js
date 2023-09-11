import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { Card, ListItem } from "react-native-elements";
import * as Progress from "react-native-progress";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import Icon from "react-native-vector-icons/FontAwesome";
import { tasks } from "../assets/dryrun/tasks";
import { projects } from "../assets/dryrun/projects";

const Home = ({ route, navigation }) => {
  const user = route.params;
  const [data, setData] = useState({});

  const getdata = async () => {
    const docRef = doc(db, "user", user);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const td = docSnap.data();
      setData(td);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const logOut = () => {
    signOut(auth);
    console.log("tologin");
    navigation.replace("login");
  };

  return (
    <SafeAreaView style={style.main}>
      <View style={style.top}>
        <TouchableOpacity
          style={{ width: 30, marginBottom: 15, marginLeft: 20, marginTop: 10 }}
          onPress={() => {
            alert("menu");
          }}
        >
          <Icon name="bars" size={30} />
        </TouchableOpacity>

        <View style={style.profileWrapper}>
          <Image
            src={
              "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            }
            style={style.profileImg}
            contentFit="cover"
            alt="Image"
          />
          <View style={style.nameWrapper}>
            <Text>Welcome,</Text>
            <Text style={style.name}>Rohit Poonia</Text>
            <Text style={style.tag}>Designer</Text>
          </View>
        </View>
      </View>
      <View style={style.todayTaskWrapper}>
        <View style={style.todayTaskTextWrapper}>
          <Text style={style.todaysTaskText}> Today’s Task </Text>
          <View style={style.iconOut}>
            <Icon name="plus" color="#fff" size={20} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={style.viewTask}>
          {tasks?.map((task) => {
            return (
              <View key={task.id} style={style.todocard}>
                {task.isDone ? (
                  <Icon name="check-circle" color={"#95E464"} size={32} />
                ) : (
                  <Icon name="minus-circle" color={"#E46472"} size={32} />
                )}
                <Text style={style.taskText}>{task.title}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View>
        <View style={style.todayTaskTextWrapper}>
          <Text style={style.todaysTaskText}> Projects </Text>
          <View style={style.iconOut}>
            <Icon name="plus" color="#fff" size={20} />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={style.projectScroll}
          horizontal={true}
        >
          {projects?.map((p) => {
            return (
              <Card key={p.id} containerStyle={style.projectCard}>
                <Card.Title style={{ color: "#FFF9EC" }}>{p.title}</Card.Title>
                <View style={{height:60}}>
                  <Text
                    numberOfLines={3}
                    style={{ marginLeft: 10, width: 120 }}
                  >
                    {p.description}
                  </Text>
                </View>
                <Progress.Bar
                  marginTop={20}
                  color="#FFF9EC"
                  progress={p.percentComplete / 100}
                  height={20}
                  width={150}
                >
                  <Text
                    style={{
                      position: "absolute",
                      color: "#0D253F",
                      marginLeft: 70,
                      fontWeight: 600,
                    }}
                  >
                    {p.percentComplete} %
                  </Text>
                </Progress.Bar>
              </Card>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  try: {
    height: 50,
    width: 50,
    backgroundColor: "#0D253F",
  },
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF9EC",
  },
  top: {
    width: "100%",
    height: 225,
    flexShrink: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "#F9BE7C",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  profileWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    marginLeft: 10,
  },
  nameWrapper: {
    height: 120,
    paddingLeft: 20,
    marginBottom: 10,
    justifyContent: "center",
  },
  name: {
    color: "#000",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "700",
  },
  tag: {
    color: "#757070",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
  },
  todayTaskWrapper: {},
  todayTaskTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  todaysTaskText: {
    width: 161,
    height: 30,
    color: "#000",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  iconOut: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: "#0D253F",
    marginRight: 20,
  },
  viewTask: {
    marginTop: 20,
    width: "100%",
    height: 250,
  },
  todocard: {
    height: 60,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  taskText: {
    marginLeft: 25,
    fontSize: 22,
  },
  projectScroll: {
    width: "94%",
    margin: 10,
  },
  projectCard: {
    backgroundColor: "#309397",
    height: 170,
    borderRadius: 20,
  },
});

export default Home;
