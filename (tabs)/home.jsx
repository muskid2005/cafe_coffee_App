import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react";
import CustomButton from "../../components/button.jsx";
import OptionButton from "../../components/options.jsx";
import ProductCard from "../../components/products.jsx";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { router } from "expo-router";




export default function Home(){

    const [page, setPage] = useState("all")
    const tab ="home"

    return (
        
        <SafeAreaView style={style.backgrnd}>
            <ScrollView showsVerticalScrollIndicator= {false} contentContainerStyle={{alignItems: "center",}}>
                <View style={style.top}> 
                    
                    <Text style={[style.location, {fontSize: 12}]}>Location</Text>
                    <Text style={[style.location, {fontSize: 14}]}>Bilzen, Tanjungbalai V</Text>

                    <View style={{display: "flex", flexDirection: "row", gap: 16, marginTop: 16}}>
                        <View style={{gap: 12, backgroundColor: "#2A2A2A",height: 52, borderRadius: 10, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: 275}}>
                            <Ionicons name="search-outline" size={24} color="#F9F9F9" />
                            <TextInput placeholder="Search coffee" placeholderTextColor="#A2A2A2" style={{ width: "209", color: "white",  fontSize: 18}}/>
                        </View>

                        <TouchableOpacity style={{backgroundColor: "#C67C4E", width: 52, height: 52, borderRadius: 12, justifyContent: "center", alignItems: "center"}}>
                            <MaterialCommunityIcons name="tune-variant" size={24} color="#f9f9f9b9" />
                        </TouchableOpacity>
                    </View>
                    
                </View>

                

                <View style={{width: "100%", alignItems: "center", position: "absolute", top: 200}}>
                    <Image style={{borderRadius: 20, height: 140, width: "80%", position: "relative" }} source={require("../assets/images/Banner 1.png")} />
                    
                    <View style={{ width: 204, position: "absolute", top: "16", left: 60}}>
                        <Text style={{color: "#FFFFFF", fontSize: 14, fontWeight: 600, backgroundColor: "#ED5151", paddingHorizontal: 6, paddingVertical: "4", width: 60, borderRadius: 8, textAlign: "center", marginBottom: 24}}>Promo</Text>

                        <View style={{backgroundColor: "#111111", height: 27, width: 200, marginBottom: 14, position: "relative"}}></View>
                        <View style={{backgroundColor: "#111111", height: 23, width: 149}}></View>

                        <Text style={{fontSize: 32, fontWeight: 600, color: "#FFFFFF", position: "absolute", top: 32, lineHeight: "48"}}>Buy one get one FREE</Text>
                    </View>
                </View>
                
                
                
                <View style={{gap: 16, display: "flex", flexDirection: "row", width: "100%", marginTop: 78, marginBottom: 16, justifyContent: "center"}}>
                    <View style={{width: "80%"}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator= {false} contentContainerStyle={{gap: 16, justifyContent: "space-between",}}>
                        <OptionButton onpress={()=> setPage("all")} styleActiveText={page === "all" ? style.text : null} styleActiveBtn={page === "all" ? style.styleActive : null} content="All Coffee"/>
                        <OptionButton onpress={()=> setPage("machiato")} styleActiveText={page === "machiato" ? style.text : null} styleActiveBtn={page === "machiato" ? style.styleActive : null} content="Machiato"/>
                        <OptionButton onpress={()=> setPage("latte")} styleActiveText={page === "latte" ? style.text : null} styleActiveBtn={page === "latte" ? style.styleActive : null} content="Latte"/>
                        <OptionButton onpress={()=> setPage("americano")} styleActiveText={page === "americano" ? style.text : null} styleActiveBtn={page === "americano" ? style.styleActive : null} content="Americano"/>
                    </ScrollView>
                    </View>
                </View>
                
        
            
                {page === "all" && <View  style={{ width: "80%", borderRadius: 16, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 100}}>
                    <ProductCard price="$ 4.53"  ratings="4.8" name="Caffe Mocha" subName="Deep Foam" img={require("../assets/images/coffee1.png")} />
                    <ProductCard price="$ 3.53"  ratings="4.8" name="Flat White" subName="Espresso" img={require("../assets/images/coffee2.png")} />
                    <ProductCard price="$ 7.53"  ratings="4.8" name="Mocha Fusi" subName="Ice/Hot" img={require("../assets/images/coffee3.png")} />
                    <ProductCard price="$ 5.53"  ratings="4.8" name="Caffe Panna" subName="Ice/Hot" img={require("../assets/images/coffee4.png")} />
                    <ProductCard price="$ 5.53"  ratings="4.8" name="Caramel Macchiato" subName="Vanilla & Caramel" img={require("../assets/images/coffee5.jpg")} />
                    <ProductCard price="$ 6.53"  ratings="4.8" name="Expresso Macchiato" subName="Classic Foam" img={require("../assets/images/coffee6.jpg")} />
                    
                </View>}

                {page === "machiato" && <View  style={{ width: "80%", borderRadius: 16, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 100}}>
                    <ProductCard price="$ 5.53"  ratings="4.8" name="Caramel Macchiato" subName="Vanilla & Caramel" img={require("../assets/images/coffee5.jpg")} />
                    <ProductCard price="$ 6.53"  ratings="4.8" name="Expresso Macchiato" subName="Classic Foam" img={require("../assets/images/coffee6.jpg")} />
                    
                </View>}

                {page === "latte" && <View  style={{ width: "80%", borderRadius: 16, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 100}}>
                    <ProductCard price="$ 4.53"  ratings="4.8" name="Caffe Mocha" subName="Deep Foam" img={require("../assets/images/coffee1.png")} />
                    <ProductCard price="$ 3.53"  ratings="4.8" name="Flat White" subName="Espresso" img={require("../assets/images/coffee2.png")} />                    
                </View>}

                {page === "americano" && <View  style={{ width: "80%", borderRadius: 16, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 100}}>
                    <ProductCard price="$ 3.53"  ratings="4.8" name="Iced Americano" subName="Expresso & Water" img={require("../assets/images/coffee7.jpg")} />
                </View>}
            </ScrollView>

            <View style={{display: "flex", flexDirection: "row", width: "100%", backgroundColor: "#FFFFFF", bottom: 0, position: "absolute", justifyContent: "space-around", height: 99, borderTopRightRadius: 24, borderTopLeftRadius: 24, paddingTop: 28}}>
                
                <TouchableOpacity style={{ height: 36}} onPress={()=> setTab("home")} >{ tab=== "home" ? <Octicons name="home-fill" size={24} color="#C67C4E" /> : <Octicons name="home" size={24} color="#C67C4E" />}</TouchableOpacity>
                <TouchableOpacity onPress={()=> setTab("heart")} >{ tab=== "heart" ? <Octicons name="heart-fill" size={24} color="#C67C4E" /> : <Octicons name="heart" size={24} color="#C67C4E" />}</TouchableOpacity>
                <TouchableOpacity onPress={()=> setTab("cart")} >{ tab=== "cart" ? <Ionicons name="bag" size={24} color="#C67C4E" /> : <Ionicons name="bag-outline" size={24} color="#C67C4E" />}</TouchableOpacity>
                <TouchableOpacity onPress={()=> setTab("notification")} >{ tab=== "notification" ? <Octicons name="bell-fill" size={24} color="#C67C4E" /> : <Octicons name="bell" size={24} color="#C67C4E" />}</TouchableOpacity>
        
            </View>
            <View style={[style.tab, (tab === "home" && {left : "11.5%" } || tab === "heart" && {left : "36.5%" } || tab === "cart" && {left : "61.5%" } || tab === "notification" && {left : "86.5%" })]}></View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
  backgrnd:{
    backgroundColor: "#F9F9F9",
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  top: {
    gap:8,
    backgroundColor: "#181818",
    marginTop: 0,
    paddingTop: 40,
    height: 280,
    paddingHorizontal: 42,
    paddingTop: 60,
    width: "100%",
    paddingLeft: 40
  },
  location: {color: "white", fontSize: 14, fontWeight: 400},
  styleActive: {
    backgroundColor: "#C67C4E",
    color: "white"
  },
  text: {
    color: "white"
  },
  tab: {width: 10, height: 5, borderRadius: 18, backgroundColor: "#C67C4E", position: "absolute", bottom: 36, }

})