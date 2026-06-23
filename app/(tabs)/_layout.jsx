import { HeaderShownContext } from "@react-navigation/elements"
import {Tabs} from "expo-router"
import { TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';


function TabIcon({icon, isFocused}){
        
        return (
            <View style={{alignItems: "center", gap: 5}}>
                {icon}
                {isFocused && <View style={{backgroundColor: "#C67C4E", width: 10, height: 5, borderRadius: 18}}></View>}
            </View>
            
        )
     }

export default function TabsLayout(){

    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
                borderTopWidth: 0,
                height: 99,
                paddingTop: 24
            }
        }}>

        

            <Tabs.Screen options={{
                title: "",
                tabBarIcon: ({focused})=> <TabIcon isFocused={focused} icon={<Octicons name={focused ? "home-fill" : "home"} size={24} color="#C67C4E" />} />
            }} name="home" />
            <Tabs.Screen options={{
                title: "",
                tabBarIcon: ({focused})=> <TabIcon isFocused={focused} icon={<Octicons name={focused ? "heart-fill" : "heart"} size={24} color="#C67C4E" />} />
            }} name="heart" />
            <Tabs.Screen options={{
                title: "",
                tabBarIcon: ({focused})=> <TabIcon isFocused={focused} icon={<Ionicons name={focused ? "bag" : "bag-outline"} size={24} color="#C67C4E" />} />
            }} name="cart" />
            <Tabs.Screen options={{
                title: "",
                tabBarIcon: ({focused})=> <TabIcon isFocused={focused} icon={<Octicons name={focused ? "bell-fill" : "bell"} size={24} color="#C67C4E" />} />
            }} name="notification" />
        </Tabs>
    )
}
