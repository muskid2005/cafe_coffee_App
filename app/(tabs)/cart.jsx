import { Text, View, Image } from "react-native"
import FlatCard from "../../components/flatCard"
import { SafeAreaView } from "react-native-safe-area-context"
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const messages ={
    msg1: "Welcome to the platform. Your account has been successfully created. Explore our menu to discover premium roasts and customize your first order.",
    msg2: "Profile updated successfully. Your changes have been securely saved and your account settings are now up to date.",
    msg3: "Account verified successfully. Your identity has been confirmed, and full access to all features and secure transactions has been restored to your profile.",
    msg4: "A new version is available. Please update your app to access the latest features, security enhancements, and performance improvements.",
}

export default function Cart(){
    return (
        <SafeAreaView style={{alignItems: "center"}}>
            <Text style={{fontSize: 18, fontWeight: 600, alignSelf: "left", marginLeft: 44, marginTop: 36, marginBottom: 20}}>Order History</Text>
            <FlatCard price="$ 4.53" size="L" delivered="Delivered" message="Flat White" img={ <Image  source={require("../../assets/images/coffee2.png")} style={{ width: 45, height: 45, borderRadius: 10, overflow: 'hidden' }} /> } />
            <FlatCard price="$ 5.53" size="L" delivered="Delivered" message="Caffe Mocha" img={ <Image  source={require("../../assets/images/coffee1.png")} style={{ width: 45, height: 45, borderRadius: 10, overflow: 'hidden' }} /> } />
            <FlatCard price="$ 3.53" size="M" delivered="Delivered" message="Flat White" img={ <Image  source={require("../../assets/images/coffee2.png")} style={{ width: 45, height: 45, borderRadius: 10, overflow: 'hidden' }} /> } />
            <FlatCard price="$ 8.53" size="L" delivered="Cancelled" message="Mocha Fusi" img={ <Image  source={require("../../assets/images/coffee3.png")} style={{ width: 45, height: 45, borderRadius: 10, overflow: 'hidden' }} /> } />
            
        </SafeAreaView>
    )
}