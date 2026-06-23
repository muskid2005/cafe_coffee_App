import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

export default function FlatCard({icon, message, img, delivered, price, size }){
    
    return (
        <View style={{paddingHorizontal: 28, height: 80, width: "90%", backgroundColor: "#FFFFFF", borderRadius: 20, marginBottom: 10, display: "flex", flexDirection: "row", gap: 24, alignItems: "center"}}>
            { icon || img }
            <View style={{ height: 60, width: !delivered && "90%", justifyContent: "center"}}>
                <Text style={{fontWeight: delivered ? 600 : 400, fontSize: delivered ?  16 : 14,}}>{message}</Text>
                {delivered && <Text style={{fontWeight: 400, fontSize: 14,}}>{price}</Text>}
            </View>

            {size && 
            
                <View style={{position: "absolute", right: 160,backgroundColor: "#fffaf6", height: 28, width: 28, borderWidth: 1, borderColor: "#C67C4E", alignItems: "center", borderRadius: 14, justifyContent: "center"}}>
                    <Text style={{ textAlign: "center", fontWeight: 400, fontSize: 14,}}>{size}</Text>
                </View>
            }

            {delivered &&
            
                <View style={{ position: "absolute", right: 28, gap: 8, alignItems: "center", height: 60, justifyContent: "center", borderWidth: 1, borderRadius: 10, borderColor: delivered==="Delivered"? "green" : "#E25552", paddingHorizontal: 12, height: 20, backgroundColor: delivered ==="Delivered" ? "#fafff2": "#faeded", display: "flex", flexDirection: "row",}}>
                    <View style={{width: 4, height: 4, borderRadius: 2, backgroundColor: delivered==="Delivered"? "green" : "#E25552"}}></View>
                    <Text style={{fontWeight: 400, fontSize: 14,}}>{delivered}</Text>
                </View>}
        </View>
    )
    

}

