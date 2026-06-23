import { Text, Image, View, TouchableOpacity } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import BackNav from "../components/backNav"
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from "react";
import CustomButton from "../components/button";
import Feather from '@expo/vector-icons/Feather';
import Pickup from "../components/pickup";

const images={
    "1": require("../assets/images/coffee1.png"),
    "2": require("../assets/images/coffee2.png"),
    "3": require("../assets/images/coffee3.png"),
    "4": require("../assets/images/coffee4.png"),
    "5": require("../assets/images/coffee5.jpg"),
    "6": require("../assets/images/coffee6.jpg"),
    "7": require("../assets/images/coffee7.jpg"),
}

function route(param){
        router.push({ 
            pathname: "/delivery",
            params: param
        })
}


export default function Order(){
    const {price, name, ratings, subName, id, halfDes, fullDes} = useLocalSearchParams()
    const [descrip, setDescrip] = useState(false)
    const [page, setpage] = useState("deliver")
    const [quantity, setQuantity]  = useState(1)

    const totalPrice = (price * quantity).toFixed(2)
    const walletBal = 15.58
    const canBuy = totalPrice < walletBal

    return (
        <SafeAreaView style={{alignItems: "center", height: "100%"}}>
            <BackNav onPress={()=>router.back()} name="Order"  />
            <View style={{width: "80%", height: 43, backgroundColor: "#EDEDED", borderRadius: 12, padding: 4, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity onPress={()=> setpage("deliver")} style={{width: 153, height: 35, backgroundColor: page=== "deliver" ? "#C67C4E" : null, borderRadius: 8, justifyContent: "center", alignItems: "center"}}>
                    <Text>Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> setpage("pickup")} style={{width: 153, height: 35, backgroundColor: page=== "pickup" ? "#C67C4E" : null , borderRadius: 8, justifyContent: "center", alignItems: "center"}}>
                    <Text>Pick Up</Text>
                </TouchableOpacity>
            </View>

            {page === "deliver" && 
            <View style={{ width: "100%", alignItems: "center"}}>
            <View style={{width: "80%",gap: 16, marginTop: 24}}>
                <View>
                    <Text style={{fontSize: 16, fontWeight: 600, color: "#242424"}}>Delivery Address</Text>
                </View>

                <View>
                    <Text style={{color:"#313131", fontSize: 14, fontWeight: 600,}}>Jl. Kpg Sutoyo</Text>
                    <Text style={{color:"#A2A2A2", fontSize: 12, fontWeight: 400,}}>Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
                </View>

                <View style={{width: 229, height: 48, gap: 8, display: "flex", flexDirection: "row",}}>
                    <TouchableOpacity style={{borderWidth: 1, gap: 4, borderRadius: 16, height: 26, paddingHorizontal: 12, display: "flex", flexDirection: "row",  justifyContent: "center", borderColor:"#A2A2A2", backgroundColor: "#FFFFFF", alignItems: "center" }}>
                        <MaterialCommunityIcons name="note-outline" size={12} color="#313131" />
                        <Text style={{color: "#313131", fontWeight: 400, fontSize: 12,  textAlign: "center"}}>Edit Address</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth: 1, gap: 4, borderRadius: 16, height: 26, paddingHorizontal: 12, display: "flex", flexDirection: "row", justifyContent: "center", borderColor:"#A2A2A2", backgroundColor: "#FFFFFF", alignItems: "center"  }}>
                        <FontAwesome5 name="edit" size={12} color="#313131" />
                        <Text style={{color: "#313131", fontWeight: 400, fontSize: 12,  textAlign: "center"}}>Add Note</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{backgroundColor:"#E3E3E3", width: "90%", height: 2, alignSelf: "center"}}></View>

            <View style={{height: 54, width: "80%", marginVertical: 16, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <View style={{justifyContent: "center", display: "flex", gap: 16, flexDirection: "row",}}>
                    <Image style={{borderRadius: 8, width: 54, height: 54}} source={images[id]} />
                    <View style={{justifyContent: "center", gap: 4}}>
                        <Text style={{ fontSize: 16, fontWeight: 600, color: "#242424"}}>Caffe Mocha</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: "#A2A2A2"}}>Deep Foam</Text>   
                    </View>
                </View>
                <View style={{display:"flex", flexDirection: "row", gap: 12, alignItems: "center"}}>
                    
                    <TouchableOpacity onPress={()=> quantity > 1 && setQuantity(quantity - 1)} style={{ backgroundColor: quantity > 1 ? "#FFFFFF" : "#f7f7f7", padding: 8, borderRadius: 20}}><Feather name="minus" size={12} color="black" /></TouchableOpacity>
                        <Text>{quantity}</Text>
                    <TouchableOpacity onPress={()=> setQuantity(quantity + 1)} style={{ backgroundColor: "#FFFFFF", padding: 8, borderRadius: 20}}><Feather name="plus" size={12} color="black" /></TouchableOpacity>
                </View>
            </View>
                
            <View style={{  backgroundColor:"#fff4ec", width: "100%", height: 2, alignSelf: "center"}}></View>

            <View style={{marginTop: 16, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", height: 56, width: "80%", display: "flex", flexDirection: "row", borderWidth: 1, borderRadius: 16, borderColor: "#EDEDED", backgroundColor: "#FFFFFF"}}>
                <View style={{display: "flex", flexDirection: "row", gap: 16, alignContent: "center"}}>
                    <MaterialCommunityIcons name="sale-outline" size={16} color="#C67C4E" />
                    <Text style={{fontWeight: 600, fontSize: 14, color: "#313131"}}>1 Discount is Applies</Text>
                </View>
                <TouchableOpacity><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></TouchableOpacity>
            </View>

            <View style={{gap: 16, width: "80%", marginVertical: 16}}>
                <Text style={{fontSize: 16, fontWeight: 600}}>Payment Summary</Text>
                <View style={{gap: 8}}>
                    <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={{fontSize: 14, fontWeight: 400, color: "#313131"}}>Price</Text>
                        <Text style={{fontSize: 14, fontWeight: 600, color: "#242424"}}>{totalPrice}</Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={{fontSize: 14, fontWeight: 400, color: "#313131"}}>Delivery Fee</Text>
                        <View style={{display: "flex", flexDirection: "row", gap: 8}}>
                        <Text style={{fontSize: 14, fontWeight: 400, color: "#242424", textDecorationLine: "line-through"}}>$ 2.0</Text>
                        <Text style={{fontSize: 14, fontWeight: 600, color: "#242424"}}>$ 1.0</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{gap: 16, width: "100%", paddingVertical: 20, paddingHorizontal: 48, height: 165, backgroundColor: "#FFFFFF", borderTopRightRadius: 16, borderTopLeftRadius: 16, position: "fixed", bottom: -190}}>
                <View style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{gap: 16, display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <MaterialCommunityIcons name="wallet-outline" size={16} color="#C67C4E" />
                        <View>
                            <Text style={{fontSize: 14, fontWeight: 600, color: "#242424"}}>Cash/Wallet</Text>
                            <Text style={{color: "#C67C4E", fontSize: 12, fontWeight: 600}}>{`$ ${walletBal}`}</Text>
                        </View>
                    </View>
                    {!canBuy && <View style={{ width: 170, paddingTop: 2}}>
                        <Text style={{color: "#ff0c0c", fontSize: 12}}>Insufficient Funds</Text>
                    </View>}
                    <TouchableOpacity><MaterialIcons name="keyboard-arrow-down" size={24} color="black" /></TouchableOpacity>
                </View>
                
                <View style={{ width: "100%"}}>
                    <CustomButton disable={!canBuy} onPress={()=>route({address: "Jl. Kpg Sutoyo"})} content="Order" /> 
                </View>
                
            </View></View>}

            {page==="pickup" &&
            <View style={{alignItems: "center", width: "100%", marginVertical: 20}}>
                <View style={{width: "100%", alignItems: "center"}}>
                    <Pickup address="Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai." img={<Image source={images[2]} style={{borderRadius: 8, width: 54, height: 54}} />}  date="27/06/26" delivered="Picked"/>
                    <Pickup address="Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai." img={<Image source={images[1]} style={{borderRadius: 8, width: 54, height: 54}} />}  date="07/05/26" delivered="picked"/>
                </View>
                
            </View>
            } 
        </SafeAreaView>
        
    )
}


// onpress={()=>route({id: 1, price: "$ 4.53", ratings: "4.8", name: "Caffe Mocha", subName: "Deep Foam", halfDes: descriptions.mocha.half, fullDes: descriptions.mocha.full })}


