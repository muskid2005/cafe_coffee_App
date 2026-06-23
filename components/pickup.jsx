import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

export default function Pickup({address, img, delivered, date }){
    
    return (
        <View style={{paddingHorizontal: 28, height: 80, width: "90%", backgroundColor: "#FFFFFF", borderRadius: 20, marginBottom: 10, display: "flex", flexDirection: "row", gap: 24, alignItems: "center"}}>
            { img }
            <View style={{ height: 60, width:"90%", justifyContent: "center"}}>
                <Text style={{fontWeight: 400, width: 180, fontSize: 14,}}>{address}</Text>
                <Text style={{fontWeight: 400, fontSize: 12, color: "#797979"}}>{date}</Text>
            </View>            

           
            
                <View style={{ position: "absolute", right: 28, gap: 8, alignItems: "center", height: 60, justifyContent: "center", borderWidth: 1, borderRadius: 10, borderColor: "green" , paddingHorizontal: 12, height: 20, backgroundColor: "#fafff2", display: "flex", flexDirection: "row",}}>
                    <View style={{width: 4, height: 4, borderRadius: 2, backgroundColor: "green" }}></View>
                    <Text style={{fontWeight: 400, fontSize: 14,}}>{delivered}</Text>
                </View>
        </View>
    )
    

}

