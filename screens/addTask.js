import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


export function addTask() {
  return (
    <View style={styles.root}>
      <View style={styles.bgColor} />
      <View style={styles.rectangle1} />
      <Text style={styles.rohitPoonia}>Rohit Poonia</Text>
      <Text style={styles.designer}>designer</Text>
      <Text style={styles.todaysTasks}>Today’s Tasks</Text>
      <Text style={styles.activeProjects}>Active Projects</Text>
      <View style={styles.task}>
        <Text style={styles.brush}>Brush</Text>
        <Text style={styles.breakfast}>Breakfast</Text>
        <Text style={styles.typingTest}>Typing Test</Text>
        <Text style={styles.makeUiFromProject1}>Make UI from Project 1</Text>
      </View>
      <View style={styles.rectangle14} />
      <View style={styles.rectangle16} />
      <View style={styles.rectangle15} />
      <View style={styles.rectangle17} />
      <View style={styles.group2}>
        <Text style={styles.$1694257663499}>+</Text>
      </View>
      <View style={styles.group3}>
        <Text style={styles.$16942576635322}>+</Text>
      </View>
      <MenuSvgrepoCom1 />
      <SearchSvgrepoCom1 />
      <Image
        source={{ uri: maleUser }}
        style={{ width: 127, height: 127 }}
        contentFit="cover"
      />
      <Vector />
      <EditClipboardSvgrepoCom />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 430,
    height: 932,
    backgroundColor: "#FFF",
  },
  bgColor: {
    width: 430,
    height: 932,
    flexShrink: 0,
    backgroundColor: "#FFF9EC",
  },
  rectangle1: {
    width: 430,
    height: 225,
    flexShrink: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "#F9BE7C",
  },
  rohitPoonia: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
  designer: {
    color: "#757070",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  todaysTasks: {
    width: 161,
    height: 24,
    flexShrink: 0,
    color: "#000",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
  activeProjects: {
    width: 184,
    height: 24,
    flexShrink: 0,
    color: "#000",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
  ellipse2: {
    width: 32,
    height: 32,
    flexShrink: 0,
    fill: "#95E464",
  },
  ellipse3: {
    width: 32,
    height: 32,
    flexShrink: 0,
    fill: "#E46472",
  },
  ellipse4: {
    width: 32,
    height: 32,
    flexShrink: 0,
    fill: "#E46472",
  },
  ellipse5: {
    width: 32,
    height: 32,
    flexShrink: 0,
    fill: "#E46472",
  },
  brush: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  breakfast: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  typingTest: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  makeUiFromProject1: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  task: {
    width: 261,
    height: 218,
    flexShrink: 0,
  },
  rectangle14: {
    width: 150,
    height: 180,
    flexShrink: 0,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
  },
  rectangle16: {
    width: 150,
    height: 180,
    flexShrink: 0,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
  },
  rectangle15: {
    width: 150,
    height: 180,
    flexShrink: 0,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
  },
  rectangle17: {
    width: 150,
    height: 180,
    flexShrink: 0,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
  },
  ellipse22: {
    width: 40,
    height: 40,
    flexShrink: 0,
    fill: "#E46472",
  },
  $1694257663499: {
    width: 44,
    height: 52,
    flexShrink: 0,
    color: "#FFF9EC",
    fontFamily: "Inter",
    fontSize: 50,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  group2: {
    width: 48,
    height: 54,
    flexShrink: 0,
  },
  ellipse23: {
    width: 40,
    height: 40,
    flexShrink: 0,
    fill: "#E46472",
  },
  $16942576635322: {
    width: 44,
    height: 52,
    flexShrink: 0,
    color: "#FFF9EC",
    fontFamily: "Inter",
    fontSize: 50,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  group3: {
    width: 48,
    height: 54,
    flexShrink: 0,
  },
  menuSvgrepoCom1: {
    width: 28,
    height: 27,
    flexShrink: 0,
  },
  searchSvgrepoCom1: {
    width: 35,
    height: 35,
    flexShrink: 0,
  },
  maleUser: {
    width: 127,
    height: 127,
    flexShrink: 0,
  },
  editClipboardSvgrepoCom: {
    width: 13,
    height: 13,
    flexShrink: 0,
  },
});
