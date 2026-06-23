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

const descriptions = {
    mocha : {
        half: "A classic Caffe Mocha is an indulgent coffee drink built on a perfect balance of espresso, chocolate, and milk, blending 25 ml of rich espresso with decadent choc... ",
        full: "A classic Caffe Mocha is an indulgent coffee drink built on a perfect balance of espresso, chocolate, and milk, blending 25 ml of rich espresso with decadent chocolate syrup or cocoa powder and 85 ml of sweet steamed milk. The magic of this drink lies entirely in its dessert-like flavor profile, where the bittersweet notes of dark chocolate perfectly complement the intense bite of the espresso while the creamy milk smooths out the texture. To elevate this luxurious beverage even further, it is traditionally finished with a mountain of whipped cream or a dusting of cocoa powder instead of standard milk foam."
    },
    americano: {
        half: "A refreshing, crisp espresso beverage built entirely on a clean balance of shots and chilled water, combining rich espresso with cold water over a dense bed of ic... ",
        full: "A refreshing, crisp espresso beverage built entirely on a clean balance of shots and chilled water, combining rich espresso with cold water over a dense bed of ice cubes. The magic of this drink lies entirely in its pure, bold flavor profile, where the intense notes of the espresso are opened up and softened by the water without any milk to mask its natural undertones. To maintain its icy temperature and deliver an instant cooling burst, it is traditionally served in a tall, sweat-beaded glass perfect for hot days."},
    expresso: {
        half: "A bold and punchy Italian classic built on a strict ratio of concentrated coffee stained with just a touch of dairy, featuring a strong shot of espresso marked wi... ",
        full: "A bold and punchy Italian classic built on a strict ratio of concentrated coffee stained with just a touch of dairy, featuring a strong shot of espresso marked with a single dollop of warm, velvety milk foam. The magic of this drink lies entirely in its intense strength, where the heavy bitterness of the espresso is slightly cut by the natural sweetness of the microfoam without losing its robust body. To capture this quick, concentrated burst of flavor before it cools, it is traditionally served in a tiny, pre-heated demitasse cup."
    },
    caramel: {
        half: "A beautifully layered, sweet espresso favorite built on a distinct upside-down pouring method, combining vanilla-flavored syrup, creamy steamed milk, and rich esp... ",
        full: "A beautifully layered, sweet espresso favorite built on a distinct upside-down pouring method, combining vanilla-flavored syrup, creamy steamed milk, and rich espresso, all finished with a heavy drizzle of buttery caramel sauce. The magic of this drink lies entirely in its shifting flavor profile, where you sip the bold, dark espresso first before moving through the sweet, silky milk beneath it for a changing taste experience. To showcase these stunning, distinct dark-and-light visual layers, it is traditionally served in a tall, crystal-clear glass cup."
    },
    panna: {
        half: "A luxurious, old-world European espresso treat built on a decadent contrast of hot coffee and icy dairy, pairing a concentrated shot of rich espresso with a gener... ",
        full: "A luxurious, old-world European espresso treat built on a decadent contrast of hot coffee and icy dairy, pairing a concentrated shot of rich espresso with a generous dollop of cold, unsweetened whipped cream on top. The magic of this drink lies entirely in its temperature and texture interplay, where the hot, bitter espresso melts the velvety cream as you drink, naturally sweetening each sip with a thick mouthfeel. To emphasize this elegant, dessert-like presentation, it is traditionally served in a small glass or ceramic demitasse."
    },
    flat: {
        half: "A smooth, velvet-textured espresso masterpiece built on a highly precise ratio of coffee to microfoam, blending a concentrated double shot of espresso with thin, ...",
        full: "A smooth, velvet-textured espresso masterpiece built on a highly precise ratio of coffee to microfoam, blending a concentrated double shot of espresso with thin, silky stretched milk. The magic of this drink lies entirely in its seamless integration, where the microfoam is folded so perfectly into the coffee that it creates a uniform, creamy texture from the first sip to the last. To preserve this tight, high-strength balance and keep the milk from dominating the espresso flavor, it is traditionally served in a compact, ceramic tumbler."
    },
    fusi: {
        half: "A dramatic, fusion-style specialty beverage built on a striking marbling technique that swirls intense espresso with rich, thick chocolate fudge sauce and creamy ...",
        full: "A dramatic, fusion-style specialty beverage built on a striking marbling technique that swirls intense espresso with rich, thick chocolate fudge sauce and creamy milk. The magic of this drink lies entirely in its visual appeal and heavy texture, where ribbons of dark chocolate fuse directly into the hot espresso to create a velvety, ultra-rich base that refuses to completely blend away. To highlight this beautiful, melting swirl pattern and premium presentation, it is traditionally served in a clear glass mug."
    }
    
}

function route(param){
    
    return(
        router.push({ 
            pathname: "/detail",
            params: param
        })
    )
}

export default function Heart(){


    return (
        
        <SafeAreaView style={style.backgrnd}>
            <View style={{width: "80%", marginTop: 36, marginBottom: 20}}>
                <Text style={{fontWeight: 600, fontSize: 18,}}>Favorites</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator= {false} style={{ width: "100%", marginBottom: -40}} contentContainerStyle={{alignItems: "center"}}>

                 <View  style={{ width: "80%", borderRadius: 16, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 100}}>
                    <ProductCard onpress={()=>route({id: 1, price: "$ 4.53", ratings: "4.8", name: "Caffe Mocha", subName: "Deep Foam", halfDes: descriptions.mocha.half, fullDes: descriptions.mocha.full })} price="$ 4.53"  ratings="4.8" name="Caffe Mocha" subName="Deep Foam" img={require("../../assets/images/coffee1.png")} />
                    <ProductCard onpress={()=>route({id: 2, price: "$ 3.53", ratings: "4.8", name: "Flat White", subName: "Espresso", halfDes: descriptions.flat.half, fullDes: descriptions.flat.full })} price="$ 3.53"  ratings="4.8" name="Flat White" subName="Espresso" img={require("../../assets/images/coffee2.png")} />
                    <ProductCard onpress={()=>route({id: 4, price: "$ 5.53", ratings: "4.8", name: "Caffe Panna", subName: "Ice/Hot", halfDes: descriptions.panna.half, fullDes: descriptions.panna.full })} price="$ 5.53"  ratings="4.8" name="Caffe Panna" subName="Ice/Hot" img={require("../../assets/images/coffee4.png")} />
                    <ProductCard onpress={()=>route({id: 5, price: "$ 5.53", ratings: "4.8", name: "Caramel Macchiato", subName: "Vanilla & Caramel", halfDes: descriptions.caramel.half, fullDes: descriptions.caramel.full })} price="$ 5.53"  ratings="4.8" name="Caramel Macchiato" subName="Vanilla & Caramel" img={require("../../assets/images/coffee5.jpg")} />

                </View>

                
            </ScrollView>

            
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
    marginTop: -40,
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


})