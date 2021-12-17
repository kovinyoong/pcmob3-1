import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  const [colorArray, setColorArray] = useState([
    
  ]);

  function addColor() {
    setColorArray([
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: `${colorArray.length}`,
      },

      ...colorArray,
    ]);
  }



  function renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen", { ...item })}>
        <BlockRGB red={item.red} green={item.green} blue={item.blue} />
      </TouchableOpacity>
    );
  }
 
  function reset({ navigation }) {
    setColorArray([]);
  }

  function DetailsScreen({route}) {
    return <Text>Er... more stuff here soon?</Text>;
   }
   
   const { red, green, blue } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ height: 40, justifyContent: "center" }}
        onPress={addColor}
      >
        <Text style={{ color: "red" }}>Add colour</Text>
      </TouchableOpacity>

      {/* {Reset button} */}
      <TouchableOpacity
        onPress={reset}
        style={{ height: 40, justifyContent: "center" }}
      >
        <Text style={{ color: "red" }}>Reset</Text>
      </TouchableOpacity>

      <FlatList style={styles.list} data={colorArray} renderItem={renderItem} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        
        <Stack.Navigator>
       <Stack.Screen name="Colour List" component={HomeScreen} />
       <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
     </Stack.Navigator>

        
      </NavigationContainer>

      
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
});
