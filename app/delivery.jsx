import { Text, TouchableOpacity, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router, useLocalSearchParams } from "expo-router"
import BackNav from "../components/backNav"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";
import Feather from '@expo/vector-icons/Feather';
import MapView, { Marker, Polyline } from 'react-native-maps';

function Delivery(){
    const {address} = useLocalSearchParams()
    const [isOpen, setIsOpen] = useState(false)

    const coordinates = [
        {latitude : 6.5198, longitude: 3.3853},
        {latitude : 6.5177, longitude: 3.3846}, 
        {latitude : 6.5172, longitude: 3.3825}, 
        {latitude : 6.5167, longitude: 3.3811}, 
        {latitude : 6.5144, longitude: 3.3821}, 
        {latitude : 6.5138, longitude: 3.3821}, 
        {latitude : 6.5131, longitude: 3.3818},
        {latitude : 6.5126, longitude: 3.3808}, 
    ]

    return (
        <View style={{height: "100%", alignItems: "center"}}>

            <MapView
                style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
                initialRegion={{
                    latitude: 6.5127,       
                    longitude: 3.3825,      
                    latitudeDelta: 0.05, 
                    longitudeDelta: 0.05, 
            }}>
                <Polyline coordinates={coordinates} strokeColor="#C67C4E" strokeWidth={2} />
                <Marker anchor={{ x: 0.5, y: 1.0 }} coordinate={{latitude: 6.5117, longitude: 3.3812}}> 
                    <View style={{width: 30, height: 30, justifyContent: "center", alignItems: "center"}}>
                        <MaterialIcons name="location-pin" size={24} color="#C67C4E" />
                    </View>
                </Marker>


                <Marker anchor={{ x: 0.5, y: 1.0 }} coordinate={{latitude: 6.5190, longitude: 3.3856}}> 
                    <View style={{width: 40, height: 40, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", borderRadius: 20}}>
                        <Image source={require("../assets/images/packaging1.png")} tintColor="#C67C4E" style={{width: 16, height: 16}} />
                    </View>
                </Marker>
            </MapView>

            <View style={{marginTop: 52}}>
                <BackNav style={{backgroundColor: "transparent"}} backStyle={{ backgroundColor: "#EDEDED", width: 44, height: 44, borderRadius: 12, alignItems: "center", justifyContent: "center"}} iconStyle={{backgroundColor: "#EDEDED", width: 44, height: 44, borderRadius: 12, alignItems: "center", justifyContent: "center"}} onPress={()=>router.back()} icon={<MaterialIcons name="gps-fixed" size={24} color="black" />} />
            </View>
            

            {isOpen &&
            <TouchableOpacity onPress={()=>setIsOpen(false)} style={{width: "100%", height: "100%", backgroundColor: "#afafaf3d", position: "absolute"}}>
            </TouchableOpacity>}

            {isOpen && <View style={{alignItems: "center", gap: 16, width: "100%", paddingVertical: 20, paddingHorizontal: 48, height: 322, backgroundColor: "#FFFFFF", borderTopRightRadius: 24, borderTopLeftRadius: 24, position: "absolute", bottom: 0}}>
                <TouchableOpacity onPress={()=>setIsOpen(false)}>
                    <View style={{backgroundColor: "#E3E3E3", width: 45, height: 5, borderRadius: 6}}></View>
                </TouchableOpacity>
                
                <View style={{gap: 2, alignItems: "center"}}>
                    <Text style={{fontWeight: 600, fontSize: 16, color: "#242424"}}>10 minutes left</Text>
                    <Text style={{fontWeight: 400, fontSize: 12, color: "#949494"}}>Delivery to <Text style={{fontWeight: 400, fontSize: 16, color: "#242424"}}>Jl. Kpg Sutoyo</Text></Text>
                </View>

                <View style={{width: "95%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{width: 72, height: 4, backgroundColor: "#36C07E", borderRadius: 2}}></View>
                    <View style={{width: 72, height: 4, backgroundColor: "#36C07E", borderRadius: 2}}></View>
                    <View style={{width: 72, height: 4, backgroundColor: "#36C07E", borderRadius: 2}}></View>
                    <View style={{width: 72, height: 4, backgroundColor: "#E3E3E3", borderRadius: 2}}></View>
                </View>

                <View style={{height: 77, borderWidth: 1, borderRadius: 12, borderColor: "#E3E3E3", width: "100%", display: "flex", flexDirection: "row", gap: 16, alignItems: "center", paddingHorizontal: 12}}>
                    <View style={{borderColor: "#E3E3E3", borderWidth: 1, borderRadius: 12, height: 56, width: 56, alignItems: "center", justifyContent: "center"}}>
                        <Image source={require("../assets/images/packaging1.png")} style={{height: 28, width: 28, tintColor: "#C67C4E"}}/>
                    </View>
                    <View style={{gap: 4, width: 243}}>
                        <Text style={{fontSize: 14, fontWeight: 600, color: "#242424"}}>Delivering your order</Text>
                        <Text style={{fontSize: 12, fontWeight: 300, color: "#A2A2A2"}}>We will deliver your goods to you in the shortest possible time.</Text>
                    </View>
                </View>
                <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{gap: 16, display: "flex", flexDirection: "row"}}>
                        <Image source={require("../assets/images/profile.png")} style={{borderRadius: 16, width: 56, height: 56}}/>
                        <View style={{gap: 4, justifyContent: "center",}}>
                            <Text style={{fontSize: 14, fontWeight: 600, color: "#242424"}}>Brooklyn Simmons</Text>
                            <Text style={{fontSize: 12, fontWeight: 400, color: "#A2A2A2"}}>Personal Courier</Text>
                        </View>
                    </View>
                    <View style={{borderWidth: 1, borderRadius: 12, borderColor: "#E3E3E3", height: 44, width: 44, justifyContent: "center", alignItems: "center"}}>
                        <Feather name="phone-call" size={20} color="#2A2A2A" />
                    </View>
                </View>
            </View>}

            
            {!isOpen && <TouchableOpacity style={{position:"absolute", bottom: 40, borderWidth: 1, height: 44, width: 44, borderRadius: 22, alignItems: "center", justifyContent: "center", borderColor: "#C67C4E"}} onPress={()=>setIsOpen(true)}><MaterialIcons name="keyboard-double-arrow-up" size={24} color="#C67C4E" /></TouchableOpacity>}
            
        </View>
    )
}

export default Delivery