import { Text, Image, View, TouchableOpacity } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import BackNav from "../components/backNav"
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import CustomButton from "../components/button";

const images={
    "1": require("../assets/images/coffee1.png"),
    "2": require("../assets/images/coffee2.png"),
    "3": require("../assets/images/coffee3.png"),
    "4": require("../assets/images/coffee4.png"),
    "5": require("../assets/images/coffee5.jpg"),
    "6": require("../assets/images/coffee6.jpg"),
    "7": require("../assets/images/coffee7.jpg"),
}



export default function Detail(){
    const {price, name, ratings, subName, id, halfDes, fullDes} = useLocalSearchParams()
    const [descrip, setDescrip] = useState(false)
    const [size, setSize] = useState("medium")

    function route(param){

            router.push({ 
                pathname: "/order",
                params: param
            })
    }

    const dynamicPrice = Number(price.split(" ")[1])
    const updatedPrice = size=== "medium" ? dynamicPrice : size=== "large" ? (dynamicPrice + 1).toFixed(2) : (dynamicPrice - 1).toFixed(2)

    return (
        <SafeAreaView style={{alignItems: "center", height: "100%"}}>
            <BackNav onPress={()=>router.back()} name="Detail" icon={<Octicons name="heart" size={20} color="#2A2A2A" />} />
            <Image style={{borderRadius: 20, width: "80%", height: 202}} source={images[id]} />

            <View style={{width: "80%", marginTop: 10}}>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20}}>
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 600, color: "#242424", marginTop: 10, marginBottom: 5}}>{name}</Text>
                        <Text style={{fontSize: 12, fontWeight: 400, color: "#A2A2A2", marginBottom: 16}}>{subName}</Text>
                        <Text style={{fontSize: 16, fontWeight: 600}}><AntDesign name="star" size={16} color="#FBBE21" /> {ratings} <Text style={{color: "#A2A2A2", fontSize: 12}}> (230)</Text></Text>
                        
                    </View>
                    
                    <View style={{gap: 16, display: "flex", flexDirection: "row"}}>
                        <TouchableOpacity style={{width: 44, height: 44, padding: 6, borderRadius: 12, backgroundColor: "#ededed", alignItems: "center", justifyContent: "center"}}><Image style={{width: 20, height: 20, tintColor: "#C67C4E"}} source={require("../assets/images/packaging1.png")} /></TouchableOpacity>
                        <TouchableOpacity style={{width: 44, height: 44, padding: 6, borderRadius: 12, backgroundColor: "#EDEDED", alignItems: "center", justifyContent: "center"}}><Image style={{width: 20, height: 20, tintColor: "#C67C4E"}} source={require("../assets/images/packaging2.png")} /></TouchableOpacity>
                        <TouchableOpacity style={{width: 44, height: 44, padding: 6, borderRadius: 12, backgroundColor: "#EDEDED", alignItems: "center", justifyContent: "center"}}><Image style={{width: 20, height: 20, tintColor: "#C67C4E"}} source={require("../assets/images/packaging3.png")} /></TouchableOpacity>
                    </View>
                </View>
                <View style={{backgroundColor:"#E3E3E3", width: "90%", height: 2, alignSelf: "center"}}></View>
            </View>

            <View style={{width: "80%", marginTop: 16, gap: 8}}>
                <Text style={{fontSize: 16, fontWeight: 600, color: "#242424"}}>Description</Text>

                <Text>{descrip ? fullDes : halfDes} <TouchableOpacity onPress={()=> setDescrip(!descrip)}><Text style={{color: "#C67C4E"}}>{descrip ? "Close" : "Read more"}</Text></TouchableOpacity></Text>
            </View>

            <View style={{width: "80%", marginTop: 24, gap: 16}}>
                <Text style={{fontSize: 16, fontWeight: 600, color: "#242424"}}>Size</Text>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <TouchableOpacity style={{width: 96, alignItems: "center", justifyContent: "center", borderRadius: 12, height: 41, backgroundColor: size === "small" ? "#F9F2ED" : "#FFFFFF", borderWidth: 1, borderColor: size === "small" ? "#C67C4E" : "#E3E3E3"}} onPress={()=> setSize("small")}><Text  style={{fontSize: 14, fontWeight: 400, color: size === "small" ? "#C67C4E" : "#242424"}}>S</Text></TouchableOpacity>
                    <TouchableOpacity style={{width: 96, alignItems: "center", justifyContent: "center", borderRadius: 12, height: 41, backgroundColor: size === "medium" ? "#F9F2ED" : "#FFFFFF", borderWidth: 1, borderColor: size === "medium" ? "#C67C4E" : "#E3E3E3"}} onPress={()=> setSize("medium")}><Text style={{fontSize: 14, fontWeight: 400, color: size === "medium" ? "#C67C4E" : "#242424"}}>M</Text></TouchableOpacity>
                    <TouchableOpacity style={{width: 96, alignItems: "center", justifyContent: "center", borderRadius: 12, height: 41, backgroundColor: size === "large" ? "#F9F2ED" : "#FFFFFF", borderWidth: 1, borderColor: size === "large" ? "#C67C4E" : "#E3E3E3"}} onPress={()=> setSize("large")}><Text style={{fontSize: 14, fontWeight: 400, color: size === "large" ? "#C67C4E" : "#242424"}}>L</Text></TouchableOpacity>
                    
                </View>
            </View>

            <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 48, height: 118, backgroundColor: "#FFFFFF", borderTopRightRadius: 16, borderTopLeftRadius: 16, position: "absolute", bottom: 0}}>
                <View>
                    <Text style={{fontSize: 14, fontWeight: 400, color: "#909090"}}>Price</Text>
                    <Text style={{color: "#C67C4E", fontSize: 18, fontWeight: 600}}>{`$ ${updatedPrice}`}</Text>
                </View>

                <View style={{ width: "76%"}}>
                    <CustomButton onPress={()=>route({id: id, price: updatedPrice, name: name, subName,})} content="Buy Now" /> 
                </View>
                
            </View>

        </SafeAreaView>
        
    )
}
// price, name, ratings, subName, id,
// onpress={()=>route({id: 1, price: "$ 4.53", ratings: "4.8", name: "Caffe Mocha", subName: "Deep Foam", halfDes: descriptions.mocha.half, fullDes: descriptions.mocha.full })}
