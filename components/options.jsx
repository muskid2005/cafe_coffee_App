import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function OptionButton({content, onpress, styleActiveBtn, styleActiveText}){
    return (
        <TouchableOpacity style={[style.btn, styleActiveBtn]}>
            <Text onPress={onpress} style={[style.text, styleActiveText]}>{content}</Text>
        </TouchableOpacity>
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