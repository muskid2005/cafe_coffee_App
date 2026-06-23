import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function BackNav({name, style, onPress, icon, backStyle, iconStyle}){
    return (
        <View style={[style, {width: "100%", justifyContent: "space-between", paddingHorizontal: 30, marginVertical: 30, height: 44, display: "flex", flexDirection: "row", alignItems: "center"}]}>
            <TouchableOpacity onPress={onPress} style={backStyle}>
                <Ionicons name="chevron-back-outline" size={24} color="#2A2A2A" />
            </TouchableOpacity>
            <Text style={{color:"#242424", fontWeight: 600, fontSize: 16}}>{name}</Text>
            <TouchableOpacity style={iconStyle}>
                {icon}
            </TouchableOpacity>
        </View>
    )
    

}