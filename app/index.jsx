import { StyleSheet, Text, View, ImageBackground,  } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/button.jsx";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {

  
  return (
    
    <SafeAreaView style={style.backgrnd}>
      <ImageBackground style={style.img} source={require("../assets/images/Image.png")}>
      </ImageBackground>

      <View style={style.layout}>
        <Text style={style.hero}>Fall in Love with Coffee in Blissful Delight!</Text>
        <Text style={style.wlc}>Welcome to our cozy coffee corner, where every cup is a delightful for you.</Text>
      </View>

      <View style={{width: "84%", alignSelf: "center"}}><CustomButton content="Get Started" onPress={()=>{router.push("./home")}}/></View>
      
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  backgrnd:{
    backgroundColor: "#050505",
    flex: 1,
  },
  img:{
    // height:680,
    width: "100%",
    height:"87%",
    position: "relative"
  },
  hero:{
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center",
    color: "white",
  },
  wlc:{
    fontSize: 14,
    fontWeight: 400,
    textAlign: "center",
    color: "white",
  },
  layout: {
    width: 327,
    paddingHorizontal: 10,
    alignItems: "center",
    alignSelf: "center", 
    position: "absolute",
    bottom: 200,
    gap: 8,
  }
})