import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function ProductCard({price, ratings, name, subName, img, onpress}){
    return (
        <View style={{backgroundColor: "#FFFFFF", width: 156, borderRadius: 16, alignItems: "center", paddingTop: 8, paddingBottom: 12, marginBottom: 30}}>
            <View style={{position: "relative"}}>
                <Image source={img} style={{width: 140, height: 128, borderRadius: 12}} />
                <View style={{display: "flex", flexDirection: "row", justifyContent: "center", width: 51, height: 28, gap: 4, backgroundColor: "#313131ab", alignItems: "center", position: "absolute", right: 0, borderBottomLeftRadius: 24, borderTopRightRadius: 12}}>
                    <AntDesign name="star" size={12} color="#FBBE21" />
                    <Text style={{color: "white", fontSize: 8, fontWeight: 600}}>{ratings}</Text>
                </View>
            </View>
            
            <View style={{width: 140,}}>
                <Text style={{fontSize: 16, fontWeight: 600, color: "#242424", marginTop: 8}}>{name}</Text>
                <Text style={{fontSize: 12, fontWeight: 400, color: "#A2A2A2", marginVertical: 4}}>{subName}</Text>

                <View style={{display: "flex", flexDirection: "row", gap: 32, justifyContent: "space-between", alignItems: "center"}}>
                   <Text style={{color: "#050505", fontSize: 18, fontWeight: 600}}>{price}</Text>
                   <TouchableOpacity onPress={onpress} style={{width: 32, height: 32, backgroundColor: "#C67C4E", alignItems: "center", justifyContent: "center", borderRadius: 8,}}><AntDesign name="plus" size={16} color="white" /></TouchableOpacity>
                </View>
            </View>
        </View> 
      
    )
    

}

const style = StyleSheet.create({
    text: {fontSize: 14, fontWeight: 600, color: "b", textAlign: "center"},
    btn: {
        backgroundColor: "#EDEDED", 
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        width: 87,
        justifyContent: "center",
    },
})