import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";


const MemberGreeting = ({route}) =>
{
    console.log( route.params.user );
    var user = route.params.user;
    return (
        <SafeAreaView style={ styles.container }>
            <Text style={styles.confirm}>ÜYE KAYDI BAŞARILI!</Text>
            <Text style={styles.text}> Merhaba {user.userName} {user.userSurname}! {user.userAge} yaşındasın, {user.userCity} şehrinden kebap yiyorsun! </Text>
        </SafeAreaView>
    );
    
}
export default MemberGreeting;
const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor:"#e3eb90",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom:100
    },
    text: {
        fontSize: 51,
        fontWeight: "bold",
        margin: 10,
    
    },
    confirm: {
        backgroundColor: "#cddc39",
        color: "white",
        fontSize: 20,
        fontStyle:"italic"
    }
 })