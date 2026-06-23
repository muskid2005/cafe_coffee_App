import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function CustomButton({content, onPress, disable }){
    return (
        <TouchableOpacity disabled={disable} style={style.btn} onPress={onPress}>
            <Text style={style.text}>{content}</Text>
        </TouchableOpacity>
    )
    

}

const style = StyleSheet.create({
    text: {fontSize: 16, fontWeight: 600, color: "white"},
    btn: {
        backgroundColor: "#C67C4E",
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16,
        width: "100%",
        height: 56,
        justifyContent :"center",
        alignItems: "center",
        alignSelf: "center"
    },
})