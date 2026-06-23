import { Text, View } from "react-native"
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

export default function Notification(){
    return (
        <SafeAreaView style={{alignItems: "center"}}>
            <Text style={{fontSize: 18, fontWeight: 600, alignSelf: "left", marginLeft: 44, marginTop: 36, marginBottom: 20}}>Notifications</Text>
            <FlatCard icon={<MaterialIcons name="system-security-update" size={24} color="#C67C4E" />}  message={messages.msg4}/>
            <FlatCard icon={<MaterialCommunityIcons name="card-account-details-star" size={24} color="#C67C4E"  />} message={messages.msg3} />
            <FlatCard icon ={<MaterialCommunityIcons name="account-details" size={24} color="#C67C4E" />} message={messages.msg2} />
            <FlatCard icon={<MaterialCommunityIcons name="human-greeting-variant" size={24} color="#C67C4E" />} message={messages.msg1}/>
            
        </SafeAreaView>
    )
}